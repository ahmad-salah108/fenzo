import {
  Box,
  Container, Grid, useMediaQuery,
  useTheme
} from "@mui/material";
import Footer from "../../../components/Footer";
import DesignDetailsEnd from "./components/DesignDetailsEnd";
import DesignDetailsStart from "./components/DesignDetailsStart";

export default function DesignDetails() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Container maxWidth='lg' sx={{paddingTop: '2rem', paddingBottom: '2rem'}}>
      <Box>
        <Grid container>
          <Grid item xs={12} lg={8}>
            <DesignDetailsStart/>
          </Grid>
          <Grid item xs={12} lg={4}>
            <DesignDetailsEnd/>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Container>
  );
}
