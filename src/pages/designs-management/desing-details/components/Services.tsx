import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import i18next from "i18next";
import React from "react";
import Slider from "react-slick";
import PackageCheckbox from "./PackageCheckbox";
import { FormProvider, useForm } from "react-hook-form";

export default function Services() {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.up("xs"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const methods = useForm();

  var settings = {
    ...(i18next.language === "ar" && { rtl: true }),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: lg ? 3 : md ? 2 : xs ? 1 : 1,
    slidesToScroll: lg ? 3 : md ? 2 : xs ? 1 : 1,
    adaptiveHeight: true,
    arrows: xs && !sm ? false : true,
  };

  return (
    <Box sx={{ marginTop: "5rem" }}>
      <FormProvider {...methods}>
        <Typography sx={{fontFamily: "Aleo, serif !important", fontSize: '1.5rem', fontWeight: '600'}}>Other Services</Typography>
        <Typography sx={{ color: "#bbb", fontSize: "0.9rem", fontFamily: "Aleo, serif !important" }}>
          Customize
        </Typography>
        <Box
          mt={2}
          sx={{
            width: { xs: "90vw", lg: "auto" },
            "& .slick-dots": { bottom: "-2rem !important" },
            "& .slick-dots li button:before": {
              color: "rgba(217, 217, 217, 1) !important",
            },
            "& .slick-dots li.slick-active button:before": {
              color: "rgba(219, 183, 155, 1) !important",
            },
          }}
        >
          <Slider {...settings}>
            {[0, 1, 2, 3, 4, 5].map((e) => (
              <div>
                <PackageCheckbox key={e} index={e} id={`${e}`} />
              </div>
            ))}
          </Slider>
        </Box>
      </FormProvider>
    </Box>
  );
}
