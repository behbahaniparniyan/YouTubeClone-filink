import { Box } from "@mui/material";

import VideoDetail from "../../components/VideoDetail";

import useStyles from "./style.js";

const VideoDetailPage = () => {
  const classes = useStyles();
  return (
    <Box>
      <VideoDetail class={classes.detailPage} />
    </Box>
  );
};
export default VideoDetailPage;
