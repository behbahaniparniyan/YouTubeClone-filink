import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Stack, Box } from "@mui/material";

import Loader from "../Loader";
import VideoCard from "../VideoCard";
import { watch } from "../../store/watch/actions";

const Videos = ({ videos, direction }) => {
  const dispatch = useDispatch();
  const watchLater = useSelector(({ playlist }) => playlist.watchLater);

  const OnClick = (video) => {
    const watchLaterId = watchLater.find((element) => element.id === video.id);
    if (watchLaterId) return null;
    dispatch(watch({ watchLater: [video, ...watchLater] }));
  };

  if (!videos?.length) return <Loader />;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((video, id) => (
        <Box key={id}>
          {video.id && <VideoCard OnClick={OnClick} video={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
