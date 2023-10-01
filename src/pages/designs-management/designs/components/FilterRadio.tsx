import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Stack, Typography } from "@mui/material";
import { t } from "i18next";
import { SetURLSearchParams, useSearchParams } from "react-router-dom";

type FilterRadioProps = {
  events: FenzoEvent[],
  event: string,
  setEvent: React.Dispatch<React.SetStateAction<string>>,
  time: string,
  setTime: React.Dispatch<React.SetStateAction<string>>
}

export default function FilterRadio(props: FilterRadioProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <Stack sx={{ padding: "2rem 5rem", gap: '2rem', height: 'fit-content', background: '#f5f5f5', '& *': {whiteSpace: 'nowrap', fontFamily: 'Aleo, serif !important'} }}>
      <FormControl>
        <Typography sx={{ fontWeight: "bold" }}>{t('event')}</Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={props?.event ?? ''}
          onChange={handleChangeEvent}
          value={props?.event}
          name="radio-buttons-group"
          sx={{
            "& .MuiTypography-root": { fontWeight: "400", fontSize: "0.9rem" },
          }}
        >
          {props.events?.map(e => (
            <FormControlLabel
              key={e?.id}
              value={e?.id}
              control={<Radio />}
              label={e?.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <FormControl>
        <Typography sx={{ fontWeight: "bold" }}>{t('time')}</Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={props?.time ?? ''}
          onChange={handleChangeTime}
          value={props?.time}
          name="radio-buttons-group"
          sx={{
            "& .MuiTypography-root": { fontWeight: "400", fontSize: "0.9rem" },
          }}
        >
          <FormControlLabel
            value="recent"
            control={<Radio />}
            label={t('recent')}
          />
          <FormControlLabel value="last_month" control={<Radio />} label={t('last_month')} />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}
