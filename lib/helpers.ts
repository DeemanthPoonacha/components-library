import { Adjacent8, Cell, Dimensions, BoxProps } from "@/lib/schemas";
import { shipmentColors } from "./constants";

export const isLCenter = (adjArr: Adjacent8) =>
  (adjArr[0] && adjArr[2] && !adjArr[1]) ||
  (adjArr[2] && adjArr[4] && !adjArr[3]) ||
  (adjArr[4] && adjArr[6] && !adjArr[5]) ||
  (adjArr[6] && adjArr[0] && !adjArr[7]);

export const computeAdjacencyArray = (
  otherCell: Cell,
  cell: Cell,
  adjArr: Adjacent8
) => {
  // Starting from the left
  // Lef, LeftTop, Top, TopRight, Right, RightBottom, Bottom
  const dx: Adjacent8 = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy: Adjacent8 = [0, -1, -1, -1, 0, 1, 1, 1];
  for (let i = 0; i < adjArr.length; i++) {
    if (otherCell.x === cell.x + dx[i] && otherCell.y === cell.y + dy[i]) {
      adjArr[i] = 1;
    }
  }
};
interface ComputeProps {
  cell: Cell;
  shipmentIndex: number;
  packageIndex: number;
  packageId: string;
  plane: Dimensions;
  cellPadding?: number;
  adjArr?: number[];
  X_SCALE: number;
  Y_SCALE: number;
  HEIGHT_OFFSET: number;
}
export const computeBoxProps = ({
  cell,
  shipmentIndex,
  packageIndex,
  packageId,
  plane,
  cellPadding = 0.1,
  adjArr,
  X_SCALE,
  Y_SCALE,
  HEIGHT_OFFSET,
}: ComputeProps): BoxProps => {
  const xOffset = (1 - plane.x) / 2;
  const yOffset = (1 - plane.y) / 2;
  let paddingFactorX = 0;
  let paddingFactorY = 0;
  let adjustPosX = 0;
  let adjustPosY = 0;
  if (adjArr) {
    const posX = adjArr[4] - adjArr[0];
    const posY = adjArr[6] - adjArr[2];
    paddingFactorX = adjArr[0] + adjArr[4];
    paddingFactorY = adjArr[2] + adjArr[6];
    adjustPosX = (posX * paddingFactorX * cellPadding) / X_SCALE / 2;
    adjustPosY = (posY * paddingFactorY * cellPadding) / Y_SCALE / 2;
  }
  return {
    position: [
      cell.x + xOffset + adjustPosX,
      cell.height / 2 - HEIGHT_OFFSET,
      cell.y + yOffset + adjustPosY,
    ],
    size: [
      1 - ((1 - paddingFactorX) * cellPadding) / X_SCALE,
      cell.height,
      1 - ((1 - paddingFactorY) * cellPadding) / Y_SCALE,
    ],
    color:
      shipmentColors.length > shipmentIndex && shipmentColors[shipmentIndex]
        ? shipmentColors[shipmentIndex]
        : `#00FFFF`,
    packageId,
    shipmentIndex,
  };
};

export const generateRandomColor = () => {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return `#${color}`;
};

export const formatKey = (key) => {
  if (typeof key !== "string") {
    return key;
  }

  const words = key
    .replace(/([A-Z])/g, " $1")
    .trim()
    .split(" ");

  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1) + " ";
  });

  return capitalizedWords.join(" ");
};

export const blocksGenerator = ({ x: maxX, y: maxY }: Dimensions) => {
  const size = Math.round(Math.random() * 15) + 4;
  const origin = {
    x: Math.round(Math.random() * maxX),
    y: Math.round(Math.random() * maxY),
  };
  const cells = [origin];

  for (let i = 0; i < size; i++) {
    const dirX = Math.round(Math.random()) * 2 - 1;
    const dirY = Math.round(Math.random()) * 2 - 1;

    const cell = {
      x: cells[i].x + dirX,
      y: cells[i].y + dirY,
    };

    // Ensure the generated cell is within the specified dimensions
    if (cell.x >= 0 && cell.x <= maxX && cell.y >= 0 && cell.y <= maxY) {
      cells.push(cell);
    }
  }

  return cells;
};

// // Example usage:
// const dimensions = { x: 10, y: 10 }; // Replace with your desired dimensions
// const generatedCells = blocksGenerator(dimensions);
// console.log(generatedCells);
