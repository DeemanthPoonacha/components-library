import React from "react";
import ControlPanel from "./ControlPanel";
import { CamerasWithIndicators } from "./CamerasWithIndicators/CamController";

const ViewController = () => {
  return (
    <div className="relative">
      <ControlPanel />
      <CamerasWithIndicators />
    </div>
  );
};

export default ViewController;
