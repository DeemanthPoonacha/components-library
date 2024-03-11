import { Adjacent8, LoadingLevel } from "@/lib/schemas";
import React, { useEffect, useRef, useState } from "react";
import Grid from "./Grid";
import {
  computeAdjacencyArray,
  computeBoxProps,
  isLCenter,
} from "../../lib/helpers";
import { BoxProps, PackageProps } from "@/lib/schemas";
import Box from "./Box";
import config from "@/config.json";

// import { Physics, usePlane, useBox } from '@react-three/cannon'

function Plane({ position, rotation, size, color }) {
  const ref = useRef();
  return (
    <mesh position={position} rotation={rotation} ref={ref}>
      <planeGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

interface ContainerProps {
  cellPadding?: number;
  loadData?: LoadingLevel;
}
const Container: React.FC<ContainerProps> = ({
  loadData,
  cellPadding = 0.1,
}) => {
  //   const { selectedPackageId } = GlobalStore.useStoreState(
  //     (state) => state.general
  //   );

  const [selectedPackage, setSelectedPackage] = useState();

  const { HEIGHT_OFFSET, EXTRA_HIDDEN_ROWS, X_SCALE, Y_SCALE } = config;
  const plane = loadData?.dimensions;
  const [packages, setPackages] = useState<PackageProps[]>([]);

  useEffect(() => {
    console.log("container", config);
  }, [config]);

  //   useEffect(() => {
  //     if (packages && selectedPackageId) {
  //       const matchingPackage = packages?.find((p) => p.id === selectedPackageId);
  //       matchingPackage && setSelectedPackage(matchingPackage);
  //     } else if (!selectedPackageId) {
  //       setSelectedPackage(null);
  //     }
  //   }, [selectedPackageId]);

  const computePackages = () => {
    setPackages((prev) => prev.map((pckg) => ({ ...pckg, status: "removed" })));
    loadData?.shipments?.map((shipment, i) => {
      shipment.packages.map((pckg, j) => {
        const newPackageBoxes: BoxProps[] = [];
        pckg.cells.map((cell, _k, cells) => {
          if (isLCenter(cell.adjArr)) {
            const adjArr = Array(8).fill(0) as Adjacent8;
            cells.forEach((otherCell) => {
              if (isLCenter(otherCell.adjArr)) {
                computeAdjacencyArray(otherCell, cell, adjArr);
              }
            });
            if (adjArr.includes(1)) {
              if (isLCenter(adjArr)) {
                newPackageBoxes.push(
                  computeBoxProps({
                    cell,
                    packageIndex: j,
                    shipmentIndex: i,
                    packageId: pckg.id,
                    plane,
                    cellPadding,
                    X_SCALE,
                    Y_SCALE,
                    HEIGHT_OFFSET,
                  })
                );
              } else {
                newPackageBoxes.push(
                  computeBoxProps({
                    cell,
                    packageIndex: j,
                    shipmentIndex: i,
                    packageId: pckg.id,
                    plane,
                    cellPadding,
                    adjArr,
                    X_SCALE,
                    Y_SCALE,
                    HEIGHT_OFFSET,
                  })
                );
              }
            } else {
              newPackageBoxes.push(
                computeBoxProps({
                  cell,
                  packageIndex: j,
                  shipmentIndex: i,
                  packageId: pckg.id,
                  plane,
                  cellPadding,
                  X_SCALE,
                  Y_SCALE,
                  HEIGHT_OFFSET,
                })
              );
            }
          } else {
            newPackageBoxes.push(
              computeBoxProps({
                cell,
                packageIndex: j,
                shipmentIndex: i,
                packageId: pckg.id,
                plane,
                cellPadding,
                adjArr: cell.adjArr,
                X_SCALE,
                Y_SCALE,
                HEIGHT_OFFSET,
              })
            );
          }
        });
        setPackages((prev) => {
          const existingPackage = prev.find(
            (pkg) => pkg.id === pckg.id
            // && pkg.size === pckg.cells.length
          );

          if (existingPackage) {
            existingPackage.status = "existing";
            return prev.map((pkg) =>
              pkg.id === pckg.id ? existingPackage : pkg
            );
          } else {
            // Add new package
            const newPackage: PackageProps = {
              index: j,
              boxes: newPackageBoxes,
              size: newPackageBoxes.length,
              status: "added",
              id: pckg.id,
              shipmentId: shipment.id,
              truckId: loadData.truck,
            };
            return [...prev, newPackage];
          }
        });
      });
    });
  };
  useEffect(computePackages, [loadData, config]);

  if (!loadData) return <></>;
  return (
    <>
      <Plane
        position={[0, -HEIGHT_OFFSET, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        size={[plane?.x, plane?.y + EXTRA_HIDDEN_ROWS]}
        color={"grey"}
      />
      <Grid rows={plane?.y} columns={plane?.x} />
      {packages?.map((pckg) =>
        pckg.boxes.map((box, i) => {
          return (
            <Box
              key={i}
              box={box}
              pckg={pckg}
              selected={selectedPackage}
              setSelected={setSelectedPackage}
              dx={plane?.x}
              dy={pckg.status !== "removed" ? box.size[1] + 1 : 0}
              dz={plane?.y}
            />
          );
        })
      )}
    </>
  );
};

export default Container;
