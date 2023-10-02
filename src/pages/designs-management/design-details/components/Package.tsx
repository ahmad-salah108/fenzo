import { Groups, Sell, WatchLater } from "@mui/icons-material";
import { Box, Button, Divider, Paper, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import i18next from "i18next";
import React from "react";
import { Link, useParams } from "react-router-dom";
import ButtonLink from "../../../../components/ButtonLink";

export default function Package() {
  const { designId } = useParams();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Paper elevation={3} sx={{ width: {xs: '400px', sm: "570px"}, overflow: 'hidden', paddingInlineEnd: '1rem' }}>
      <Stack direction={"row"}>
        <img
          src="https://images.unsplash.com/photo-1695983953103-17bce53a8138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2042&q=80"
          style={{ height: smDown ? '176px' : "200px", width: smDown ? '170px' : "200px", objectFit: "cover", objectPosition: 'center' }}
        />
        <ButtonLink
          component={Link}
          to={`/designs/${designId}/1`}
          color="primary"
          variant="contained"
          sx={{
            borderRadius: "50%",
            padding: "0",
            minWidth: "2.3rem",
            height: "2.3rem",
            border: "3px solid #fff",
            boxShadow: "none",
            "&:hover": { boxShadow: "none" },
            "&:focus": { boxShadow: "none" },
            "&:active": { boxShadow: "none" },
            marginBlock: "auto",
            transform: "translateX(-50%)",
          }}
        >
          {i18next.language !== "ar" && <img src="/assets/icons/arrow.svg" style={{width: '0.7rem'}} />}
          {i18next.language === "ar" && (
            <img
              src="/assets/icons/arrow.svg"
              style={{ rotate: "180deg", transform: "translateX(0.05rem)", width: '0.7rem' }}
            />
          )}
        </ButtonLink>
        <Box sx={{paddingBlock: '1rem'}}>
          <Typography sx={{fontSize: {xs: '0.7rem', sm: '1rem'}}}>
            $250{" "}
            <Sell
              color="primary"
              sx={{ fontSize: {xs: '0.7rem', sm: "1rem"}, transform: "translateX(-4px)" }}
            />
          </Typography>
          <Typography
            fontWeight={"bold"}
            sx={{ fontSize: {xs: '0.8rem', sm: '1.2rem'} }}
          >
            Couple Package
          </Typography>
          <Typography sx={{ color: "#aaa", fontSize: {xs: '0.7rem', sm: '0.8rem'}, marginBottom: '5px' }}>
            Couple
          </Typography>
          <Typography
            sx={{ marginBottom: "7px", display: "flex", alignItems: "center", fontSize: {xs: '0.7rem', sm: '1rem'} }}
          >
            <WatchLater sx={{fontSize: {xs: '0.7rem', sm: '1rem'}}}/>
            &nbsp;01 hour, 55 minute&nbsp;&nbsp;
            <Groups sx={{fontSize: {xs: '0.7rem', sm: '1rem'}}}/>
            &nbsp;120
          </Typography>
          {/* <Divider
            sx={{ width: "100px", borderColor: "#eee", marginBottom: "3px" }}
          /> */}
          <Typography
            sx={{
              fontWeight: "200",
              fontSize: {xs: '0.7rem', sm: "0.9rem"},
              // lineHeight: "2.15rem",
              whiteSpace: "pre-wrap",
            }}
            className="text-ellipsis-4"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
