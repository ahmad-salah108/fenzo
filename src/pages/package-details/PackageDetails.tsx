import {
  Box,
  Button,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Footer from "../../components/Footer";
import PackageDetailsEnd from "./components/PackageDetailsEnd";
import PackageDetailsStart from "./components/PackageDetailsStart";
import React, { useEffect } from "react";
import Extras from "./components/Extras";
import Services from "./components/Services";

export default function PackageDetails() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Box>
        <Grid container>
          <Grid item xs={12} lg={8}>
            <PackageDetailsStart />
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
