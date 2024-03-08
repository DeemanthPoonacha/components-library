import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignContent={"center"}
      className="bg-blue-600/40 w-full"
    >
      <Link href="/">
        <Image
          color="white"
          src={"next.svg"}
          alt="logo"
          width={150}
          height={50}
          className="px-2"
        />
        {/* <Typography variant="h5">Home</Typography> */}
      </Link>
      <ThemeSwitcher />
    </Stack>
  );
};

export default Header;
