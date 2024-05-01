import React from "react";
import ReactPlayer from "react-player";

const Player = ({ item }) => {
  return <ReactPlayer height="500px" width="880px" url={item.url} controls />;
};

export default Player;
