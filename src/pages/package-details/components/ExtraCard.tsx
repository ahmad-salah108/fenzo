import { Box, Button, Checkbox, Paper, Typography } from "@mui/material";
import i18next from "i18next";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ButtonLink from "../../../components/ButtonLink";
import AddIcon from "@mui/icons-material/Add";
import { Controller, useFormContext } from "react-hook-form";
import RemoveIcon from '@mui/icons-material/Remove';

type ExtraCardProps = {
  index: number;
  id: string
};

export default function ExtraCard(props: ExtraCardProps) {
  const {control, setValue, watch} = useFormContext();

  return (
    <Paper
      elevation={3}
      sx={{
        width: "23rem",
        overflow: "hidden",
        animationDelay: `0.${props.index}s`,
        marginInline: "auto",
        position: "relative",
      }}
      className="card-animation"
    >
      <Controller
        name={`check${props.id}`}
        control={control}
        defaultValue={false}
        render={({field}) => (
          <Checkbox
            {...field}
            disableRipple
            checked={field.value}
            onChange={(e) => field.onChange(e.target.checked)}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              borderRadius: "50%",
              borderColor: "white",
              color: "#fff",
              "& svg": { color: "#fff" },
              "&::before": {
                content: '""',
                width: "90%",
                height: "90%",
                background: "rgb(255,255,255,0.2)",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "0",
                borderRadius: "50%",
              },
            }}
          />
        )}
      />
      <img
        src="/assets/images/bg-signup.jpg"
        style={{ objectFit: "cover", height: "18rem", width: "100%" }}
      />
      <Box sx={{ width: "100%", display: "grid", placeItems: "center" }}>
        <Button
          color="primary"
          variant="contained"
          sx={{
            borderRadius: "50%",
            padding: "0",
            minWidth: "3.5rem",
            height: "3.5rem",
            border: "3px solid #fff",
            boxShadow: "none",
            "&:hover": { boxShadow: "none" },
            "&:focus": { boxShadow: "none" },
            "&:active": { boxShadow: "none" },
            transform: "translateY(-2.2rem)",
          }}
          onClick={() => {setValue(`check${props.id}`, !watch(`check${props.id}`))}}
        >
          {watch(`check${props.id}`) ? <RemoveIcon fontSize="large"/> : <img src="/assets/icons/plus.svg" width={"20rem"} /> }
        </Button>
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.5rem",
          marginTop: "-1.4rem",
        }}
      >
        Wedding designs
      </Typography>
      <Typography
        sx={{ color: "#bbb", textAlign: "center", fontWeight: "200" }}
      >
        Wedding
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "200",
          fontSize: "0.9rem",
          margin: "1rem 2rem 2rem",
          lineHeight: "1.5rem",
        }}
        className="text-ellipsis-5"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s. asd wd qw dqw dqw qef qe fqe fqef
      </Typography>
    </Paper>
  );
}
