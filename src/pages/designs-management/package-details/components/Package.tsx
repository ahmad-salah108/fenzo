import { Groups, Sell, WatchLater } from "@mui/icons-material";
import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import i18next from "i18next";
import React from "react";
import ButtonLink from "../../../../components/ButtonLink";
import { Link, useParams } from "react-router-dom";

export default function Package({data}: {data: Package}) {
  const { packageId, designId } = useParams();

  return (
    <Paper elevation={3} sx={{ width: "365px", overflow: 'hidden' }}>
      <Stack direction={"row"}>
        <img
          src={data?.images?.[0]?.image ?? ''}
          style={{ maxHeight: "157px", width: "140px", height: '140px', objectFit: "cover", objectPosition: 'center' }}
        />
        <ButtonLink
          component={Link}
          to={`/designs/${designId}/${packageId}`}
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
          <Typography sx={{fontSize: '0.7rem'}}>
            ${data?.price}{" "}
            <Sell
              color="primary"
              sx={{ fontSize: "0.7rem", transform: "translateX(-4px)" }}
            />
          </Typography>
          <Typography
            fontWeight={"bold"}
            sx={{ fontSize: '0.8rem' }}
          >
            {data?.title}
          </Typography>
          <Typography sx={{ color: "#aaa", fontSize: '0.7rem', marginBottom: '2px' }}>
            {data?.designs?.map(e => e?.design_title)?.join(', ')}
          </Typography>
          <Typography
            sx={{ marginBottom: "7px", display: "flex", alignItems: "center", fontSize: '0.7rem' }}
          >
            <WatchLater sx={{fontSize: '0.8rem'}}/>
            &nbsp;01 hour, 55 minute&nbsp;
            <Groups sx={{fontSize: '0.8rem'}}/>
            &nbsp;{data?.capacity_person_price}
          </Typography>
          {/* <Divider
            sx={{ width: "100px", borderColor: "#eee", marginBottom: "3px" }}
          /> */}
          <Typography
            sx={{
              fontWeight: "200",
              fontSize: "0.7rem",
              // lineHeight: "2.15rem",
              whiteSpace: "pre-wrap",
            }}
            className="text-ellipsis-4"
          >
            {data?.description}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
