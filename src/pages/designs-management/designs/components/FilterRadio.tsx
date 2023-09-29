import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Stack, Typography } from "@mui/material";

export default function FilterRadio() {
  return (
    <Stack sx={{ padding: "2rem 5rem", gap: '2rem', height: 'fit-content', background: '#f5f5f5', '& *': {whiteSpace: 'nowrap', fontFamily: 'Aleo, serif !important'} }}>
      <FormControl>
        <Typography sx={{ fontWeight: "bold" }}>Category</Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="weddings"
          name="radio-buttons-group"
          sx={{
            "& .MuiTypography-root": { fontWeight: "400", fontSize: "0.9rem" },
          }}
        >
          <FormControlLabel
            value="weddings"
            control={<Radio />}
            label="Weddings"
          />
          <FormControlLabel value="event" control={<Radio />} label="Event" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <Typography sx={{ fontWeight: "bold" }}>Time</Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="weddings"
          name="radio-buttons-group"
          sx={{
            "& .MuiTypography-root": { fontWeight: "400", fontSize: "0.9rem" },
          }}
        >
          <FormControlLabel
            value="recent"
            control={<Radio />}
            label="Recent"
          />
          <FormControlLabel value="last_month" control={<Radio />} label="Last month" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <Typography sx={{ fontWeight: "bold" }}>Classification</Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="weddings"
          name="radio-buttons-group"
          sx={{
            "& .MuiTypography-root": { fontWeight: "400", fontSize: "0.9rem" },
          }}
        >
          <FormControlLabel
            value="highest_rated"
            control={<Radio />}
            label="Highest rated"
          />
          <FormControlLabel value="last_month" control={<Radio />} label="Least rated" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}
