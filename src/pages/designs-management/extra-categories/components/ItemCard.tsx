import { Box, Button, Checkbox, Paper, Stack, Typography } from "@mui/material";
import i18next, { t } from "i18next";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonLink from "../../../../components/ButtonLink";
import AddIcon from "@mui/icons-material/Add";
import { Controller, useFormContext } from "react-hook-form";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCartContext } from "../../../../context/CartContext";
import Material from "./Material";
import ColorPicker from "./ColorPicker";
import Chairs from "./Chairs";
import { Sell } from "@mui/icons-material";
import { useUser } from "../../../../context/UserContext";
import axios from "axios";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";

type ItemCardProps = {
  index: number;
  data: Item
};

export default function ItemCard(props: ItemCardProps) {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const { user } = useUser();
  const [loading, setLoading] = useState<boolean>(false)
  const [colorValue, setColorValue] = useState<number>();
  const [materialValue, setMaterialValue] = useState<number>();

  const handleAddToCart = () => {
    if (!user?.token) {
      navigate("/login");
      return;
    }

    setLoading(true);

    axios
      .post(`${process.env.REACT_APP_API_URL}/cart/add-cart`, {
        item_id: props.data?.id,
        ... colorValue && {color_id: colorValue},
        ... materialValue && {material_id: materialValue}
      })
      .then((res) => {
        toast.success(t("added_successfully"), {
          position: "bottom-left",
          rtl: i18next.language === "ar",
        });
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message ?? t("smth_went_wrong"), {
          position: "bottom-left",
          rtl: i18next.language === "ar",
        });
        setLoading(false);
      });
  }

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
        <Material materials={props.data?.materials} materialValue={materialValue} setMaterialValue={setMaterialValue}/>
        <ColorPicker colors={props.data?.colors} colorValue={colorValue} setColorValue={setColorValue}/>
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
      <LoadingButton
        loading={loading}
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
        onClick={handleAddToCart}
      >
        Add to cart
      </LoadingButton>
    </Paper>
  );
}
