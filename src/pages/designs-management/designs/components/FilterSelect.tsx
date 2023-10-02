import { Button, Stack } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { t } from "i18next";
import { useSearchParams } from "react-router-dom";

type FilterSelectProps = {
  events: FenzoEvent[];
  event: string;
  setEvent: React.Dispatch<React.SetStateAction<string>>;
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
};

export default function FilterSelect(props: FilterSelectProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeEvent = (e: SelectChangeEvent<string>) => {
    props.setEvent(e.target.value)

    let prev = {};

    Array.from(searchParams.entries())?.forEach((e) => {
      prev = {
        ...prev,
        [e?.[0]]: e?.[1],
      };
    });

    setSearchParams({
      ...prev,
      event: `${e.target.value}`,
    });
  }

  const handleChangeTime = (e: SelectChangeEvent<string>) => {
    props.setTime(e.target.value)

    let prev = {};

    Array.from(searchParams.entries())?.forEach((e) => {
      prev = {
        ...prev,
        [e?.[0]]: e?.[1],
      };
    });

    setSearchParams({
      ...prev,
      time: `${e.target.value}`,
    });
  }

  const handleReset = () => {
    props.setEvent('')
    props.setTime('')
    setSearchParams({
      page: `${searchParams.get('page') ?? 1}`
    })
  }

  return (
    <Stack
      direction={"row"}
      sx={{
        gap: "2rem",
        marginBottom: "3rem",
        flexWrap: "wrap",
        marginInlineStart: { xs: "0", md: "3.2rem" },
      }}
    >
      <Box sx={{ minWidth: "10rem" }}>
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">{t("event")}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            sx={{ "& *": { fontSize: "0.9rem" } }}
            defaultValue={props?.event ?? ''}
            onChange={handleChangeEvent}
            value={props?.event}
          >
            {props.events?.map((e) => (
              <MenuItem key={e?.id} sx={{ fontSize: "0.9rem" }} value={e?.id}>
                {e?.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: "7rem" }}>
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">{t("time")}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Time"
            sx={{ "& *": { fontSize: "0.9rem" } }}
            defaultValue={props?.time ?? ''}
            onChange={handleChangeTime}
            value={props?.time}
          >
            <MenuItem sx={{ fontSize: "0.9rem" }} value="recent">
              {t("recent")}
            </MenuItem>
            <MenuItem sx={{ fontSize: "0.9rem" }} value="last_month">
              {t("last_month")}
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: "7rem" }}>
      <Button onClick={handleReset}>{t('reset')}</Button>
      </Box>
    </Stack>
  );
}
