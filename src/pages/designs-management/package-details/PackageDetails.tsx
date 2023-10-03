import {
  Box,
  Button,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Footer from "../../../components/Footer";
import PackageDetailsEnd from "./components/PackageDetailsEnd";
import PackageDetailsStart from "./components/PackageDetailsStart";
import React, { useEffect, useState } from "react";
import Extras from "./components/Extras";
import Services from "./components/Services";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import i18next, { t } from "i18next";
import { PER_PAGE_3 } from "../../../constants/PerPage";

export default function PackageDetails() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const { packageId } = useParams();
  const [packageData, setPackageData] = useState<Package>({} as Package);
  const [extras, setExtras] = useState<ExtrasOrServices>({} as ExtrasOrServices);
  const [services, setServices] = useState<ExtrasOrServices>({} as ExtrasOrServices);
  const [loading, setLoading] = useState<Boolean>(true)
  const [loadingEXtras, setLoadingExtras] = useState<Boolean>(true)
  const [loadingServices, setLoadingServices] = useState<Boolean>(true)
  const [pageExtras, setPageExtras] = useState<number>(1);
  const [pageServices, setPageServices] = useState<number>(1);

  // GET PACKAGE DETAILS
  useEffect(() => {
    window.scrollTo(0, 0);

    axios.get(`${process.env.REACT_APP_API_URL}/package/show/${packageId}`)
    .then(res => {
      setPackageData(res?.data?.data)
      setLoading(false)
    }).catch(err => {
      toast.error(err?.response?.data?.message ?? t("smth_went_wrong"), {
        position: "bottom-left",
        rtl: i18next.language === "ar",
      });
      setLoading(false);
    })
  }, []);

  // GET EXTRAS FOR PACKAGE
  useEffect(()=>{
    setLoadingExtras(true)
    
    axios.post(`${process.env.REACT_APP_API_URL}/item/get-extra-from-package`, {
      paginate: PER_PAGE_3,
      package_id: packageId
    }, {
      params: {
        page: pageExtras
      }
    })
    .then(res => {
      setExtras(res?.data?.data)
      setLoadingExtras(false)
    }).catch(err => {
      toast.error(err?.response?.data?.message ?? t("smth_went_wrong"), {
        position: "bottom-left",
        rtl: i18next.language === "ar",
      });
      setLoadingExtras(false);
    })
  },[pageExtras])

  // GET SERVICES FOR PACKAGE
  useEffect(()=>{
    setLoadingServices(true)

    axios.post(`${process.env.REACT_APP_API_URL}/item/get-services-from-package`, {
      paginate: PER_PAGE_3,
      package_id: packageId
    }, {
      params: {
        page: pageServices
      }
    })
    .then(res => {
      setServices(res?.data?.data)
      setLoadingServices(false)
    }).catch(err => {
      toast.error(err?.response?.data?.message ?? t("smth_went_wrong"), {
        position: "bottom-left",
        rtl: i18next.language === "ar",
      });
      setLoadingServices(false);
    })
  },[pageServices])

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Box>
        <Grid container>
          <Grid item xs={12} lg={8}>
            <PackageDetailsStart data={packageData}/>
          </Grid>
          <Grid item xs={12} lg={4}>
            <PackageDetailsEnd />
          </Grid>
        </Grid>
        <Extras />
        <Services />
        <Button
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
        </Button>
      </Box>
      <Footer />
    </Container>
  );
}
