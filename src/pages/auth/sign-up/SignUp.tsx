import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import i18next from "i18next";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import SignUpFields from "./components/SignUpFields";
import Footer from "../../../components/Footer";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useUser } from "../../../context/UserContext";
import { LoadingButton } from "@mui/lab";

export default function SignUp() {
  const theme = useTheme();
  const xsMd = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const methods = useForm({ mode: "onChange" });
  const { handleSubmit } = methods;
  const { handleSignUp } = useUser();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<any | null>();

  const onSubmit = (data: FieldValues) => {
    handleSignUp({...data, image}, setLoading);
  };

  return (
    <Box>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AuthNavbar />
          <Stack direction={"row"}>
            {!xsMd && (
              <img
                src="/assets/images/bg-signup.jpg"
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
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </Typography>
              <SignUpFields image={image} setImage={setImage}/>
              <Stack direction={"row"} sx={{ gap: "1rem", marginTop: "2rem" }}>
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
      </FormProvider>
      <Backdrop
        open={loading}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
}
