import {
  Box,
  Button,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Footer from "../../../components/Footer";
import ChoosePackages from "./components/ChoosePackages";
import PackageDescription from "./components/PackageDescription";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import i18next, { t } from "i18next";

export default function DesignDetails() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const { designId } = useParams();
  const [loading, setLoading] = useState<Boolean>(true);
  const [design, setDesign] = useState<Design>({} as Design)
  const [packages, setPackages] = useState<Packages>()

  useEffect(() => {
    window.scrollTo(0, 0);

    let apiCounter = 0;

    axios.get(`${process.env.REACT_APP_API_URL}/design/show/${designId}`)
    .then(res => {
      setDesign(res?.data?.data)
      apiCounter++;
      if(apiCounter === 2) setLoading(false);
    }).catch(err => {
      toast.error(err?.response?.data?.message ?? t("smth_went_wrong"), {
        position: "bottom-left",
        rtl: i18next.language === "ar",
      });
      apiCounter++;
      if(apiCounter === 2) setLoading(false);
    })

    // axios.get(`${process.env.REACT_APP_API_URL}/package/index`)
    // .then(res => {
    //   setPackages(res?.data?.data)
    //   apiCounter++;
    //   if(apiCounter === 2) setLoading(false);
    // }).catch(err => {
    //   toast.error(err?.response?.data?.message ?? t("smth_went_wrong"), {
    //     position: "bottom-left",
    //     rtl: i18next.language === "ar",
    //   });
    //   apiCounter++;
    //   if(apiCounter === 2) setLoading(false);
    // })
  }, []);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Box>
        <PackageDescription />
        <ChoosePackages />
        {/* <Button
          variant="outlined"
          sx={{
            color: "rgba(89, 89, 89, 1)",
            borderColor: "rgba(89, 89, 89, 1)",
            borderRadius: '100vh',
            width: "13rem",
            paddingTop: '0.7rem',
            paddingBottom: '0.7rem',
            marginInlineStart: 'auto',
            display: 'block',
            marginTop: '70px'
          }}
        >
          Order now
        </Button> */}
      </Box>
      <Footer />
    </Container>
  );
}
