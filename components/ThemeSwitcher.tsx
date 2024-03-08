"use client";
import { useTheme } from "next-themes";
import { Box, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import BrightnessAutoIcon from "@mui/icons-material/BrightnessAuto";
import useMounted from "@/lib/hooks/useMounted";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const { mounted } = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={(e) => {
        const newtheme =
          theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
        setTheme(newtheme);
      }}
    >
      {theme.charAt(0).toUpperCase() + theme.slice(1)}
      <IconButton sx={{}} color="inherit">
        {theme === "system" ? (
          <BrightnessAutoIcon />
        ) : theme === "dark" ? (
          <DarkModeIcon />
        ) : (
          <LightModeIcon />
        )}
      </IconButton>
    </Box>
  );
};

export default ThemeSwitcher;
