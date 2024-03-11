import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { Vector3 } from "@react-three/fiber";
export interface ViewControls {
  isOrtho: boolean;
  lockView: boolean;
  camPos: Vector3;
  camZoom: number;
  handleReset: () => void;
  setCamPos: Dispatch<SetStateAction<Vector3>>;
  setIsOrtho: Dispatch<SetStateAction<boolean>>;
  setLockView: Dispatch<SetStateAction<boolean>>;
}

export const ViewControlsContext = createContext<ViewControls>(undefined);

export const useViewControlsContext = (): ViewControls => {
  const controls = useContext(ViewControlsContext);
  console.log(controls);

  return controls;
};
