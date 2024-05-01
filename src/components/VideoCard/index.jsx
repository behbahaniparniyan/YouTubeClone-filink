import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

import BasicMenu from "../BasicMenu";
import { useLightModeState } from "../../context/themeMode";

import useStyles from "./style.js";

const VideoCard = ({ video, OnClick }) => {
  const classes = useStyles();
  const lightMode = useLightModeState();

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: "3px",
        border: "none",
        backgroundColor: "#383838",
      }}
    >
      <Link to={`/video/${video.id}`}>
        <CardMedia
          image={video.image}
          alt={video.image?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent
        class={
          !lightMode ? classes.videoCardContent : classes.lightVideoCardContent
        }
      >
        <Link to={`/video/${video.id}`}>
          <Typography
            variant="subtitle1"
            textDecoration="none"
            fontWeight="bold"
            class={
              !lightMode ? classes.contentColor : classes.contentLightColor
            }
          >
            {video.title}
          </Typography>
        </Link>
        <BasicMenu
          class={!lightMode ? classes.contentColor : classes.contentLightColor}
          clickItem={OnClick}
          video={video}
        ></BasicMenu>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
