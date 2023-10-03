import {
  Box,
  InputAdornment,
  Pagination,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Package from "./Package";
import { PER_PAGE_4 } from "../../../../constants/PerPage";
import { Search } from "@mui/icons-material";
import { t } from "i18next";
import SkeletonPackage from "./SkeletonPackage";

type ChoosePackageProps = {
  page: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  packages: Packages;
  loadingPackages: Boolean
};

export default function ChoosePackages(props: ChoosePackageProps) {
  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box sx={{ marginTop: "3rem" }}>
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: "700",
          fontFamily: "Aleo, serif !important",
        }}
      >
        Choose Any Packages
      </Typography>
      <TextField
        variant="standard"
        placeholder={t("search")}
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
      <Stack
        sx={{
          // width: { xs: "90vw", lg: "auto" },
          width: "fit-content",
          paddingInlineEnd: "1.3rem",
          paddingBlock: '0.5rem',
          gap: "3rem",
          overflow: "auto",
          height:
            props.packages?.data?.length === 1
              ? "210px"
              : props.packages?.data?.length === 2
              ? "450px"
              : "540px",
          marginTop: "1rem",
          "&::-webkit-scrollbar": { width: "6px", height: "6px" },
        }}
      >
        {props.loadingPackages && <SkeletonPackage/>}
        {!props.loadingPackages && props.packages?.data?.map((e) => (
          <Box key={e?.id}>
            <Package data={e} />
          </Box>
        ))}
      </Stack>
      <Pagination
        count={Math.ceil(props.packages?.total / PER_PAGE_4)}
        color="primary"
        sx={{ marginTop: "2rem" }}
        page={props.page}
        onChange={props.handleChange}
      />
    </Box>
  );
}
