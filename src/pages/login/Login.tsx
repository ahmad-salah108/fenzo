import React, { useState } from "react";
import AuthNavbar from "../../components/AuthNavbar";
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
import { Link } from "react-router-dom";
import i18next from "i18next";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import Footer from "../../components/Footer";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useUser } from "../../context/UserContext";

export default function Login() {
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

  const onSubmit = (data: FieldValues) => {
    handleLogin(data, setLoading);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthNavbar />
        <Stack
          direction={"row"}
          sx={{
            maxHeight: "calc(100vh - 4.74rem)",
            height: "calc(100vh - 4.74rem)",
          }}
        >
          {!xsMd && (
            <img
              src="/assets/images/bg-login.jpg"
              alt="login background"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "30rem",
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
              {i18next.language === "ar" ? (
                "أفضل مكان"
              ) : (
                <>
                  THE BEST <br /> PLACE FOR
                </>
              )}
            </Typography>
            <Typography
              variant="h1"
              className="slide-word-wrapper"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: "800",
                width: { xs: "23rem", md: "36rem" },
                lineHeight: { xs: "3rem", md: "4rem" },
                textTransform: "uppercase",
              }}
            >
              {t("your")}&nbsp;
              <span
                className={md ? "slide-word" : "slide-word-sm"}
                style={{ textTransform: "uppercase" }}
              >
                {t("special_event")} <br /> {t("party")} <br />{" "}
                {t("graduation")} <br /> {t("weddings")}
              </span>
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Typography>
            <Box sx={{ marginTop: "2rem" }}>
              <Typography>{t("phone_number")}*</Typography>
              <Controller
                name="phone_number"
                control={control}
                defaultValue={""}
                rules={{ required: t("phone_number_required") }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={!!errors?.phone_number}
                    helperText={errors?.phone_number?.message as string}
                    placeholder="006XXXXXXXX"
                    fullWidth
                    variant="standard"
                    onChange={(e) => {
                      if (!isNaN(+e.target.value)) {
                        field.onChange(e.target.value?.replace(".", ""));
                      }
                    }}
                    sx={{ "& input": { height: "2rem" } }}
                  />
                )}
              />
            </Box>
            <Box sx={{ marginTop: "2rem" }}>
              <Typography>{t("password")}*</Typography>
              <Controller
                name="password"
                control={control}
                defaultValue={""}
                rules={{ required: t("password_required") }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={!!errors?.password}
                    helperText={errors?.password?.message as string}
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
                )}
              />
            </Box>
            <Link
              to={"/forgot-password"}
              style={{
                color: "rgba(89, 89, 89, 1)",
                marginTop: "1rem",
                display: "block",
                fontSize: "0.9rem",
              }}
            >
              {t("forgot_your_password")}
            </Link>
            <Stack direction={"row"} sx={{ gap: "1rem", marginTop: "1rem" }}>
              <Button
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
                {t("guest")}
              </Button>
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
