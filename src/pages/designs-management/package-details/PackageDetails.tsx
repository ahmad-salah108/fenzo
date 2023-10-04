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
import SkeletonDetails from "../../../components/SkeletonDetails";

export default function PackageDetails() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xs = useMediaQuery(theme.breakpoints.up("xs"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const { packageId, designId } = useParams();
  const [packageData, setPackageData] = useState<Package>({} as Package);
  const [extras, setExtras] = useState<Categories>({} as Categories);
  const [services, setServices] = useState<Categories>({} as Categories);
  const [loading, setLoading] = useState<Boolean>(true)
  const [loadingExtras, setLoadingExtras] = useState<Boolean>(true)
  const [loadingServices, setLoadingServices] = useState<Boolean>(true)
  const [pageExtras, setPageExtras] = useState<number>(1);
  const [pageServices, setPageServices] = useState<number>(1);
  const [relatedPackages, setRelatedPackages] = useState<Packages>({} as Packages);

  // GET PACKAGE DETAILS
  useEffect(() => {
    window.scrollTo(0, 0);

    let apiCounter = 0;

    axios.get(`${process.env.REACT_APP_API_URL}/package/show/${packageId}`)
    .then(res => {
      setPackageData(res?.data?.data)
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

    axios.post(`${process.env.REACT_APP_API_URL}/package/index`, {
      paginate: 20,
      design_id: designId
    }, {
      params: {
        page: 1
      }
    })
    .then(res => {
      setRelatedPackages(res?.data?.data)
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
  }, []);

  // GET EXTRAS
  useEffect(()=>{
    setLoadingExtras(true)
    
    axios.post(`${process.env.REACT_APP_API_URL}/category/get-category-extra`, {
      paginate: lg ? 3 : md ? 2 : 1,
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
  },[pageExtras, md, lg])

  // GET SERVICES
  useEffect(()=>{
    setLoadingServices(true)

    axios.post(`${process.env.REACT_APP_API_URL}/category/get-category-services`, {
      paginate: lg ? 3 : md ? 2 : 1,
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
  },[pageServices, md, lg])

  useEffect(()=>{
    setPageExtras(1);
    setPageServices(1);
  },[md, lg])

  if(loading){
    return <SkeletonDetails/>
  }

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Box>
        <Grid container>
          <Grid item xs={12} lg={8}>
            <PackageDetailsStart data={packageData}/>
          </Grid>
          <Grid item xs={12} lg={4}>
            <PackageDetailsEnd relatedPackages={relatedPackages}/>
          </Grid>
        </Grid>
        <Extras extras={extras} pageExtras={pageExtras} setPageExtras={setPageExtras}/>
        <Services services={services} pageServices={pageServices} setPageServices={setPageServices}/>
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
