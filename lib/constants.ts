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
