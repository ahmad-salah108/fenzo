import React, { useState } from "react";
import { Sketch } from "@uiw/react-color";
import { Box, FormControl, InputLabel, Select, Stack, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function ColorPicker({colors, colorValue, setColorValue}: {colors: Color[], colorValue: number | undefined, setColorValue: React.Dispatch<React.SetStateAction<number | undefined>>}) {
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
        Color
      </Typography>
      <Stack direction={"row"} sx={{ gap: "5px", alignItems: "center" }}>
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
          sx={{ width: "100px", "& *": { fontSize: "0.8rem !important" } }}
        >
          <InputLabel>Color</InputLabel>
          <Select label="Color" value={colorValue} onChange={(e)=>setColorValue(+e.target.value)}>
            {colors?.map(e => (
              <MenuItem sx={{ fontSize: "0.8rem" }} value={e?.color_id}>
                {e?.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      {/* <TextField
          variant="outlined"
          size="small"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          sx={{'& input': {fontSize: '0.8rem !important'}}}
        /> */}
      {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{'& ul': {padding: 0}}}
      >
        <Sketch
          color={hex}
          onChange={(color) => {
            setHex(color.hexa);
          }}
        />
      </Menu> */}
    </Box>
  );
}
