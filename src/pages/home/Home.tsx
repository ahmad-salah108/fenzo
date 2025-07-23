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
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18next from "i18next";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import Footer from "../../components/Footer";
import Views from "./components/Views";
import Orders from "./components/Orders";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DialogEvent from "./components/DialogEvent";

export default function Home() {
  const theme = useTheme();
  const xsMd = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ... i18next.language === 'ar' && {rtl: true}
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        direction={"row"}
      >
        {!xsMd && <Box sx={{ width: "30rem", maxHeight: "calc(100vh - 4.6rem)", height: "calc(100vh - 4.6rem)", overflow: 'hidden' }}>
          <Slider {...settings}>
            <div>
              <h1>
                <img
                  src="/assets/images/bg-login.jpg"
                  alt="login background"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "30rem",
                    height: "calc(100vh - 4.6rem)",
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              </h1>
            </div>
            <div>
              <h1>
                <img
                  src="/assets/images/bg-login.jpg"
                  alt="login background"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "30rem",
                    height: "calc(100vh - 4.6rem)",
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              </h1>
            </div>
          </Slider>
        </Box>}
        {!xsMd && (
          <Box sx={{ position: "relative" }}>
            <Stack
              sx={{
                padding: "2rem 0.7rem",
                gap: "0.6rem",
                borderRadius: "100vh",
                position: "absolute",
                left: "-1.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: '#f9fcfb'
              }}
            >
              <Link to={"#"} style={{ height: "1.7rem" }}>
                <img
                  src="/assets/icons/facebook.svg"
                  style={{ width: "1.7rem" }}
                />
              </Link>
              <Link to={"#"} style={{ height: "1.7rem" }}>
                <img
                  src="/assets/icons/snapchat.svg"
                  style={{ width: "1.7rem" }}
                />
              </Link>
              <Link to={"#"} style={{ height: "1.7rem" }}>
                <img
                  src="/assets/icons/whatsapp.svg"
                  style={{ width: "1.7rem" }}
                />
              </Link>
              <Link to={"#"} style={{ height: "1.7rem" }}>
                <img
                  src="/assets/icons/youtube.svg"
                  style={{ width: "1.7rem" }}
                />
              </Link>
            </Stack>
          </Box>
        )}
        <Stack
          sx={{
            margin: "1rem auto 0",
            padding: "0 2.1rem",
            width: { xs: "90%", md: "65%" },
          }}
        >
          <Box>
            <Box sx={{ position: "relative" }}>
              <img
                src="/assets/icons/infinite.svg"
                style={{
                  opacity: 0.05,
                  position: "absolute",
                  ...(i18next.language === "ar"
                    ? { left: "0" }
                    : { right: "0" }),
                }}
              />
              {lg && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "5rem",
                    right: 0,
                  }}
                >
                  <Views />
                </Box>
              )}
              {lg && (
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "-5rem",
                    right: 0,
                  }}
                >
                  <Orders />
                </Box>
              )}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontWeight: "800",
                  lineHeight: { xs: "3rem", md: "4rem" },
                  textTransform: "uppercase",
                  marginTop: "4rem",
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
                  maxWidth: "40rem",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </Typography>
            </Box>
            {!lg && (
              <Stack
                direction={"row"}
                sx={{ gap: "3rem", flexWrap: "wrap", margin: "2rem 0 0" }}
              >
                <Views />
                <Orders />
              </Stack>
            )}
            <Button
              variant="outlined"
              onClick={handleClickOpen}
              endIcon={
                <img
                  src="/assets/icons/arrow-filled.svg"
                  style={{ width: "1.7rem", rotate: i18next.language === 'ar' ? '180deg' : '0deg' }}
                />
              }
              sx={{
                borderRadius: "100vh",
                marginTop: "4rem",
                paddingTop: "0.6rem",
                paddingBottom: "0.6rem",
                color: "rgba(89, 89, 89, 1)",
                borderColor: "rgba(89, 89, 89, 1)",
              }}
            >
              {t("design_your_event")}
            </Button>
            <DialogEvent open={open} handleClose={handleClose}/>
          </Box>
          <Box sx={{ marginTop: {xs: '5rem', md: 'auto'}, marginBottom: "2rem" }}>
            <Footer />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
