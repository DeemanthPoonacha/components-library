"use client";
import Scene from "@/components/CargoMonitor/Scene";
import { computeAdjacencyArray } from "@/lib/helpers";
import { Adjacent8, Cell } from "@/lib/schemas";
import load_data from "@/data.json";
import { useEffect, useState } from "react";
import AnimControls from "@/components/CargoMonitor/AnimControls";
import { Grid, Stack } from "@mui/material";
import ViewController from "./ViewController";
import { ViewControlsContext } from "@/lib/contexts/viewControlsContext";
import useViewControls from "@/lib/hooks/useViewControls";

const CargoMonitor = () => {
  const packageHeight = 5;
  const [step, setStep] = useState(0);
  const loadData = load_data[step];
  const MAX_STEP = load_data.length - 1;
  const zoomFactor =
    ((loadData.dimensions?.x + loadData.dimensions?.y) / 2) * 5;

  const viewControls = useViewControls({
    zoomFactor,
  });

  useEffect(() => {
    if (loadData) {
      loadData.shipments.map((shipment: { packages: any[] }, i: any) =>
        shipment.packages.map((pckg: { cells: any[] }) => {
          pckg.cells.map((cell: Cell, _: any, cells: any[]) => {
            let adjArr = Array(8).fill(0) as Adjacent8;
            cells.forEach((otherCell: Cell) => {
              computeAdjacencyArray(otherCell, cell, adjArr);
            });
            cell.adjArr = adjArr;
            cell.height = packageHeight;
          });
        })
      );
    }
  }, [loadData]);

  return (
    <Stack height={"100%"}>
      <ViewControlsContext.Provider value={viewControls}>
        <ViewController />
        <Scene loadData={loadData} zoomFactor={zoomFactor} />
      </ViewControlsContext.Provider>
      <AnimControls {...{ step, setStep, maxStep: MAX_STEP }} />
    </Stack>
  );
};

export default CargoMonitor;
