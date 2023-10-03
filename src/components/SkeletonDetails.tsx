import { Box, Container, Skeleton } from "@mui/material";
import React from "react";

export default function SkeletonDetails() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Box>
        <Skeleton variant="text" sx={{ fontSize: "2rem", width: '300px' }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: '100px' }} />
        <Skeleton variant="text" sx={{ fontSize: "0.9rem", marginTop: '2.5rem' }} />
        <Skeleton variant="text" sx={{ fontSize: "0.9rem", marginTop: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: "0.9rem", marginTop: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: "0.9rem", marginTop: '1rem', width: '50%' }} />
        <Skeleton variant="rectangular" width={350} height={300} sx={{marginTop: '3rem'}} />
      </Box>
    </Container>
  );
}
