import {
  Box,
  Container,
  Grid,
  InputAdornment,
  Pagination,
  Skeleton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Footer from "../../../components/Footer";
import ItemCard from "./components/ItemCard";
import i18next, { t } from "i18next";
import { Search } from "@mui/icons-material";
import ItemsBreadcrumbs from "./components/ItemsBreadcrumbs";
import Category from "./components/Category";
import axios from "axios";
import { toast } from "react-toastify";

export default function ExtraCategories() {
  const [extraCategories, setExtraCategories] = useState<Categories>(
    {} as Categories
  );
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<Boolean>(true);
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/category/get-category-and-item-extra`,
        {
          paginate: 2,
        },
        {
          params: {
            page: page,
          },
        }
      )
      .then((res) => {
        setExtraCategories(res?.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message ?? t("smth_went_wrong"), {
          position: "bottom-left",
          rtl: i18next.language === "ar",
        });
        setLoading(false);
      });
  }, [page]);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Box sx={{ width: "100%" }}>
        <TextField
          variant="standard"
          placeholder={t("search")}
          sx={{
            // marginInlineStart: { xs: "0", md: "3.2rem" },
            marginBottom: "2rem",
            width: "100%",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <ItemsBreadcrumbs />
        {loading ? (
          <Grid container spacing={2} sx={{ marginBlock: "2rem" }}>
            <Grid item xs={12} md={6} lg={4}>
              <Skeleton
                variant="rounded"
                width={300}
                height={450}
                sx={{ margin: "auto" }}
              />
            </Grid>
            {md && (
              <Grid item xs={12} md={6} lg={4}>
                <Skeleton
                  variant="rounded"
                  width={300}
                  height={450}
                  sx={{ margin: "auto" }}
                />
              </Grid>
            )}
            {lg && (
              <Grid item xs={12} md={6} lg={4}>
                <Skeleton
                  variant="rounded"
                  width={300}
                  height={450}
                  sx={{ margin: "auto" }}
                />
              </Grid>
            )}
          </Grid>
        ) : (
          <>
            {extraCategories?.data?.length > 0 ? (
              <>
                {extraCategories?.data?.map((e) => (
                  <Category key={e?.id} data={e} />
                ))}
                <Pagination
                  count={Math.ceil(extraCategories?.total / 2)}
                  color="primary"
                  sx={{
                    marginTop: "3rem",
                    marginInline: "auto",
                    width: "fit-content",
                  }}
                  page={page}
                  onChange={handleChange}
                />
              </>
            ) : (
              <Typography
                sx={{
                  color: "#999",
                  textAlign: "center",
                  fontSize: "1.6rem",
                  marginTop: "20vh",
                  marginBottom: "45vh",
                }}
              >
                {t("no_categories")}
              </Typography>
            )}
          </>
        )}
      </Box>
      <Footer />
    </Container>
  );
}
