import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Slider, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import ColorPicker from "../../designs-management/extra-categories/components/ColorPicker";
import OrderColorPicker from "./OrderColorPicker";
import { OrderFieldsData } from "../Cart";

export default function OrderForm({
  fieldsData,
}: {
  fieldsData: OrderFieldsData;
}) {
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} sm={6} md={4}>
        <Stack sx={{ gap: "2rem" }}>
          <Box>
            <Typography sx={{ marginBottom: "7px" }}>Full Name</Typography>
            <TextField variant="standard" size="small" fullWidth />
          </Box>
          <Box>
            <Typography sx={{ marginBottom: "7px" }}>Phone Number</Typography>
            <TextField
              variant="standard"
              size="small"
              type="number"
              fullWidth
            />
          </Box>
          <Box>
            <Typography sx={{ marginBottom: "7px" }}>Phone Number 2</Typography>
            <TextField
              variant="standard"
              size="small"
              type="number"
              fullWidth
            />
          </Box>
          <Slider
            defaultValue={500}
            aria-label="Default"
            valueLabelDisplay="auto"
            max={1000}
            marks={[
              { value: 0, label: 0 },
              { value: 1000, label: 1000 },
            ]}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Stack sx={{ gap: "2rem" }}>
          <Box>
            <Typography sx={{ marginBottom: "7px" }}>Place Name</Typography>
            <TextField variant="standard" size="small" fullWidth />
          </Box>
          <Box>
            <Typography sx={{ marginBottom: "13px" }}>Occasion Type</Typography>
            <FormControl
              fullWidth
              size="small"
            >
              <InputLabel>Occasion Type</InputLabel>
              <Select label='Occasion Type'>
                {fieldsData?.occasion?.map((e) => (
                  <MenuItem sx={{ fontSize: "0.8rem" }} value={e?.id}>
                    {e?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Typography sx={{ marginBottom: "13px" }}>Place Type</Typography>
            <FormControl
              fullWidth
              size="small"
            >
              <InputLabel>Place Type</InputLabel>
              <Select label='Place Type'>
                {fieldsData?.places?.map((e) => (
                  <MenuItem sx={{ fontSize: "0.8rem" }} value={e?.id}>
                    {e?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <OrderColorPicker colors={fieldsData?.colorFirst} title="Light Color" />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Stack sx={{ gap: "2rem" }}>
          <Box>
            <Typography sx={{ marginBottom: "7px" }}>Booking Date</Typography>
            <TextField variant="standard" size="small" type="date" fullWidth />
          </Box>
          <Box>
            <Typography sx={{ marginBottom: "7px" }}>Delivery Time</Typography>
            <TextField variant="standard" size="small" fullWidth type="time" />
          </Box>
          <Box>
            <Typography sx={{ marginBottom: "7px" }}>Note</Typography>
            <TextField variant="standard" size="small" fullWidth />
          </Box>
          <OrderColorPicker colors={fieldsData?.colorSecond} title="Kosha Color" />
        </Stack>
      </Grid>
    </Grid>
  );
}
