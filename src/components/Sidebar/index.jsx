import React from "react";
import { Link } from "react-router-dom";

import { Box } from "@mui/material";

import SidebarItem from "../SidebarItem";
import { useLightModeState } from "../../context/themeMode";

import useStyles from "./style.js";

function Sidebar({ displayItemsClassName }) {
  const classes = useStyles();
  const lightMode = useLightModeState();

  return (
    <Box className={!lightMode ? classes.sidebar : classes.lightSidebar}>
      <Link to={"/"}>
        <SidebarItem
          classname={displayItemsClassName}
          iconName="HomeIcon"
          title="Home"
        />
      </Link>
      <SidebarItem
        classname={displayItemsClassName}
        iconName="settingsIcon"
        title="Setting"
      />
      <SidebarItem
        classname={displayItemsClassName}
        iconName="helpIcon"
        title="Help"
      />
      <SidebarItem
        classname={displayItemsClassName}
        iconName="videoLibrary"
        title="Library"
      />
      <Link to={"/playlist"}>
        <SidebarItem
          classname={displayItemsClassName}
          iconName="watchLaterOutlinedIcon"
          title="Watch later"
        />
      </Link>
      <Link to={"/login"} onClick={localStorage.removeItem("email")}>
        <SidebarItem
          classname={displayItemsClassName}
          iconName="logout"
          title="logout"
        />
      </Link>
    </Box>
  );
}

export default Sidebar;
