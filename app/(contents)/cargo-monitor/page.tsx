"use client";
import Scene from "@/components/CargoMonitor/Scene";
import { computeAdjacencyArray } from "@/lib/helpers";
import { Adjacent8, Cell, Dimensions } from "@/lib/schemas";
import load_data from "@/data.json";
import { useEffect, useRef, useState } from "react";
import { Exo_2 } from "next/font/google";
import AnimControls from "../../../components/CargoMonitor/AnimControls";

const CargoMonitor = () => {
  const packageHeight = 5;
  const [step, setStep] = useState(0);
  const loadData = load_data[step];
  const MAX_STEP = load_data.length - 1;

  useEffect(() => {
    loadData.shipments.map((shipment: { packages: any[] }, i: any) =>
      shipment.packages.map((pckg: { cells: any[] }) => {
        pckg.cells.map((cell: Cell, _: any, cells: any[]) => {
          let adjArr = Array(8).fill(0) as Adjacent8;
          cells.forEach((otherCell: Cell) => {
            computeAdjacencyArray(otherCell, cell, adjArr);
          });
          cell.adjArr = adjArr as Adjacent8;
          cell.height = packageHeight;
        });
      })
    );
  }, [loadData]);

  return (
    <>
      <Scene loadData={loadData} />
      <AnimControls {...{ step, setStep, maxStep: MAX_STEP }} />
    </>
  );
};

export default CargoMonitor;
