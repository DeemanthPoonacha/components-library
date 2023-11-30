import { Line } from "@react-three/drei";
import config from "@/config.json";
export default function Grid({ rows, columns, lineWidth = 1 }): JSX.Element {
  if (!rows && !columns) return <></>;
  const { HEIGHT_OFFSET, Y_OFFSET } = config;
  const halfSizeR = rows / 2;
  const halfSizeC = columns / 2;

  const offset = (rows + columns) / 2;
  const horizontalLines = [...Array(rows + 1)].map((_, index) => {
    const pointA = [
      -halfSizeC,
      -HEIGHT_OFFSET + 0.0001,
      offset - index - halfSizeC - Y_OFFSET,
    ];
    const pointB = [
      halfSizeC,
      -HEIGHT_OFFSET + 0.0001,
      offset - index - halfSizeC - Y_OFFSET,
    ];
    return (
      <Line
        key={`horizontal-${index}`}
        points={[...pointA, ...pointB]}
        lineWidth={lineWidth}
      />
    );
  });

  const verticalLines = [...Array(columns + 1)].map((_, index) => {
    const pointA = [
      offset - index - halfSizeR,
      -HEIGHT_OFFSET + 0.0001,
      -halfSizeR - Y_OFFSET,
    ];
    const pointB = [
      offset - index - halfSizeR,
      -HEIGHT_OFFSET + 0.0001,
      halfSizeR - Y_OFFSET,
    ];
    return (
      <Line
        key={`vertical-${index}`}
        points={[...pointA, ...pointB]}
        lineWidth={lineWidth}
      />
    );
  });

  return (
    <>
      {horizontalLines}
      {verticalLines}
    </>
  );
}
