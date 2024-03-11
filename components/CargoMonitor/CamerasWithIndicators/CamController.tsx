import CamControllerLayout from "./CamControllerLayout";
import { CameraButton } from "./CameraButton";
import { Camera } from "@/lib/types";

export function CamerasWithIndicators({}) {
  const cameras: Camera[] = [
    {
      rotation: 45,
      id: 1,
      pos: [-15, 15, -15],
    },
    {
      rotation: 135,
      id: 2,
      pos: [15, 15, -15],
    },
    {
      rotation: 225,
      id: 3,
      pos: [15, 15, 15],

      //   disabled: true,
    },
    {
      rotation: 315,
      id: 4,
      pos: [-15, 15, 15],
      //   faulty: true,
      //   disabled: true,
    },
    {
      id: 5,
      pos: [0, 25, 0],
      //   faulty: true,
    },
  ];

  return (
    <CamControllerLayout
      className={"right-1 top-16"}
      children={cameras.map((camera, i) => (
        <CameraButton
          key={i}
          {...camera}
          // rotation={camera.rotation + 90}
        />
      ))}
    />
  );
}
