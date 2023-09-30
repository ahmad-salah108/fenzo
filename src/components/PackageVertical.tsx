import { Box, Button, Paper, Typography } from "@mui/material";
import i18next from "i18next";
import React from "react";
import { Link } from "react-router-dom";
import ButtonLink from "./ButtonLink";

type PackageVerticalProps = {
  index: number;
};

export default function PackageVertical(props: PackageVerticalProps) {
  
  return (
    <Paper
      elevation={3}
      sx={{
        width: "23rem",
        overflow: "hidden",
        animationDelay: `0.${props.index}s`,
        marginInline: "auto",
      }}
      className="card-animation"
    >
      <img
        src="/assets/images/bg-signup.jpg"
        style={{ objectFit: "cover", height: "18rem", width: "100%" }}
      />
      <Box sx={{ width: "100%", display: "grid", placeItems: "center" }}>
        <ButtonLink
          component={Link}
          to={'/designs/1'}
          color="primary"
          variant="contained"
          sx={{
            borderRadius: "50%",
            padding: "0",
            minWidth: "3.5rem",
            height: "3.5rem",
            border: "3px solid #fff",
            boxShadow: "none",
            "&:hover": { boxShadow: "none" },
            "&:focus": { boxShadow: "none" },
            "&:active": { boxShadow: "none" },
            transform: "translateY(-2.2rem)",
          }}
        >
          {i18next.language !== "ar" && <img src="/assets/icons/arrow.svg" />}
          {i18next.language === "ar" && (
            <img
              src="/assets/icons/arrow.svg"
              style={{ rotate: "180deg", transform: "translateX(0.05rem)" }}
            />
          )}
        </ButtonLink>
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.5rem",
          marginTop: "-1.4rem",
        }}
      >
        Wedding designs
      </Typography>
      <Typography sx={{color: '#bbb', textAlign: 'center', fontWeight: '200'}}>Wedding</Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "200",
          fontSize: "0.9rem",
          margin: "1rem 2rem 2rem",
          lineHeight: "1.5rem",
        }}
        className="text-ellipsis-5"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s. asd wd qw dqw dqw qef qe fqe fqef 
      </Typography>
    </Paper>
  );
}
