import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import Chairs from "../../designs-management/extra-categories/components/Chairs";
import { Delete, Sell } from "@mui/icons-material";

export default function OrderItem() {
  return (
    <Stack
      direction={"row"}
      sx={{
        padding: "1rem",
        border: "1px solid #eee",
        borderRadius: "5px",
        gap: "30px",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "1rem",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "0.9rem !important", fontWeight: "600" }}>
          Chair 01
        </Typography>
        <Typography sx={{ fontSize: "0.7rem !important", color: "#aaa" }}>
          Wedding Chair
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "0.9rem !important", fontWeight: "600" }}>
          Color
        </Typography>
        <Typography sx={{ fontSize: "0.7rem !important", color: "#aaa" }}>
          Red
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "0.9rem !important", fontWeight: "600" }}>
          Material
        </Typography>
        <Typography sx={{ fontSize: "0.7rem !important", color: "#aaa" }}>
          Wood
        </Typography>
      </Box>
      <Chairs />
      <Typography sx={{ fontSize: "0.9rem !important", fontWeight: "600" }}>
        $320 <Sell color="primary" />
      </Typography>
      <IconButton color="error">
        <Delete color="error" sx={{ fontSize: "1.5rem !important" }} />
      </IconButton>
    </Stack>
  );
}
