import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Footer from "../../../components/Footer";
import ChoosePackages from "./components/ChoosePackages";
import DesignDescription from "./components/DesignDescription";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import i18next, { t } from "i18next";
import SkeletonDesignDetails from "../../../components/SkeletonDetails";
import { PER_PAGE_4 } from "../../../constants/PerPage";
import { Search } from "@mui/icons-material";

export default function DesignDetails() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const { designId } = useParams();
  const [loading, setLoading] = useState<Boolean>(true);
  const [loadingPackages, setLoadingPackages] = useState<Boolean>(true);
  const [design, setDesign] = useState<Design>({} as Design);
  const [packages, setPackages] = useState<Packages>({} as Packages);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get(`${process.env.REACT_APP_API_URL}/design/show/${designId}`)
      .then((res) => {
        setDesign(res?.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message ?? t("smth_went_wrong"), {
          position: "bottom-left",
          rtl: i18next.language === "ar",
        });
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoadingPackages(true);
    let unmounted = false;
    let source = axios.CancelToken.source();

    if (search) {
      setPage(1);
    }

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/package/index`,
        {
          paginate: PER_PAGE_4,
          design_id: designId,
          ...(search && { title: search }),
        },
        {
          cancelToken: source.token,
          params: {
            page: page,
          },
        }
      )
      .then((res) => {
        if (!unmounted) {
          setPackages(res?.data?.data);
          setLoadingPackages(false);
        }
      })
      .catch((err) => {
        if (!unmounted) {
          toast.error(err?.response?.data?.message ?? t("smth_went_wrong"), {
            position: "bottom-left",
            rtl: i18next.language === "ar",
          });
          setLoadingPackages(false);
        }
      });

    return function () {
      unmounted = true;
      source.cancel("Cancelling in cleanup");
    };
  }, [page, search]);

  if (loading) {
    return <SkeletonDesignDetails />;
  }

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Box>
        <DesignDescription design={design} />
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "700",
            fontFamily: "Aleo, serif !important",
            marginTop: '3rem'
          }}
        >
          Choose Any Packages
        </Typography>
        <TextField
          variant="standard"
          placeholder={t("search")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            marginBlock: "2rem",
            width: "min(100%, 54rem)",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        {packages?.data?.length > 0 ? (
          <ChoosePackages
            page={page}
            handleChange={handleChange}
            packages={packages}
            loadingPackages={loadingPackages}
          />
        ) : (
          <Typography sx={{ color: "#888", fontSize: "1.4rem" }}>
            {t("no_packages")}
          </Typography>
        )}
      </Box>
      <Footer />
    </Container>
  );
}
