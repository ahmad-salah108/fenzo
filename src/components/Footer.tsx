import {
  Stack, Typography, Divider
} from "@mui/material";

export default function Footer() {
  return (
    <>
      <Divider
        sx={{
          marginTop: "2.5rem",
          marginBottom: "1rem",
          borderColor: "rgba(0, 0, 0, 0.1)",
        }}
      />
      <Stack
        direction={"row"}
        sx={{
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Typography fontSize={"0.8rem"}>
          All rights reserved to Fenzo © 2023
        </Typography>
        <Stack direction={"row"} sx={{ gap: "2rem" }}>
          <Typography fontSize={"0.8rem"}>Privacy Policies</Typography>
          <Typography fontSize={"0.8rem"}>Terms and Conditions</Typography>
        </Stack>
      </Stack>
    </>
  );
}
