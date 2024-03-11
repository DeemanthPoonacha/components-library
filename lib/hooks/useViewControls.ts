import { Vector3 } from "@react-three/fiber";
import React, { useState } from "react";

const useViewControls = ({ zoomFactor }) => {
  const [isOrtho, setIsOrtho] = useState(true);
  const [lockView, setLockView] = useState(false);
  const defaultCamPos: Vector3 = [15, 15, 15];
  const [camPos, setCamPos] = useState<Vector3>(defaultCamPos);
  const [camZoom, setCamZoom] = useState<number>(zoomFactor);
  // const defaultCamRot: Euler = [0, 0, 0];
  // const defaultCamQuot: Quaternion = new Quaternion(0, 0, 0);
  // const [camRot, setCamRot] = useState<Euler>(defaultCamRot);
  // const [camQuot, setCamQuot] = useState<Quaternion>(defaultCamQuot);
  // const [camProps, setCamProps] = useState({});

  const handleReset = () => {
    setCamPos(defaultCamPos);
    setCamZoom(zoomFactor);
    setIsOrtho(true);
    setLockView(false);
    // fetchLoadingLevels();
    // setCamRot(defaultCamRot);
  };

  return {
    isOrtho,
    lockView,
    camPos,
    camZoom,
    handleReset,
    setCamPos,
    setIsOrtho,
    setLockView,
  };
};

export default useViewControls;
