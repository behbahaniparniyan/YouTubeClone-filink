import React, { useState } from "react";

import { Box, Typography } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { useLightModeState } from "../../context/themeMode";

import useStyles from "./style.js";

const LikesDislike = () => {
  const classes = useStyles();
  const lightMode = useLightModeState();

  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [likeActive, setLikeActive] = useState(false);
  localStorage.setItem("likeCount", JSON.stringify(likeCount));
  const likeValue = JSON.parse(localStorage.getItem("likeCount"));

  const handleLikeClick = () => {
    setLike(!like);
    setDisLike();
    setLikeActive(!likeActive);
    if (likeActive) {
      if (likeCount > 0) {
        return setLikeCount(likeCount - 1);
      }
    } else {
      setLikeCount(likeCount + 1);
    }
  };

  const handleDisLikeClick = () => {
    setDisLike(!disLike);
    setLike();
    if (likeCount > 0) {
      return setLikeCount(likeCount - 1);
    }
    return null;
  };

  return (
    <Box class={!lightMode ? classes.reacttions : classes.lightReactions}>
      <Box onClick={handleLikeClick} display="flex">
        {like ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
        <Typography fontWeight="bold">{likeValue}</Typography>
      </Box>
      <Box onClick={handleDisLikeClick} display="flex">
        {disLike ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />}
        <Typography fontWeight="bold">DISLIKE</Typography>
      </Box>
    </Box>
  );
};
export default LikesDislike;
