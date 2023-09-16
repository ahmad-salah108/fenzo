import { Box, Button, Paper, Typography } from "@mui/material";
import i18next from "i18next";
import React from "react";

type PackageVerticalProps = {
  index: number
}

export default function PackageVertical(props: PackageVerticalProps) {
  return (
    <Paper elevation={3} sx={{ width: "23rem", overflow: "hidden", animationDelay: `0.${props.index}s`, marginInline: 'auto' }} className="card-animation">
      <img
        src="/assets/images/bg-signup.jpg"
        style={{ objectFit: "cover", height: "18rem", width: "100%" }}
      />
      <Box sx={{width: '100%', display: 'grid', placeItems: 'center'}}>
        <Button
          color="primary"
          variant="contained"
          sx={{
            borderRadius: "50%",
            padding: "0",
            minWidth: "3.5rem",
            height: "3.5rem",
            border: '3px solid #fff',
            boxShadow: 'none',
            '&:hover': {boxShadow: 'none'},
            '&:focus': {boxShadow: 'none'},
            '&:active': {boxShadow: 'none'},
            transform: 'translateY(-2.2rem)'
          }}
        >
          {i18next.language !== "ar" && <img src="/assets/icons/arrow.svg" />}
          {i18next.language === "ar" && (
            <img
              src="/assets/icons/arrow.svg"
              style={{ rotate: "180deg", transform: "translateX(0.05rem)" }}
            />
          )}
        </Button>
      </Box>
      <Typography sx={{textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem', marginTop: '-0.7rem'}}>Wedding designs</Typography>
      <Typography sx={{textAlign: 'center', fontWeight: '200', fontSize: '0.9rem', padding: '1.7rem 2rem 3rem', lineHeight: '1.5rem'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Typography>
    </Paper>
  );
}
