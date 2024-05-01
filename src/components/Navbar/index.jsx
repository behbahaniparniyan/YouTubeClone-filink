import { Fragment } from "react";
import { Link } from "react-router-dom";

import { AppBar, Typography, Box, Badge } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import NotificationsIcon from "@mui/icons-material/Notifications";

import BackgroundLetterAvatars from "../BackgroundLetterAvatars";
import { useLightModeState } from "../../context/themeMode";
import SearchInput from "../SearchInput";
import SwitchMode from "../SwitchMode";

import useStyles from "./style.js";

const Navbar = ({ menuIconClick }) => {
  const classes = useStyles();
  const lightMode = useLightModeState();

  return (
    <Fragment>
      <AppBar class={!lightMode ? classes.root : classes.lightNavbar}>
        <Box class={classes.container}>
          <SwitchMode />
          <h1>Filink</h1>
        </Box>
        <SearchInput />
        <Box
          class={
            !lightMode ? classes.rightContainer : classes.lightRightContainer
          }
        >
          <Badge
            badgeContent={17}
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#438A6A",
              },
            }}
          >
            <Box
              class={
                !lightMode
                  ? classes.NotificationsIconColor
                  : classes.NotificationsIconLightColor
              }
            >
              <NotificationsIcon />
            </Box>
          </Badge>
          {!localStorage.getItem("email") ? (
            <Link
              to={"/login"}
              class={
                !lightMode
                  ? classes.loginContainer
                  : classes.lightLoginContainer
              }
            >
              <LoginIcon />
              <Typography>Login</Typography>
            </Link>
          ) : (
            <BackgroundLetterAvatars />
          )}
        </Box>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
