import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import Chairs from "../../designs-management/extra-categories/components/Chairs";
import { Delete, Sell } from "@mui/icons-material";
import OrderItem from "./OrderItem";

export default function OrderExtras() {
  return (
    <Box>
      <Typography sx={{ fontSize: "1.2rem !important", fontWeight: "600" }}>
        Extras
      </Typography>
      <Typography sx={{ color: "#aaa", fontSize: "0.7rem !important" }}>
        Add your extra
      </Typography>
      <OrderItem/>
    </Box>
  );
}
