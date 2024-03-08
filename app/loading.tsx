import { CircularProgress, Skeleton } from "@mui/material";
import React from "react";

const loading = () => {
  return (
    <>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={700}
        height={400}
      ></Skeleton>

      <div className="w-0.5">
        <CircularProgress size="md" />
      </div>
    </>
  );
};

export default loading;
