import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function SignUpFields() {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);

  return (
    <Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography>{t("full_name")}*</Typography>
        <TextField
          placeholder={t("full_name")}
          fullWidth
          variant="standard"
          sx={{ "& input": { height: "2rem" } }}
        />
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography>{t("phone_number")}*</Typography>
        <TextField
          placeholder={t("phone_number")}
          fullWidth
          variant="standard"
          type="number"
          sx={{ "& input": { height: "2rem" } }}
        />
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography>{t("email")}*</Typography>
        <TextField
          placeholder={t("email")}
          fullWidth
          variant="standard"
          type="email"
          sx={{ "& input": { height: "2rem" } }}
        />
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography>{t("age")}*</Typography>
        <TextField
          placeholder={t("age")}
          fullWidth
          variant="standard"
          type="number"
          sx={{ "& input": { height: "2rem" } }}
        />
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography>{t("country")}*</Typography>
        <TextField
          placeholder={t("country")}
          fullWidth
          variant="standard"
          sx={{ "& input": { height: "2rem" } }}
        />
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography>{t("password")}*</Typography>
        <TextField
          placeholder={t("password")}
          fullWidth
          variant="standard"
          type={showPassword ? "text" : "password"}
          sx={{ "& input": { height: "2rem" } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setShowPassword((prev) => !prev);
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography>{t("confirm_password")}*</Typography>
        <TextField
          placeholder={t("confirm_password")}
          fullWidth
          variant="standard"
          type={showPassword2 ? "text" : "password"}
          sx={{ "& input": { height: "2rem" } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setShowPassword2((prev) => !prev);
                  }}
                >
                  {showPassword2 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
}
