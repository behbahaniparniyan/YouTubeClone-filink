import React from "react";

import { Box, Typography } from "@mui/material";

import LikesDislike from "../LikesDislike";
import { useLightModeState } from "../../context/themeMode";

import useStyles from "./style.js";

const VideoDescriptions = ({ item }) => {
  const classes = useStyles();
  const lightMode = useLightModeState();

  return (
    <Box class={!lightMode ? classes.descriptions : classes.lightDescriptions}>
      <Typography fontSize="24px" fontWeight="bold">
        {item.title}
      </Typography>
      <LikesDislike />
    </Box>
  );
};

export default VideoDescriptions;
