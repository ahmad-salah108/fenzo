import {
  Box,
  Container,
  Grid,
  InputAdornment,
  Pagination,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, {useEffect} from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FilterRadio from "./components/FilterRadio";
import PackageVertical from "../../../components/PackageVertical";
import FilterSelect from "./components/FilterSelect";
import { Search } from "@mui/icons-material";
import { t } from "i18next";
import Footer from "../../../components/Footer";

export default function Designs() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <Container maxWidth='lg' sx={{paddingTop: '2rem', paddingBottom: '2rem'}}>
      <Box>
        {!lg && <FilterSelect />}
        <Stack direction={"row"} sx={{ gap: "3rem" }}>
          {lg && <FilterRadio />}
          <Box>
            <TextField
              variant="standard"
              placeholder={t('search')}
              sx={{marginInlineStart: {xs: '0', md: '3.2rem'}, marginBottom: '3rem', width: 'min(100%, 54rem)'}}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            <Grid container spacing={3}>
              {[1, 2, 3, 4].map((e, index) => (
                <Grid key={e} item xs={12} md={6}>
                  <PackageVertical index={index} />
                </Grid>
              ))}
            </Grid>
            <Pagination sx={{marginTop: '3rem', marginInline: 'auto', width: 'fit-content'}} count={10} color="primary" />
          </Box>
        </Stack>
      </Box>
      <Footer />
    </Container>
  );
}
