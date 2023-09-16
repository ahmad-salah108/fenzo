import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Stack, TextField, Typography } from "@mui/material";
import i18next, { t } from "i18next";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type DialogEventProps = {
  open: boolean;
  handleClose: () => void;
};

export default function DialogEvent({ open, handleClose }: DialogEventProps) {
  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ "& *": { fontFamily: "Aleo, serif !important" } }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{ textTransform: "uppercase", fontSize: "3rem", fontWeight: "700" }}
      >
        {t("describe_your")}{" "}
        <Typography
          component={"span"}
          sx={{
            textTransform: "uppercase",
            fontSize: "3rem",
            fontWeight: "700",
          }}
          color={"primary"}
        >
          {t("event")}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Box sx={{ marginTop: "2rem" }}>
            <Typography>{t("event_type")}*</Typography>
            <FormControl variant="standard" fullWidth sx={{ minWidth: 120 }}>
              {/* <InputLabel id="demo-simple-select-standard-label">Age</InputLabel> */}
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                // label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ marginTop: "2rem" }}>
            <Typography>{t("date_of_event")}</Typography>
            <TextField
              placeholder="DD-MM-YYYY"
              fullWidth
              variant="standard"
              type="date"
              sx={{ "& input": { height: "2rem" } }}
            />
          </Box>
          <Box sx={{ marginTop: "2rem" }}>
            <Typography>{t("place")}</Typography>
            <FormControl variant="standard" fullWidth sx={{ minWidth: 120 }}>
              {/* <InputLabel id="demo-simple-select-standard-label">Age</InputLabel> */}
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                // label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Stack direction={"row"} sx={{ gap: "0.8rem", marginTop: "1rem", paddingInlineEnd: '1rem', paddingBottom: '1rem' }}>
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{
              borderRadius: "100vh",
              width: "11rem",
              paddingTop: "0.6rem",
              paddingBottom: "0.6rem",
              marginInlineStart: "auto",
              color: "rgba(89, 89, 89, 1)",
              borderColor: "rgba(89, 89, 89, 1)",
            }}
          >
            {t("cancel")}
          </Button>
          <Button
            color="primary"
            variant="contained"
            sx={{
              borderRadius: "50%",
              padding: "0",
              minWidth: "2.9rem",
              height: "2.9rem",
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
        </Stack>
      </DialogActions>
    </Dialog>
  );
}
