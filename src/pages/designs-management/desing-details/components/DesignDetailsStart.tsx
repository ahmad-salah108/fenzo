import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import SellIcon from "@mui/icons-material/Sell";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import GroupsIcon from "@mui/icons-material/Groups";
import Slider from "react-slick";
import i18next from "i18next";

export default function DesignDetailsStart() {
  var settings = {
    ...(i18next.language === "ar" && { rtl: true }),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true
  };

  return (
    <Box>
      <Typography>
        $250{" "}
        <SellIcon
          color="primary"
          sx={{ fontSize: "0.9rem", transform: "translateX(-4px)" }}
        />
      </Typography>
      <Typography variant="h4" fontWeight={"600"} sx={{ marginTop: "1rem" }}>
        Couple Package
      </Typography>
      <Typography sx={{ color: "#aaa", marginBottom: "1rem" }}>
        Couple
      </Typography>
      <Divider
        sx={{ width: "12rem", borderColor: "#eee", marginBottom: "1rem" }}
      />
      <Typography
        sx={{ marginBottom: "1rem", display: "flex", alignItems: "center" }}
      >
        <WatchLaterIcon />
        &nbsp;01 hour, 55 minute&nbsp;
        <GroupsIcon />
        &nbsp;120
      </Typography>
      <Typography
        sx={{ fontWeight: "200", fontSize: "0.9rem", lineHeight: "2.15rem", whiteSpace: 'pre-wrap' }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever sincetext of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard text ever sincetext of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard the industry's standard text ever sincetext of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standardthe
        industry's standard text ever sincetext of the printing and typesetting
        industry dummy text.
      </Typography>
      <Box sx={{ marginTop: '2rem', width: {xs: '85vw', lg: '745px'}, '& .slick-list': {height: '450px !important'} }}>
        <Slider {...settings}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1695983953103-17bce53a8138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2042&q=80"
              alt="login background"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1695983953103-17bce53a8138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2042&q=80"
              alt="login background"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </Slider>
      </Box>
    </Box>
  );
}
