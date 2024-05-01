import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { Box, Stack } from "@mui/material";

import { recommendedVideoData } from "../../Data/recommendedVideoData";
import RecommendedVideo from "../RecommendedVideo";
import VideoDescriptions from "../VideoDescriptions";
import { videoData } from "../../Data/data";
import Comments from "../Comments";
import Player from "../Player";

import useStyles from "./style.js";

const VideoDetail = () => {
  const classes = useStyles();

  const [videos] = useState(videoData());
  const [recommendedVideos] = useState(recommendedVideoData());
  const { id } = useParams();

  const video = videos.filter((item) => item.id === id).map((item) => item.id);

  return (
    <Stack>
      <Box class={classes.containerBox}>
        <Box>
          {videos
            .filter((item) => item.id === id)
            .map((item) => (
              <Box class={classes.player} key={item.id}>
                <Player item={item} />
                <VideoDescriptions item={item} />
              </Box>
            ))}
        </Box>
        <Box marginLeft={"90px"}>
          {recommendedVideos
            .filter(
              (recommendedVideo) => recommendedVideo.parentId === video[0]
            )
            .map((item) => (
              <RecommendedVideo
                item={item}
                style={{ background: "red", color: "red" }}
                color="red"
              />
            ))}
        </Box>
      </Box>
      <Box width="50%" marginLeft={"200px"}>
        <Comments currentUserId="1" />
      </Box>
    </Stack>
  );
};
export default VideoDetail;
