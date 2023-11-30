"use client";
import useArray from "@/lib/hooks/useArray";
import React from "react";

const Misc = () => {
  const { array, filterArray, pushToArray, setArray, updateArray } = useArray([
    1, 2, 3,
  ]);
  const newArray = [];
  return (
    <div>
      Array utils
      <div>{array}</div>
      set array:{" "}
      <input
        type="text"
        id="fname"
        name="fname"
        onChange={(e) => {
          console.log(e.target.value);

          newArray.push(e.target.value);
        }}
      />
      <button onClick={() => setArray(newArray)}></button>
    </div>
  );
};

export default Misc;
