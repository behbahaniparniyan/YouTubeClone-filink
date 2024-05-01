import React, { useState } from "react";

import { Menu, MenuItem, Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useLightModeState } from "../../context/themeMode";

import useStyles from "./style.js";

export default function BasicMenu({ clickItem, video }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const classes = useStyles();
  const lightMode = useLightModeState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Box
          class={
            !lightMode ? classes.moreIconColor : classes.moreIconLightColor
          }
        >
          <MoreVertIcon />
        </Box>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box onClick={handleClose}>
          <MenuItem
            onClick={() => {
              clickItem(video);
            }}
          >
            save to Watch later
          </MenuItem>
        </Box>
        <MenuItem onClick={handleClose}>Share</MenuItem>
        <MenuItem onClick={handleClose}>Report</MenuItem>
      </Menu>
    </div>
  );
}
