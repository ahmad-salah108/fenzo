import React, { useState } from "react";
import { Sketch } from "@uiw/react-color";
import { Box, FormControl, InputLabel, Select, Stack, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function OrderColorPicker({colors, title}: {colors: Color[], title: string}) {
  const [hex, setHex] = useState("#000");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Typography fontSize={"0.8rem"} mb={1}>
        {title}
      </Typography>
      <Stack direction={"row"} sx={{ gap: "1rem", alignItems: "center" }}>
        <Box
          sx={{
            width: "30px",
            height: "30px",
            minWidth: "30px",
            borderRadius: "50%",
            background: "#dbb79b",
          }}
        ></Box>
        <FormControl
          fullWidth
          size="small"
          sx={{ width: "160px", "& *": { fontSize: "0.8rem !important" } }}
        >
          <InputLabel>{title}</InputLabel>
          <Select label={title}>
            {colors?.map(e => (
              <MenuItem sx={{ fontSize: "0.8rem" }} value={e?.color_id}>
                {e?.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
}
