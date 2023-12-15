"use client";
import useArray from "@/lib/hooks/useArray";
import React from "react";

const ArrayUtils = () => {
  const { array, filterArray, pushToArray, setArray, updateArray, clearArray } =
    useArray([1, 2, 3]);
  let newArray = [];
  return (
    <div>
      <div>
        <div className="flex gap-4">
          Current Array: [ {array.join(" , ")} ]
          <button onClick={() => clearArray()}>Clear</button>
        </div>
        Set array:{" "}
        <input
          className="dark:text-black"
          onChange={(e) => {
            console.log(e.target.value);

            newArray = e.target.value.split(",");
          }}
        />
        <button onClick={() => setArray(newArray)}>OK</button>
      </div>
      <div>
        Push to array:{" "}
        <input
          className="dark:text-black"
          onChange={(e) => {
            newArray = e.target.value.split(",");
          }}
        />
        <button onClick={() => pushToArray([newArray])}>OK</button>
      </div>
    </div>
  );
};

export default ArrayUtils;
