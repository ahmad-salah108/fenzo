import { Box, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import React from "react";

export default function Material({materials}: {materials: Material[]}) {
  return (
    <Box>
      <Typography fontSize={"0.8rem"} mb={1}>Material</Typography>
      <Stack direction={"row"} sx={{gap: '3px'}}>
        <img src="/assets/icons/material-icon.svg" style={{ width: "30px" }} />
        <FormControl fullWidth size="small" sx={{width: '100px', '& *': {fontSize: '0.8rem !important'}}}>
          <InputLabel>Material</InputLabel>
          <Select
            label="Material"
          >
            {materials?.map(e => (
              <MenuItem sx={{fontSize: '0.8rem'}} value={e?.material_id}>{e?.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
}
