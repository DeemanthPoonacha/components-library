export const NODE_ENV = process.env.NODE_ENV;
export const isProductionMode =
  process.env.NODE_ENV === undefined || process.env.NODE_ENV === "production";
export const isDevelopmentMode = process.env.NODE_ENV === "development";

export const DB_URL = process.env.DB_URL || "mongodb://localhost:27017";
export const DB_NAME = process.env.DB_NAME || "cargo_data";
export const COLLECTION_NAME =
  process.env.DB_COLLECTION_NAME || "loading_levels";

export const shipmentColors = [
  "#FFE4D6",
  "#FACBEA",
  "#D988B9",
  "#B0578D",
  "#F875AA",
  "#FFF3E2",
  "#FFDFDF",
  "#FFF6F6",
  "#AEDEFC",
  "#FFE5CA",
  "#FA9884",
  "#E74646",
];

export const WEBSOCKET_URL =
  process.env.NEXT_PUBLIC_WEBSOCKET_URL || "ws://localhost:8000/ws";

export const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export const CHANGE_CAMERA_API_URL = "/camera/change";
export const TRANSFORM_CONTOUR_API_URL = "/contour/transform";
export const CONTOURS_API_URL = "/contours";
export const START_API_URL = "/start";
export const STOP_API_URL = "/stop";

export enum Colors {
  RED = "#ff0000",
  GREEN = "#00b050",
  BLUE = "#1976d2",
  WHITE = "#fff",
  GRAY = "#808080",
  LIGHT_GRAY = "#d3d3d3",
}
