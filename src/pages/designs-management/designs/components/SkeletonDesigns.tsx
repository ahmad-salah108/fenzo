import { Box, Container, Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

export default function SkeletonDesigns() {
  return (
    <Grid container spacing={3}>
      {[1, 2, 3, 4].map((e, index) => (
        <Grid key={e} item xs={12} md={6}>
          <Skeleton
            variant="rounded"
            sx={{ width: "23rem", height: "400px", margin: "auto" }}
          />
        </Grid>
      ))}
    </Grid>
  );
}
