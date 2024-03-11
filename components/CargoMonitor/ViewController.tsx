import React from "react";
import ControlPanel from "./ControlPanel";
import { useViewControlsContext } from "@/lib/contexts/viewControlsContext";

const ViewController = () => {
  const controls = useViewControlsContext();
  if (!controls) return;

  const { handleReset, isOrtho, lockView, setIsOrtho, setLockView } = controls;
  return (
    <>
      <ControlPanel
        {...{ handleReset, setLockView, lockView, isOrtho, setIsOrtho }}
      />
    </>
  );
};

export default ViewController;
