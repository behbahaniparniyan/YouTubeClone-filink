import React, { useMemo } from "react";

import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Link,
  Tooltip,
} from "@mui/material";

import Icon from "../Icons";
import { useLightModeState } from "../../context/themeMode";

import useStyles from "./style.js";

function SidebarItem({ title, iconName, classname }) {
  const Classes = useStyles();
  const lightMode = useLightModeState();

  const IsIcon = useMemo(() => {
    if (!iconName) {
      return "null";
    }
    return <Icon name={iconName} />;
  }, [iconName]);

  return (
    <Tooltip title={title}>
      <ListItem
        className={!lightMode ? Classes.sidebarItem : Classes.lightSidebarItem}
      >
        <Link href="" underline="none">
          <ListItemIcon
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            {IsIcon}
          </ListItemIcon>
        </Link>

        <ListItemText>{title}</ListItemText>
      </ListItem>
    </Tooltip>
  );
}

export default SidebarItem;
