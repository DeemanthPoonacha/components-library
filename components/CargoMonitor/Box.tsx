import React, { useEffect, useRef, useState } from "react";
import { BoxProps } from "@/lib/schemas";
import { Vector3 } from "@react-three/fiber";
import * as TWEEN from "@tweenjs/tween.js";
import config from "@/config.json";

const animExitHeight = 10;
const Box = ({ box, selected, setSelected, dx, dy, dz, pckg }) => {
  const boxRef = useRef(null);

  const { Y_OFFSET: Z_OFFSET, X_SCALE, Y_SCALE: Z_SCALE } = config;

  const { position, size, color, packageId } = box as BoxProps;
  const initPosition: Vector3 = [
    position[0] * X_SCALE + (dx / 2) * (X_SCALE - 1),
    position[1] + dy,
    position[2] * Z_SCALE + (dz / 2) * (Z_SCALE - 1) - Z_OFFSET,
  ];

  const animSpeed = 2;
  const handleClick = (event) => {
    event.stopPropagation();
    setSelected(selected?.id === packageId ? null : pckg);
  };
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const startValues = {
      y: dy ? dy : position[1],
    };
    const endValues = {
      y: dy ? position[1] : animExitHeight,
    };
    const tween = new TWEEN.Tween(startValues)
      .to(endValues)
      .easing(dy ? TWEEN.Easing.Bounce.Out : TWEEN.Easing.Quadratic.In)
      .onUpdate(() => {
        return (boxRef.current.position.y = startValues.y);
      })
      .onStart(() => setIsVisible(true))
      .onComplete(() => setIsVisible(dy as boolean))
      .duration(1000 / animSpeed)
      .start();
    function animate() {
      requestAnimationFrame(animate);
      TWEEN.update();
    }
    animate();
    return () => {
      tween.stop();
    };
  }, [dy]);

  return (
    <mesh ref={boxRef} position={initPosition} onClick={handleClick}>
      {isVisible && (
        <>
          {selected?.id === packageId ? (
            <meshStandardMaterial color="#6e94e6" />
          ) : (
            <meshStandardMaterial color={color} />
          )}
          <boxGeometry args={[size[0] * X_SCALE, size[1], size[2] * Z_SCALE]} />
        </>
      )}
    </mesh>
  );
};

export default Box;
