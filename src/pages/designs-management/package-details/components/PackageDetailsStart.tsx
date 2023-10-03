import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import SellIcon from "@mui/icons-material/Sell";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import GroupsIcon from "@mui/icons-material/Groups";
import Slider from "react-slick";
import i18next from "i18next";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";

type PackageDetailsStartProps = {
  data: Package
}

export default function PackageDetailsStart(props: PackageDetailsStartProps) {
  const navigate = useNavigate();
  const { designId } = useParams();

  var settings = {
    ...(i18next.language === "ar" && { rtl: true }),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
  };

  return (
    <Box>
      <Typography>
        ${props.data?.price}{" "}
        <SellIcon
          color="primary"
          sx={{ fontSize: "0.9rem", transform: "translateX(-4px)" }}
        />
      </Typography>
      <Stack
        direction={"row"}
        sx={{ marginTop: "1rem", alignItems: "flex-start", gap: "1rem" }}
      >
        <IconButton onClick={() => navigate(`/designs/${designId}`)}>
          {i18next.language === "ar" ? (
            <ArrowForward sx={{ color: "#888" }} />
          ) : (
            <ArrowBack sx={{ color: "#888" }} />
          )}
        </IconButton>
        <Box>
          <Typography variant="h4" fontWeight={"600"}>
            {props.data?.title}
          </Typography>
          <Typography sx={{ color: "#aaa", marginBottom: "1rem" }}>
            {props.data?.designs?.map(e => e?.design_title)?.join(', ')}
          </Typography>
        </Box>
      </Stack>
      <Divider
        sx={{ width: "12rem", borderColor: "#eee", marginBottom: "1rem" }}
      />
      <Typography
        sx={{ marginBottom: "1rem", display: "flex", alignItems: "center" }}
      >
        <WatchLaterIcon />
        &nbsp;01 hour, 55 minute&nbsp;
        <GroupsIcon />
        &nbsp;{props.data?.capacity_person_price}
      </Typography>
      <Typography
        sx={{
          fontWeight: "200",
          fontSize: "0.9rem",
          lineHeight: "2.15rem",
          whiteSpace: "pre-wrap",
        }}
      >
        {props.data?.description}
      </Typography>
      <Box
        sx={{
          marginTop: "2rem",
          width: { xs: "85vw", lg: "745px" },
          "& .slick-list": {
            height: { xs: "60vw !important", lg: "450px !important" },
          },
        }}
      >
        <Slider {...settings}>
          {props.data?.images?.map(e => (
            <div key={e?.id}>
              <img
                src={e?.image ?? ''}
                alt="login background"
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
