import { Box, Button, Typography } from "@mui/material";
import React from "react";
import UploadedFile from "./UploadedFile";

export default function UploadFiles() {
  return (
    <Box>
      <Typography sx={{ fontSize: "1.2rem !important", fontWeight: "600" }}>
        Upload Files
      </Typography>
      <Button variant="contained" sx={{marginTop: '1rem'}}>Upload</Button>
      <UploadedFile/>
    </Box>
  );
}
