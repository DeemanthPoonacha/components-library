import { Vector3 } from "@react-three/fiber";
import { useState } from "react";
import { ViewControls } from "../contexts/viewControlsContext";

const useViewControls = ({ zoomFactor }): ViewControls => {
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
  const [selectedCamera, setSelectedCamera] = useState(1);

  const handleReset = () => {
    setCamPos(defaultCamPos);
    setCamZoom(zoomFactor);
    setIsOrtho(true);
    setLockView(false);
    // fetchLoadingLevels();
    // setCamRot(defaultCamRot);
  };
  const handleCamButtonClick = (pos: Vector3, isOrtho: boolean) => {
    handleReset();
    setIsOrtho(isOrtho);
    setCamPos(pos);
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
    handleCamButtonClick,
    selectedCamera,
    setSelectedCamera,
  };
};

export default useViewControls;
