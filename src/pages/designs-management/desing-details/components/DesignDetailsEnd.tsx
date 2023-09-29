import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import PackageHorizontal from "./PackageHorizontal";

export default function DesignDetailsEnd() {
  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box sx={{ marginTop: { xs: "3rem", lg: "initial" } }}>
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: "700",
          fontFamily: "Aleo, serif !important",
        }}
      >
        Related Packages
      </Typography>
      <Stack
        {...(lgDown && { direction: "row" })}
        sx={{
          width: { xs: "90vw", lg: "auto" },
          gap: "3rem",
          overflow: "auto",
          height: { xs: "177px", lg: "540px" },
          marginTop: "1rem",
          "&::-webkit-scrollbar": { width: "6px", height: "6px" },
        }}
      >
        <Box>
          <PackageHorizontal />
        </Box>
        <Box>
          <PackageHorizontal />
        </Box>
        <Box>
          <PackageHorizontal />
        </Box>
        <Box>
          <PackageHorizontal />
        </Box>
        <Box>
          <PackageHorizontal />
        </Box>
        <Box>
          <PackageHorizontal />
        </Box>
        <Box>
          <PackageHorizontal />
        </Box>
        <Box>
          <PackageHorizontal />
        </Box>
      </Stack>
    </Box>
  );
}