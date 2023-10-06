import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { useUser } from "../context/UserContext";
import { Avatar, useMediaQuery, useTheme } from "@mui/material";
import UserAvatar from "./components/UserAvatar";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function Layout(props: { window: any }) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { t } = useTranslation();
  const pathname = useLocation().pathname;
  const { user } = useUser();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 1 }}>
        <Link to={"/"}>
          <img src="/assets/icons/logo.svg" style={{ width: "10.2rem" }} />
        </Link>
      </Box>
      <Divider />
      <List>
        <Stack>
          <ListItemButton>
            <NavLink
              to="/"
              style={{
                textAlign: "center",
                width: "100%",
                height: "100%",
                padding: "7px 16px",
              }}
              className={({ isActive }) =>
                isActive ? "active-drawer-link" : ""
              }
            >
              {t("home")}
            </NavLink>
          </ListItemButton>
          <ListItemButton>
            <NavLink
              to="/designs"
              style={{
                textAlign: "center",
                width: "100%",
                height: "100%",
                padding: "7px 16px",
              }}
              className={({ isActive }) =>
                isActive ? "active-drawer-link" : ""
              }
            >
              {t("designs")}
            </NavLink>
          </ListItemButton>
          <ListItemButton>
            <NavLink
              to="/my-orders"
              style={{
                textAlign: "center",
                width: "100%",
                height: "100%",
                padding: "7px 16px",
              }}
              className={({ isActive }) =>
                isActive ? "active-drawer-link" : ""
              }
            >
              {t("my_orders")}
            </NavLink>
          </ListItemButton>
          <ListItemButton>
            <NavLink
              to="/contact-us"
              style={{
                textAlign: "center",
                width: "100%",
                height: "100%",
                padding: "7px 16px",
              }}
              className={({ isActive }) =>
                isActive ? "active-drawer-link" : ""
              }
            >
              {t("contact_us")}
            </NavLink>
          </ListItemButton>
          <ListItemButton>
            <NavLink
              to="/about-us"
              style={{
                textAlign: "center",
                width: "100%",
                height: "100%",
                padding: "7px 16px",
              }}
              className={({ isActive }) =>
                isActive ? "active-drawer-link" : ""
              }
            >
              {t("about_us")}
            </NavLink>
          </ListItemButton>
          {!user?.token && (
            <>
              <ListItemButton>
                <NavLink
                  to="/login"
                  style={{
                    textAlign: "center",
                    width: "100%",
                    height: "100%",
                    padding: "7px 16px",
                  }}
                  className={({ isActive }) =>
                    isActive ? "active-drawer-link" : ""
                  }
                >
                  {t("login")}
                </NavLink>
              </ListItemButton>
              <ListItemButton>
                <NavLink
                  to="/sign-up"
                  style={{
                    textAlign: "center",
                    width: "100%",
                    height: "100%",
                    padding: "7px 16px",
                  }}
                  className={({ isActive }) =>
                    isActive ? "active-drawer-link" : ""
                  }
                >
                  {t("sign_up")}
                </NavLink>
              </ListItemButton>
            </>
          )}
        </Stack>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        color="secondary"
        sx={{
          boxShadow: "none",
          borderBottom: (theme) => `2px solid ${theme.palette.primary.main}`,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ padding: "0 !important" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {!user?.token && (
              <Box sx={{ marginInlineStart: "auto", display: { md: "none" } }}>
                <Link to={"/"}>
                  <img
                    src="/assets/icons/logo.svg"
                    style={{ width: "10.2rem" }}
                  />
                </Link>
              </Box>
            )}
            {user?.token && md && (
              <Stack
                direction={"row"}
                sx={{
                  gap: "0.2rem",
                  marginInlineStart: "auto",
                  alignItems: "center",
                }}
              >
                <IconButton sx={{ width: "35px", height: "35px" }}>
                  <img src="/assets/icons/cart.svg" />
                </IconButton>
                <IconButton sx={{ width: "35px", height: "35px" }}>
                  <img src="/assets/icons/notification.svg" />
                </IconButton>
                <UserAvatar />
              </Stack>
            )}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}>
              <Link to={"/"}>
                <img
                  src="/assets/icons/logo.svg"
                  style={{ width: "10.2rem" }}
                />
              </Link>
            </Box>
            <Stack
              direction={"row"}
              sx={{ display: { xs: "none", md: "flex" }, gap: "2rem" }}
            >
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : ""
                }
              >
                {t("home")}
              </NavLink>
              <NavLink
                to={"/designs"}
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : ""
                }
              >
                {t("designs")}
              </NavLink>
              <NavLink
                to={"/my-orders"}
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : ""
                }
              >
                {t("my_orders")}
              </NavLink>
              <NavLink
                to={"/contact-us"}
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : ""
                }
              >
                {t("contact_us")}
              </NavLink>
              <NavLink
                to={"/about-us"}
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : ""
                }
              >
                {t("about_us")}
              </NavLink>
            </Stack>
            {!user?.token && (
              <Stack
                direction={"row"}
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: "2rem",
                  marginInlineStart: "7rem",
                }}
              >
                <NavLink to={"/login"}>{t("login")}</NavLink>
                <NavLink to={"/sign-up"}>{t("sign_up")}</NavLink>
              </Stack>
            )}
            {user?.token && (
              <Stack
                direction={"row"}
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: "0.2rem",
                  marginInlineStart: "7rem",
                  alignItems: "center",
                }}
              >
                <IconButton sx={{ width: "35px", height: "35px" }} onClick={()=>navigate('/cart')}>
                  <img src="/assets/icons/cart.svg" />
                </IconButton>
                <IconButton sx={{ width: "35px", height: "35px" }}>
                  <img src="/assets/icons/notification.svg" />
                </IconButton>
                <UserAvatar />
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ margin: "auto", width: '100%' }}>
        <Toolbar />
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
