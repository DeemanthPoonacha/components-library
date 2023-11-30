import { Vector3 } from "@react-three/fiber";

export type Adjacent8 = [
  left: number,
  topLeft: number,
  top: number,
  topRight: number,
  right: number,
  bottomRight: number,
  bottom: number,
  bottomLeft: number
];
export interface Cell {
  x: number;
  y: number;
  height?: number;
  adjArr?: Adjacent8;
}
export interface Dimensions {
  x: number;
  y: number;
}
export interface LoadingLevel {
  _id?: string;
  truck?: string;
  /**
   * A date-time with timezone data.
   */
  timestamp: string;
  dimensions: Dimensions;
  shipments: Shipment[];
  image: string;
}
export interface Shipment {
  id?: string;
  packages: Package[];
}
export interface Package {
  id?: string;
  cells: Cell[];
}

export interface PackageProps {
  id: string;
  index: number;
  boxes: BoxProps[];
  status: "added" | "removed" | "existing";
  shipmentId: string;
  truckId: string;
  size?: number;
}
export interface BoxProps {
  position: Vector3;
  size: [
    width?: number,
    height?: number,
    depth?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number
  ];
  color: string;
  packageId: string;
  shipmentIndex: number;
}
