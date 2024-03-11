import { Vector3 } from "@react-three/fiber";

export interface ContourFormFields {
  uld: string;
  contour: string;
  weight?: number;
  volume_weight?: number;
}

export interface Camera {
  id: number;
  rotation?: number;
  className?: string;
  disabled?: boolean;
  faulty?: boolean;
  pos?: Vector3;
}

export interface Contour {
  name?: string;
  id?: string;
  dimensions?: {
    l: number;
    b: number;
    h: number;
  };
  max_weight?: number;
  volume_weight?: number;
  label?: string;
}

export enum Mode {
  STAGE = "stage",
  SCALE = "scale",
}

export enum ProcessState {
  PROCESSING = 21,
  COMPLETED = 22,
  ERROR = 1,
}
export interface FitData {
  id: string | number;
  fit: boolean | "default";
}
export interface WebsocketResonse {
  status?: ProcessState;
  error?: string;
  message?: string;
  fill_up_data?: number;
  volume_data?: number;
  fit_data?: FitData[];
}

export type TransformType = "translate" | "rotate";

export enum TanslateDirection {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}
export enum RotateDirection {
  CLOCKWISE = "clockwise",
  ANTICLOCKWISE = "anticlockwise",
}

export enum Units {
  TRANSLATION = "mm",
  ROTATION = "°",
}
