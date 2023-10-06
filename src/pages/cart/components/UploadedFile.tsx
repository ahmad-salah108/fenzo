import { Delete } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";

export default function UploadedFile() {
  return (
    <Stack
      direction={"row"}
      sx={{
        padding: "0.5rem 1rem",
        border: "1px solid #eee",
        borderRadius: "5px",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "1rem",
        justifyContent: "space-between",
      }}
    >
      <Typography>file-name.png</Typography>
      <IconButton color="error">
        <Delete color="error" sx={{ fontSize: "1.5rem !important" }} />
      </IconButton>
    </Stack>
  );
}
