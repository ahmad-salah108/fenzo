import { Avatar, Box, Button, Menu, MenuItem } from "@mui/material";
import { t } from "i18next";
import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useUser } from "../../context/UserContext";

export default function UserAvatar() {
  const {user, handleLogout} = useUser();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    handleClose();
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableRipple
        sx={{
          padding: 0,
          minWidth: "fit-content",
          borderRadius: "50%",
          "&:hover": {
            background: "transparent",
          },
          "&:active": {
            background: "transparent",
          },
          "&:focus": {
            background: "transparent",
          },
        }}
        onClick={handleClick}
      >
        <Avatar
          src={user?.image ?? ''}
          alt="profile picture"
          sx={{
            border: "1px solid #fff",
            width: "3.2rem",
            height: "3.2rem",
          }}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleOpenDialog}>{t("logout")}</MenuItem>
      </Menu>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        {t('logout')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t('wanna_logout')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} sx={{color: "gray"}}>{t('no')}</Button>
          <Button onClick={handleLogout} autoFocus>
            {t('yes')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
