import { Box, Button, Checkbox, Paper, Typography } from "@mui/material";
import i18next from "i18next";
import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ButtonLink from "../../../../components/ButtonLink";
import AddIcon from "@mui/icons-material/Add";
import { Controller, useFormContext } from "react-hook-form";
import RemoveIcon from "@mui/icons-material/Remove";
import { useItemsContext } from "../../../../context/ItemsContext";

type ServiceCardProps = {
  index: number;
  data?: Category;
  id?: string;
};

export default function ServiceCard(props: ServiceCardProps) {
  const path = useLocation().pathname;

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
        src={props.data?.image ?? ''}
        style={{ objectFit: "cover", height: "18rem", width: "100%" }}
      />
      <Box sx={{ width: "100%", display: "grid", placeItems: "center" }}>
        <ButtonLink
          component={Link}
          to={`${path}/service-categories`}
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
          <img src="/assets/icons/plus.svg" width={"20rem"} />
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
        {props.data?.title}
      </Typography>
      <Typography
        sx={{ color: "#bbb", textAlign: "center", fontWeight: "200" }}
      >
        {props.data?.classification}
      </Typography>
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
        {props.data?.description}
      </Typography>
    </Paper>
  );
}
