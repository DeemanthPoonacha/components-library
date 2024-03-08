import CargoMonitor from "@/components/CargoMonitor/CargoMonitor";
import { Typography } from "@mui/material";
import { Metadata } from "next";

const title = "Cargo Monitor";
export const metadata: Metadata = {
  title,
};

const Page = () => (
  <>
    <Typography variant="h3">{title}</Typography>
    <CargoMonitor />
  </>
);

export default Page;
