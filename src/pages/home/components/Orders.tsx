import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function Orders() {
  return (
    <Box>
      <Stack direction={"row"} sx={{ gap: "0.5rem" }}>
        <img src="/assets/icons/bag.svg" />
        <Typography sx={{ fontSize: "2rem", fontWeight: "900" }}>
          1K+
        </Typography>
      </Stack>
      <Typography fontSize={"0.7rem"}>
        <Typography component={"span"} fontSize={"0.7rem"} color={"primary"}>
          Orders
        </Typography>{" "}
        Ipsum is simply dummy <br /> text of the printing and
      </Typography>
    </Box>
  );
}
