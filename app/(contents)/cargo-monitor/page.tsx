"use client";
import Scene from "@/components/CargoMonitor/Scene";
import { computeAdjacencyArray } from "@/lib/helpers";
import { Adjacent8, Cell, Dimensions } from "@/lib/schemas";
import load_data from "@/data.json";
import { useEffect, useState } from "react";
import { Exo_2 } from "next/font/google";

const CargoMonitor = () => {
  const packageHeight = 5;
  const [step, setStep] = useState(0);
  const loadData = load_data[step];
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
    <div>
      <Scene loadData={loadData} />
      <div className="flex justify-between">
        <button
          className="disabled:cursor-not-allowed disabled:text-slate-500"
          disabled={step === 0}
          onClick={() => {
            setStep((prev) => (prev - 1 >= 0 ? prev - 1 : 0));
          }}
        >
          {"< Previous"}
        </button>
        <button
          className="disabled:cursor-not-allowed disabled:text-slate-500"
          disabled={step === load_data.length - 1}
          onClick={() => {
            setStep((prev) =>
              prev + 1 < load_data.length ? prev + 1 : load_data.length - 1
            );
          }}
        >
          {"Next >"}
        </button>
      </div>
    </div>
  );
};

export default CargoMonitor;
