import { useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import Videos from "../Videos";
import { videoData } from "../../Data/data";

const SearchFeed = () => {
  const [videos] = useState(videoData());
  const { searchTerm } = useParams();

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm)
  );
  console.log(filteredVideos);

  return (
    <Box p={2} minHeight="95vh">
      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={filteredVideos} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
