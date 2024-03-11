import React from "react";
import { Colors } from "@/lib/constants";

const CamControllerLayout = ({ children, className }) => {
  const indicatorColor = Colors.GRAY;

  const offsetAngle = 0;

  return (
    <div
      className={`${className} z-10 absolute flex justify-center items-center h-96 w-96 bg-black/20 rounded-md`}
    >
      <div // Start mark of the chart
        className="flex justify-center items-center relative w-72 h-72 rounded-full bg-slate-300/70"
        style={{
          boxShadow: "0 0 30px rgba(0,0,0,0.15)",
        }}
      >
        {children}
        <div
          className="relative flex items-center justify-center h-full"
          style={{
            transform: `rotate(${offsetAngle}deg)`,
            zIndex: 1,
            textAlign: "center",
            inset: 2,
          }}
        >
          {/* <div
            style={{
              width: 5,
              height: 30,
              zIndex: 100,
              left: "49.25%",
              backgroundColor: "black",
              display: "inline-block",
              position: "absolute",
            }}
          /> */}
          <div // Top indicator
            className={`z-10 absolute w-28 h-48 border-solid`}
            style={{
              borderStyle: "ridge",
              borderColor: indicatorColor,
              backgroundColor: "gray",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CamControllerLayout;
