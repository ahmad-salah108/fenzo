import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function Views() {
  return (
    <Box>
      <Stack direction={"row"} sx={{ gap: "0.5rem" }}>
        <img src="/assets/icons/users.svg" />
        <Typography sx={{ fontSize: "2rem", fontWeight: "900" }}>
          17K+
        </Typography>
      </Stack>
      <Typography fontSize={"0.7rem"}>
        <Typography component={"span"} fontSize={"0.7rem"} color={"primary"}>
          Views
        </Typography>{" "}
        Ipsum is simply dummy <br /> text of the printing and
      </Typography>
    </Box>
  );
}
