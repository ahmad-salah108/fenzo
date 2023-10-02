import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Package from "./Package";

export default function ChoosePackages() {
  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box sx={{ marginTop: '3rem' }}>
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: "700",
          fontFamily: "Aleo, serif !important",
        }}
      >
        Choose Any Packages
      </Typography>
      <Stack
        sx={{
          // width: { xs: "90vw", lg: "auto" },
          width: 'fit-content',
          paddingInlineEnd: '1.5rem',
          gap: "3rem",
          overflow: "auto",
          height: { xs: "177px", lg: "540px" },
          marginTop: "1rem",
          "&::-webkit-scrollbar": { width: "6px", height: "6px" },
        }}
      >
        <Box>
          <Package />
        </Box>
        <Box>
          <Package />
        </Box>
        <Box>
          <Package />
        </Box>
        <Box>
          <Package />
        </Box>
        <Box>
          <Package />
        </Box>
        <Box>
          <Package />
        </Box>
        <Box>
          <Package />
        </Box>
        <Box>
          <Package />
        </Box>
      </Stack>
    </Box>
  );
}
