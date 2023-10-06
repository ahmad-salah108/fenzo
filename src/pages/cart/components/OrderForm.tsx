import { Box, Grid, Slider, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import ColorPicker from "../../designs-management/extra-categories/components/ColorPicker";
import OrderColorPicker from "./OrderColorPicker";

export default function OrderForm() {
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} sm={6} md={4}>
        <Stack sx={{ gap: "2rem" }}>
          <Box>
            <Typography sx={{ marginBottom: "3px" }}>Full Name</Typography>
            <TextField variant="standard" size="small" fullWidth />
          </Box>
          <Box>
            <Typography sx={{ marginBottom: "3px" }}>Phone Number</Typography>
            <TextField
              variant="standard"
              size="small"
              type="number"
              fullWidth
            />
          </Box>
          <Box>
            <Typography sx={{ marginBottom: "3px" }}>Phone Number 2</Typography>
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
            <Typography sx={{ marginBottom: "3px" }}>Place Name</Typography>
            <TextField variant="standard" size="small" fullWidth />
          </Box>
          <Box>
            <Typography sx={{ marginBottom: "3px" }}>Occasion Type</Typography>
            <TextField
              variant="standard"
              size="small"
              fullWidth
            />
          </Box>
          <Box>
            <Typography sx={{ marginBottom: "3px" }}>Place Type</Typography>
            <TextField
              variant="standard"
              size="small"
              fullWidth
            />
          </Box>
          <OrderColorPicker colors={[]} title='Light Color'/>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Stack sx={{ gap: "2rem" }}>
          <Box>
            <Typography sx={{ marginBottom: "3px" }}>Booking Date</Typography>
            <TextField variant="standard" size="small" type="date" fullWidth />
          </Box>
          <Box>
            <Typography sx={{ marginBottom: "3px" }}>Delivery Time</Typography>
            <TextField
              variant="standard"
              size="small"
              fullWidth
              type="time"
            />
          </Box>
          <Box>
            <Typography sx={{ marginBottom: "3px" }}>Note</Typography>
            <TextField
              variant="standard"
              size="small"
              fullWidth
            />
          </Box>
          <OrderColorPicker colors={[]} title="Kosha Color"/>
        </Stack>
      </Grid>
    </Grid>
  );
}
