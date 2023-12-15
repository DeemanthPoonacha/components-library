"use client";
import { Button, Slider, Stack, Typography } from "@mui/material";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface AnimControlProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  maxStep: number;
}
const AnimControls = ({ step, setStep, maxStep }: AnimControlProps) => {
  const [animState, setAnimState] = useState<"forward" | "backward" | null>(
    null
  );
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    console.log(animState);

    let intervalId;
    if (animState) {
      let i = 0;
      intervalId = setInterval(() => {
        animState === "forward" ? incrementStep() : decrementStep();
        console.log(i++, step);
      }, 500 / speed);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [animState]);
  useEffect(() => {
    (step >= maxStep || step <= 0) && setAnimState(null);
  }, [step]);

  const decrementStep = () => {
    setStep((prev) => (prev - 1 >= 0 ? prev - 1 : 0));
  };
  const incrementStep = () => {
    setStep((prev) => (prev + 1 <= maxStep ? prev + 1 : maxStep));
  };
  return (
    <Stack
      direction={"row"}
      spacing={4}
      alignItems={"center"}
      className="bg-slate-500/50 p-2"
    >
      <Typography>Animation Control:</Typography>
      <Button
        variant="contained"
        disableElevation
        // className="disabled:cursor-not-allowed disabled:text-slate-500"
        disabled={(!animState && step === 0) || animState !== null}
        onClick={decrementStep}
      >
        {"< Previous"}
      </Button>
      <Button
        variant="contained"
        disableElevation
        // className="disabled:cursor-not-allowed disabled:text-slate-500"
        disabled={(!animState && step === maxStep) || animState !== null}
        onClick={incrementStep}
      >
        {"Next >"}
      </Button>
      <Stack gap={2} direction={"row"} alignItems={"center"}>
        <Typography>Speed:</Typography>
        <Slider
          aria-label="Speed"
          className="w-40"
          valueLabelDisplay="auto"
          value={speed}
          onChange={(event, value: number) => setSpeed(value)}
          getAriaValueText={(value) => `${value}x`}
          step={0.5}
          marks
          min={0.5}
          max={3}
          disabled={animState !== null}
        />
      </Stack>
      <Button
        variant="contained"
        disableElevation
        // className="disabled:cursor-not-allowed disabled:text-slate-500"
        disabled={(!animState && step === maxStep) || animState !== null}
        onClick={() => {
          setAnimState("forward");
        }}
      >
        {"Load Cargo"}
      </Button>
      <Button
        variant="contained"
        disableElevation
        // className="disabled:cursor-not-allowed disabled:text-slate-500"
        disabled={(!animState && step === 0) || animState !== null}
        onClick={() => {
          setAnimState("backward");
        }}
      >
        {"Unload Cargo"}
      </Button>
    </Stack>
  );
};
export default AnimControls;
