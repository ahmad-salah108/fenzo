import { Box, Button, Checkbox, Paper, Stack, Typography } from "@mui/material";
import i18next from "i18next";
import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ButtonLink from "../../../../components/ButtonLink";
import AddIcon from "@mui/icons-material/Add";
import { Controller, useFormContext } from "react-hook-form";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCartContext } from "../../../../context/CartContext";
import Material from "./Material";
import ColorPicker from "./ColorPicker";
import Chairs from "./Chairs";
import { Sell } from "@mui/icons-material";

type ItemCardProps = {
  index: number;
  data: Item
};

export default function ItemCard(props: ItemCardProps) {
  const path = useLocation().pathname;

  return (
    <Paper
      elevation={3}
      sx={{
        width: "23rem",
        overflow: "hidden",
        animationDelay: `0.${props.index}s`,
        marginInline: "auto",
        marginBlock: '10px',
      }}
      className="card-animation"
    >
      <img
        src={props.data?.image ?? ''}
        style={{ objectFit: "cover", height: "18rem", width: "100%" }}
      />
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.5rem",
          marginTop: "0.3rem",
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
          fontSize: "0.85rem",
          margin: "0.5rem 2rem 1rem",
          lineHeight: "1.5rem",
        }}
        className="text-ellipsis-5"
      >
        {props.data?.description}
      </Typography>
      <Stack direction={"row"} sx={{ marginInline: "1rem", gap: "10px" }}>
        <Material materials={props.data?.materials}/>
        <ColorPicker colors={props.data?.colors}/>
      </Stack>
      <Stack
        direction={"row"}
        sx={{ margin: "1.5rem 1rem 1rem", gap: "10px", alignItems: "flex-end" }}
      >
        <Chairs />
        <Typography sx={{ marginInlineStart: "1rem" }}>
          ${props.data?.price}{" "}
          <Sell
            color="primary"
            sx={{ fontSize: "1rem", transform: "translate(-4px, 3px)" }}
          />
        </Typography>
      </Stack>
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
          margin: '1.5rem auto 1.5rem',
          display: 'block'
        }}
      >
        Add to cart
      </Button>
    </Paper>
  );
}
