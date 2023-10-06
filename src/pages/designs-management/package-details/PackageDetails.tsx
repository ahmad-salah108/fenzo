import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
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
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import i18next, { t } from "i18next";
import { PER_PAGE_3 } from "../../../constants/PerPage";
import SkeletonDetails from "../../../components/SkeletonDetails";
import { LoadingButton } from "@mui/lab";
import { useUser } from "../../../context/UserContext";

export default function PackageDetails() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const { packageId, designId } = useParams();
  const [packageData, setPackageData] = useState<Package>({} as Package);
  const [extras, setExtras] = useState<Categories>({} as Categories);
  const [services, setServices] = useState<Categories>({} as Categories);
  const [loading, setLoading] = useState<Boolean>(true);
  const [pageExtras, setPageExtras] = useState<number>(1);
  const [pageServices, setPageServices] = useState<number>(1);
  const [loadingOrder, setLoadingOrder] = useState<boolean>(false);
  const { user } = useUser();
  const navigate = useNavigate();
  const [relatedPackages, setRelatedPackages] = useState<Packages>(
    {} as Packages
  );

  const handleOrderNow = () => {
    if (!user?.token) {
      navigate("/login");
      return;
    }

    setLoadingOrder(true);

    axios
      .post(`${process.env.REACT_APP_API_URL}/cart/add-cart`, {
        package_id: packageId,
      })
      .then((res) => {
        toast.success(t("selected_successfully"), {
          position: "bottom-left",
          rtl: i18next.language === "ar",
        });
        setLoadingOrder(false);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message ?? t("smth_went_wrong"), {
          position: "bottom-left",
          rtl: i18next.language === "ar",
        });
        setLoadingOrder(false);
      });
  };

  // GET PACKAGE DETAILS
  useEffect(() => {
    window.scrollTo(0, 0);

    let apiCounter = 0;

    axios
      .get(`${process.env.REACT_APP_API_URL}/package/show/${packageId}`)
      .then((res) => {
        setPackageData(res?.data?.data);
        apiCounter++;
        if (apiCounter === 2) setLoading(false);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message ?? t("smth_went_wrong"), {
          position: "bottom-left",
          rtl: i18next.language === "ar",
        });
        apiCounter++;
        if (apiCounter === 2) setLoading(false);
      });

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/package/index`,
        {
          paginate: 20,
          design_id: designId,
        },
        {
          params: {
            page: 1,
          },
        }
      )
      .then((res) => {
        setRelatedPackages(res?.data?.data);
        apiCounter++;
        if (apiCounter === 2) setLoading(false);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message ?? t("smth_went_wrong"), {
          position: "bottom-left",
          rtl: i18next.language === "ar",
        });
        apiCounter++;
        if (apiCounter === 2) setLoading(false);
      });
  }, []);

  // GET EXTRAS
  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/category/get-category-extra`,
        {
          paginate: lg ? 3 : md ? 2 : 1,
        },
        {
          params: {
            page: pageExtras,
          },
        }
      )
      .then((res) => {
        setExtras(res?.data?.data);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message ?? t("smth_went_wrong"), {
          position: "bottom-left",
          rtl: i18next.language === "ar",
        });
      });
  }, [pageExtras, md, lg]);

  // GET SERVICES
  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/category/get-category-services`,
        {
          paginate: lg ? 3 : md ? 2 : 1,
        },
        {
          params: {
            page: pageServices,
          },
        }
      )
      .then((res) => {
        setServices(res?.data?.data);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message ?? t("smth_went_wrong"), {
          position: "bottom-left",
          rtl: i18next.language === "ar",
        });
      });
  }, [pageServices, md, lg]);

  useEffect(() => {
    setPageExtras(1);
    setPageServices(1);
  }, [md, lg]);

  if (loading) {
    return <SkeletonDetails />;
  }

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Box>
        <Grid container>
          <Grid item xs={12} lg={8}>
            <PackageDetailsStart data={packageData} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <PackageDetailsEnd relatedPackages={relatedPackages} />
          </Grid>
        </Grid>
        {extras?.data?.length > 0 ? (
          <Extras
            extras={extras}
            pageExtras={pageExtras}
            setPageExtras={setPageExtras}
          />
        ) : (
          <Typography
            sx={{ color: "#aaa", fontSize: "1.4rem", marginBottom: "1rem" }}
          >
            There are no extras
          </Typography>
        )}
        {services?.data?.length > 0 ? (
          <Services
            services={services}
            pageServices={pageServices}
            setPageServices={setPageServices}
          />
        ) : (
          <Typography sx={{ color: "#aaa", fontSize: "1.4rem" }}>
            There are no services
          </Typography>
        )}
        <LoadingButton
          variant="outlined"
          loading={loadingOrder}
          sx={{
            color: "rgba(89, 89, 89, 1)",
            borderColor: "rgba(89, 89, 89, 1)",
            borderRadius: "100vh",
            width: "13rem",
            paddingTop: "0.7rem",
            paddingBottom: "0.7rem",
            marginInlineStart: "auto",
            display: "block",
            marginTop: "70px",
          }}
          onClick={handleOrderNow}
        >
          Order now
        </LoadingButton>
      </Box>
      <Footer />
    </Container>
  );
}
