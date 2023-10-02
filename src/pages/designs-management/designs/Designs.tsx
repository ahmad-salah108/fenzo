import {
  Box,
  Container,
  Grid,
  InputAdornment,
  Pagination,
  Skeleton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FilterRadio from "./components/FilterRadio";
import DesignCard from "../../../components/DesignCard";
import FilterSelect from "./components/FilterSelect";
import { Search } from "@mui/icons-material";
import i18next, { t } from "i18next";
import Footer from "../../../components/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import SkeletonDesigns from "./components/SkeletonDesigns";
import { useSearchParams } from "react-router-dom";
import { CARDS_PER_PAGE } from "../../../constants/CardsPerPage";

export default function Designs() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const [loading, setLoading] = useState<Boolean>(true);
  const [desgins, setDesigns] = useState<Designs>({} as Designs);
  const [events, setEvents] = useState<FenzoEvent[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page") ?? 1);
  const [event, setEvent] = useState(searchParams.get("event") ?? "");
  const [time, setTime] = useState(searchParams.get("time") ?? "");

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  useEffect(() => {
    let prev = {};

    Array.from(searchParams.entries())?.forEach((e) => {
      prev = {
        ...prev,
        [e?.[0]]: e?.[1],
      };
    });

    setSearchParams({
      ...prev,
      page: `${page}`,
    });
  }, [page]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    axios
      .post(`${process.env.REACT_APP_API_URL}/design/index`, {
        paginate: CARDS_PER_PAGE,
        ... event && {event_id: event},
        ... time && {time: time}
      }, {
        params: {
          page: page,
        },
      })
      .then((res) => {
        setDesigns(res?.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message ?? t("smth_went_wrong"), {
          position: "bottom-left",
          rtl: i18next.language === "ar",
        });
        setLoading(false);
      });
  }, [page, event, time]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/event`)
      .then((res) => {
        setEvents(res?.data?.data);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message ?? t("smth_went_wrong"), {
          position: "bottom-left",
          rtl: i18next.language === "ar",
        });
      });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Box sx={{ width: "100%" }}>
        {!lg && <FilterSelect events={events} event={event} setEvent={setEvent} time={time} setTime={setTime} />}
        <Stack direction={"row"} sx={{ gap: "3rem", width: "100%" }}>
          {lg && <FilterRadio events={events} event={event} setEvent={setEvent} time={time} setTime={setTime}/>}
          <Box sx={{ width: "100%" }}>
            <TextField
              variant="standard"
              placeholder={t("search")}
              sx={{
                marginInlineStart: { xs: "0", md: "3.2rem" },
                marginBottom: "3rem",
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
            {loading ? (
              <SkeletonDesigns />
            ) : (<>{desgins?.data?.length == 0 || desgins?.data == null ? 
              <Box sx={{height: '90vh'}}>
                <Typography sx={{color: '#aaa', textAlign: 'center', fontSize: '1.5rem'}}>{t('no_designs')}</Typography>
              </Box>
              :
            
              <Box>
                <Grid container spacing={3}>
                  {desgins?.data?.map((e, index) => (
                    <Grid key={index} item xs={12} md={6}>
                      <DesignCard index={index} data={e} />
                    </Grid>
                  ))}
                </Grid>
                <Pagination
                  sx={{
                    marginTop: "3rem",
                    marginInline: "auto",
                    width: "fit-content",
                  }}
                  count={Math.ceil(desgins?.total / CARDS_PER_PAGE)}
                  color="primary"
                  page={+page}
                  onChange={handleChangePage}
                />
              </Box>
            }</>
            )}
          </Box>
        </Stack>
      </Box>
      <Footer />
    </Container>
  );
}
