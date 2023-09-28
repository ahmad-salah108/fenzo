import React, { useState } from "react";
import AuthNavbar from "../../../components/AuthNavbar";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Divider,
  InputAdornment,
  IconButton,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import i18next from "i18next";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import Footer from "../../../components/Footer";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useUser } from "../../../context/UserContext";
import ButtonLink from "../../../components/ButtonLink";
import axios from "axios";
import { toast } from "react-toastify";

export default function ResetPassord() {
  const theme = useTheme();
  const xsMd = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { handleLogin } = useUser();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    setLoading(true)

    axios.post(`${process.env.REACT_APP_API_URL}/auth/verification/send-verification-code`, data)
    .then(res => {
      toast.success(t("code_sent_to_email"), {
        position: "bottom-left",
        rtl: i18next.language === "ar",
      });
      navigate(`/identity-confirmation?email=${data?.email}`)
    }).catch(err => {
      toast.error(err?.response?.data?.message ?? t('smth_went_wrong'), {
        position: "bottom-left",
        rtl: i18next.language === 'ar'
      })
      setLoading(false)
    })
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthNavbar />
        <Stack
          direction={"row"}
        >
          {!xsMd && (
            <img
              src="/assets/images/bg-login.jpg"
              alt="login background"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "30rem",
                height: "calc(100vh - 4.74rem)"
              }}
            />
          )}
          <Box
            sx={{
              margin: "1rem auto 0",
              padding: "0 1rem",
              width: { xs: "90%", md: "65%" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: "800",
                lineHeight: { xs: "3rem", md: "4rem" },
                textTransform: "uppercase",
              }}
            >
              {t("reset")}{" "}
              <Typography
                color={"primary"}
                component={"span"}
                variant="h1"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontWeight: "800",
                  lineHeight: { xs: "3rem", md: "4rem" },
                  textTransform: "uppercase",
                }}
              >
                {t("password")}
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "2rem",
                fontFamily: "Aleo, serif !important",
                color: "rgba(50, 50, 50, 1)",
                fontWeight: "300",
                lineHeight: "2rem",
              }}
            >
              {t("reset_description")}
            </Typography>
            <Box sx={{ marginTop: "2rem" }}>
              <Typography>{t("email")}*</Typography>
              <Controller
                name="email"
                control={control}
                defaultValue={""}
                rules={{ required: t("email_required") }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={!!errors?.email}
                    helperText={errors?.email?.message as string}
                    placeholder={t("email")}
                    fullWidth
                    variant="standard"
                    sx={{ "& input": { height: "2rem" } }}
                    type="email"
                  />
                )}
              />
            </Box>
            <Stack
              direction={"row"}
              sx={{ gap: "1rem", marginTop: "5rem", marginBottom: "15rem" }}
            >
              <ButtonLink
                component={Link}
                to={"/login"}
                variant="outlined"
                sx={{
                  borderRadius: "100vh",
                  width: "11rem",
                  paddingTop: "0.6rem",
                  paddingBottom: "0.6rem",
                  marginInlineStart: "auto",
                  color: "rgba(89, 89, 89, 1)",
                  borderColor: "rgba(89, 89, 89, 1)",
                }}
              >
                {t("back_to_login")}
              </ButtonLink>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                sx={{
                  borderRadius: "50%",
                  padding: "0",
                  minWidth: "2.9rem",
                  height: "2.9rem",
                }}
              >
                {i18next.language !== "ar" && (
                  <img src="/assets/icons/arrow.svg" />
                )}
                {i18next.language === "ar" && (
                  <img
                    src="/assets/icons/arrow.svg"
                    style={{
                      rotate: "180deg",
                      transform: "translateX(0.05rem)",
                    }}
                  />
                )}
              </Button>
            </Stack>
            <Footer />
          </Box>
        </Stack>
      </form>
      <Backdrop
        open={loading}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
}
