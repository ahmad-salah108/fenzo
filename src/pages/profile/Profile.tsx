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
  Avatar,
  Paper,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18next from "i18next";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import Footer from "../../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProfileCard from "./components/ProfileCard";
import { useUser } from "../../context/UserContext";

export default function Profile() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const { t } = useTranslation();
  const { user } = useUser();

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
        {lg && <Box sx={{ width: "30rem", maxHeight: "calc(100vh - 4.6rem)", height: "calc(100vh - 4.6rem)", overflow: 'hidden' }}>
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
        {lg && (
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
          <Box sx={{margin: 'auto 0'}}>
            <Stack direction={'row'} sx={{gap: '3rem', flexWrap: 'wrap', alignItems: 'center'}}>
              <Avatar src={user?.image ?? ''} alt='profile picture' sx={{width: '15rem', height: '15rem', borderRadius: '2rem', boxShadow: 3}}/>
              <Typography variant="h3" sx={{fontWeight: 'bold'}}>{user?.name}</Typography>
            </Stack>
            <Stack direction={'row'} sx={{gap: '2rem', flexWrap: 'wrap', marginTop: '2rem', width: 'min(100%, 50rem)'}}>
              <ProfileCard title={t('age')} description={<><span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{user?.age}</span> Years</>}/>
              <ProfileCard title={t('email')} description={user?.email}/>
              <ProfileCard title={t('phone_number')} description={user?.phone}/>
              <ProfileCard title={t('country')} description={user?.country}/>
            </Stack>
          </Box>
          <Box sx={{ marginTop: {xs: '8rem', lg: 'auto'}, marginBottom: "2rem" }}>
            <Footer />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
