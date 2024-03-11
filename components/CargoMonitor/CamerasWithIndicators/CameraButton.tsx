import { Colors } from "@/lib/constants";
import { Camera } from "@/lib/types";
import { Dispatch, SetStateAction, useEffect } from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import { useViewControlsContext } from "@/lib/contexts/viewControlsContext";

interface CameraButtonProps extends Camera {}
export const CameraButton = ({
  id,
  rotation,
  className,
  disabled,
  faulty,
  pos,
}: CameraButtonProps) => {
  const controls = useViewControlsContext();
  const {
    handleCamButtonClick,
    isOrtho,
    camPos,
    selectedCamera,
    setSelectedCamera,
  } = controls;
  const selected = selectedCamera === id;

  const handleCameraClick = (view: number) => {
    if (pos !== camPos) {
      console.log("Changing Camera to", id);
      handleCamButtonClick(pos, isOrtho);
      setSelectedCamera(view);
    }
  };

  const radius = -200;
  const rotationinRad = (rotation * Math.PI) / 180;
  const [buttonX, buttonY] = [
    rotation ? radius * Math.cos(rotationinRad) : 0,
    rotation ? radius * Math.sin(rotationinRad) : 0,
  ];

  const icon =
    disabled || faulty || selected ? (
      <VideocamIcon
        style={{
          fontSize: 38,
          color: faulty ? Colors.RED : selected ? Colors.BLUE : "lightgray",
          rotate: `${rotation || 90}deg`,
        }}
      />
    ) : (
      <VideocamOutlinedIcon
        style={{ fontSize: 38, rotate: `${rotation || 90}deg` }}
      />
    );
  const xOffset = rotation ? 14 : 14;
  const yOffset = rotation ? 5 : 2;
  const label = (
    <span
      className="absolute font-bold text-lg"
      style={{
        translate: `${buttonX * 0.01 + xOffset}px ${
          buttonY * 0.01 + yOffset
        }px`,
        color: selected || faulty ? Colors.WHITE : "",
      }}
    >
      {id}
    </span>
  );

  return (
    <button
      id={`camButton-${id}`}
      disabled={disabled}
      className={`${className} ${
        selected ? `border-[#1976d2]` : ""
      } absolute p-1.5 rounded-lg cursor-pointer bg-white z-20 flex shadow-md hover:!text-blue-500 hover:border-blue-500 hover:shadow-sm hover:shadow-blue-500/50 text-gray-700  disabled:cursor-not-allowed disabled:border-gray-400 disabled:hover:!text-gray-400 disabled:!text-gray-400 disabled:hover:border-gray-400 disabled:bg-gray-100 disabled:!shadow-none disabled:hover:!shadow-none`}
      style={{
        translate: `${buttonX}px ${buttonY}px`,
      }}
      onClick={() => handleCameraClick(id)}
    >
      {icon}
      {label}
    </button>
  );
};
