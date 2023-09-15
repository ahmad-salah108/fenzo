import { createTheme } from "@mui/material";
import i18next from "i18next";
import { arSA } from "@mui/material/locale";
import { enUS } from "@mui/x-data-grid";

export const theme = createTheme(
  {
    ...(i18next.language === "ar" && { direction: "rtl" }),
    palette: {
      primary: {
        main: "rgba(219, 183, 155, 1)",
        contrastText: '#fff'
      },
      secondary: {
        main: "rgba(241, 243, 241, 1)"
      }
    },
  },
  i18next.language === "ar" ? arSA : enUS
);