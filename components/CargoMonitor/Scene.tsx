import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import Container from "./Container";
import { LoadingLevel } from "@/lib/schemas";
import config from "@/config.json";
import { useViewControlsContext } from "@/lib/contexts/viewControlsContext";

interface SceneProps {
  loadData: LoadingLevel;
  zoomFactor: number;
}
const Scene: React.FC<SceneProps> = ({ loadData, zoomFactor }) => {
  const PADDING_BETWEEN_PACKAGES = config.PADDING_BETWEEN_PACKAGES;

  const controls = useViewControlsContext();
  if (!controls) return <></>;

  const { camPos, camZoom, isOrtho, lockView, setCamPos } = controls;
  return (
    <>
      <Canvas
        className="bg-slate-300/50 !h-[75vh]"
        camera={{ position: camPos, fov: 55 }}
        // style={{ height: "70vh", margin: "auto" }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {loadData && (
            <Container
              loadData={loadData}
              cellPadding={PADDING_BETWEEN_PACKAGES}
            />
          )}
        </Suspense>
        <OrbitControls
          onChange={(e) => {
            const { position } = e.target.object;
            isOrtho &&
              // setCamZoom(zoom > 60 ? 60 : zoom < 30 ? 30 : zoom);
              setCamPos(position);
            // setCamRot(e.target.object.rotation);
            // setCamQuot(e.target.object.quaternion);
            // setCamProps(e.target.object);
          }}
          enabled={!lockView}
          enablePan={false}
          minDistance={10}
          maxDistance={zoomFactor / 2}
          maxPolarAngle={Math.PI / 2}
        />
        {isOrtho ? (
          <OrthographicCamera
            makeDefault
            // {...{
            //     isOrthographicCamera: true,
            //     zoom: camProps.zoom * zoomFactor,
            //     ...camProps,
            // }}
            // quaternion={camQuot}
            // rotation={camRot}
            position={camPos}
            zoom={camZoom}
            near={-1}
            far={1000}
          />
        ) : (
          <PerspectiveCamera
            makeDefault
            // {...{
            //     isPerspectiveCamera: true,
            //     zoom: (camProps.zoom * zoomFactor) / 100,
            //     ...camProps,
            // }}
            // quaternion={camQuot}
            // rotation={camRot}
            position={camPos}
          />
        )}
        <directionalLight position={[2, 8, 4]} intensity={0.6} />
        <directionalLight position={[-2, 8, -6]} intensity={1.6} />
        <ambientLight intensity={2} />
      </Canvas>
    </>
  );
};
export default Scene;
