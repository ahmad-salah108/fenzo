import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import SellIcon from "@mui/icons-material/Sell";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import GroupsIcon from "@mui/icons-material/Groups";
import Slider from "react-slick";
import i18next from "i18next";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

type DesignDescriptionProps = {
  design: Design
}

export default function DesignDescription(props: DesignDescriptionProps) {
  const navigate = useNavigate();

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
      <Stack direction={'row'} sx={{ marginTop: "1rem", alignItems: 'center', gap: '1rem' }}>
        <IconButton onClick={()=>navigate('/designs')}>
          {i18next.language === 'ar' ? <ArrowForward sx={{color: '#888'}}/> : <ArrowBack sx={{color: '#888'}}/>}
        </IconButton>
        <Box>
          <Typography variant="h4" fontWeight={"600"}>
            {props?.design?.title}
          </Typography>
          <Typography sx={{ color: "#aaa", marginBottom: "1rem" }}>
            {props?.design?.event_name}
          </Typography>
        </Box>
      </Stack>
      <Typography
        sx={{ fontWeight: "200", fontSize: "0.9rem", lineHeight: "2.15rem", whiteSpace: 'pre-wrap' }}
      >
        {props?.design?.description}
      </Typography>
      <Box sx={{ marginTop: '2rem', width: '100%', '& .slick-list': {height: {xs: '60vw !important', lg: '450px !important'}} }}>
        <Slider {...settings}>
          {props?.design?.design_images?.map(e => (
            <div key={e?.id}>
              <img
                src={e?.image ?? ''}
                alt="background"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
