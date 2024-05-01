import React, { useState } from "react";

import { Box } from "@mui/material";

import { videoData } from "../../Data/data";
import Videos from "../Videos";

export default function Main() {
  const [videos] = useState(videoData());

  return (
    <Box>
      <Videos videos={videos} />
    </Box>
  );
}
