import {
  Box,
  Grid,
  Pagination,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import i18next from "i18next";
import React from "react";
import ExtraCard from "./ExtraCard";
import { FormProvider, useForm } from "react-hook-form";

export default function Extras({
  extras,
  pageExtras,
  setPageExtras,
}: {
  extras: Categories;
  pageExtras: number,
  setPageExtras: React.Dispatch<React.SetStateAction<number>>
}) {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const methods = useForm();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageExtras(value);
  };

  return (
    <Box sx={{ marginTop: "5rem" }}>
      <FormProvider {...methods}>
        <Typography
          sx={{
            fontFamily: "Aleo, serif !important",
            fontSize: "1.5rem",
            fontWeight: "600",
          }}
        >
          Extras
        </Typography>
        {/* <Typography sx={{ color: "#bbb", fontSize: "0.9rem", fontFamily: "Aleo, serif !important" }}>
          Customize
        </Typography> */}
        <Box
          mt={2}
          sx={{
            width: { xs: "90vw", lg: "auto" },
            "& .slick-dots": { bottom: "-2rem !important" },
            "& .slick-dots li button:before": {
              color: "rgba(217, 217, 217, 1) !important",
            },
            "& .slick-dots li.slick-active button:before": {
              color: "rgba(219, 183, 155, 1) !important",
            },
          }}
        >
          <Grid container spacing={2}>
            {extras?.data?.map((e, i) => (
              <Grid key={e?.id} item xs={12} md={6} lg={4}>
                <ExtraCard index={i} data={e} />
              </Grid>
            ))}
          </Grid>
          <Pagination
            count={Math.ceil(extras?.total / (lg ? 3 : md ? 2 : 1))}
            color="primary"
            sx={{ marginTop: "2rem", marginInline: 'auto', width: "fit-content" }}
            page={pageExtras}
            onChange={handleChange}
          />
        </Box>
      </FormProvider>
    </Box>
  );
}
