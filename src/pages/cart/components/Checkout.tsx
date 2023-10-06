import { Sell } from "@mui/icons-material";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import i18next, { t } from "i18next";
import React from "react";

export default function Checkout() {
  return (
    <Stack direction={"row"} sx={{ flexWrap: "wrap", justifyContent: 'space-between' }}>
      <Stack direction={"row"} sx={{ alignItems: "center" }}>
        <Box>
          <Typography sx={{ marginBottom: "3px" }}>Promo Code</Typography>
          <TextField variant="standard" size="small" sx={{ width: "120px" }} />
        </Box>
        <Button
          color="primary"
          variant="contained"
          sx={{
            borderRadius: "50%",
            padding: "0",
            minWidth: "2rem",
            height: "2rem",
            border: "3px solid #fff",
            boxShadow: "none",
            "&:hover": { boxShadow: "none" },
            "&:focus": { boxShadow: "none" },
            "&:active": { boxShadow: "none" },
            marginBlock: "auto",
          }}
        >
          {i18next.language !== "ar" && (
            <img src="/assets/icons/arrow.svg" style={{ width: "0.7rem" }} />
          )}
          {i18next.language === "ar" && (
            <img
              src="/assets/icons/arrow.svg"
              style={{
                rotate: "180deg",
                transform: "translateX(0.05rem)",
                width: "0.7rem",
              }}
            />
          )}
        </Button>
      </Stack>
      <Box>
        <Box>
          <Typography sx={{ marginBottom: "3px" }}>Total Price</Typography>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "0.9rem !important" }}
          >
            $320 <Sell color="primary" />
          </Typography>
        </Box>
        <Box mt={1}>
          <Typography sx={{ marginBottom: "3px" }}>
            Total Price After Discount
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "0.9rem !important" }}
          >
            $320 <Sell color="primary" />
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}
