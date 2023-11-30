import React, { useState } from "react";

const useArray = (defaultValue) => {
  type ElementType = typeof defaultValue;
  const [array, setArray] = useState<Array<ElementType>>(defaultValue);

  const pushToArray = (element: ElementType) => {
    setArray((a) => [...a, element]);
  };

  const filterArray = (
    callback: (
      value: ElementType,
      index: number,
      array: ElementType[]
    ) => value is ElementType
  ) => {
    setArray((a) => a.filter(callback));
  };

  const updateArray = (index: number, newElement: ElementType) => {
    setArray((a) => [...a.slice(0, index), newElement, ...a.slice(index + 1)]);
  };

  const removeElementAtIndex = (index: number) => {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1)]);
  };

  const clearArray = () => {
    setArray([]);
  };

  return {
    array,
    clearArray,
    filterArray,
    pushToArray,
    removeElementAtIndex,
    setArray,
    updateArray,
  };
};

export default useArray;
