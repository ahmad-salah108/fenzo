import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import OrderExtras from "./OrderExtras";
import UploadFiles from "./UploadFiles";

export default function ExtrasAndFiles() {
  return (
    <Box sx={{marginTop: '2rem'}}>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={7}>
          <OrderExtras/>
        </Grid>
        <Grid item xs={12} sm={5}>
          <UploadFiles/>
        </Grid>
      </Grid>
    </Box>
  );
}
