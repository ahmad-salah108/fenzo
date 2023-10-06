import {
  Box,
  Button,
  Container,
  Grid,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import OrderForm from "./components/OrderForm";
import ExtrasAndFiles from "./components/ExtrasAndFiles";
import ServicesAndCheckout from "./components/ServicesAndCheckout";
import Footer from "../../components/Footer";
import i18next, { t } from "i18next";
import axios from "axios";
import { toast } from "react-toastify";

export type OrderFieldsData = {
  colorFirst: Color[],
  colorSecond: Color[],
  places: Place[],
  occasion: Occasion[]
}

export default function Cart() {
  const [fieldsData, setFieldsData] = useState<OrderFieldsData>({} as OrderFieldsData)

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_URL}/order/get-data-order`)
    .then(res => {
      setFieldsData(res?.data?.data)
    }).catch(err => {
      toast.error(err?.response?.data?.message ?? t("smth_went_wrong"), {
        position: "bottom-left",
        rtl: i18next.language === "ar",
      });
    })
  },[])

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Box sx={{ width: "100%" }}>
        <Typography sx={{ fontSize: "1.2rem", fontWeight: "600" }}>
          Order Form
        </Typography>
        <Typography sx={{ color: "#aaa", fontSize: "0.7rem" }}>
          Information
        </Typography>
        <Box sx={{ "& *": { fontSize: "0.77rem !important" }, marginTop: '2rem' }}>
          <OrderForm fieldsData={fieldsData}/>
          <ExtrasAndFiles/>
          <ServicesAndCheckout/>
          <Button
        variant="outlined"
        sx={{
          borderRadius: "100vh",
          width: "11rem",
          paddingTop: "0.6rem",
          paddingBottom: "0.6rem",
          marginInlineStart: "auto",
          display: 'block',
          marginTop: '1rem',
          color: "rgba(89, 89, 89, 1)",
          borderColor: "rgba(89, 89, 89, 1)",
        }}
      >
        {t("checkout")}
      </Button>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
}
