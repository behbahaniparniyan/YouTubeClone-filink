import React from "react";
import { Link } from "react-router-dom";

import { Card, CardContent, CardMedia, Box } from "@mui/material";
import { useLightModeState } from "../../context/themeMode";

import useStyles from "./style.js";

const RecommendedVideo = ({ item }) => {
  const classes = useStyles();
  const lightMode = useLightModeState();

  return (
    <Link to={`/video/${item.id}`}>
      <Card
        class={
          !lightMode
            ? classes.recommendationCard
            : classes.lightRecommendationCard
        }
      >
        <Box>
          <CardMedia
            image={item.image}
            alt={item.image?.title}
            class={classes.recommendationImg}
          />
          <CardContent>{item.title}</CardContent>
        </Box>
      </Card>
    </Link>
  );
};

export default RecommendedVideo;
