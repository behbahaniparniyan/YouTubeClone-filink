import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import { useLightModeState } from "../../context/themeMode";
import {watch} from "../../store/watch/actions";

import useStyles from "./style";

const Playlist = () => {
  const classes = useStyles();
  const lightMode = useLightModeState();

  const watchLater = useSelector(({ playlist }) => playlist.watchLater);
  const dispatch = useDispatch();
  
  const deleteHandler = (videoId) => {
    const deleteItem =watchLater.filter(({ id }) => id !== videoId);
    dispatch(watch({watchLater: deleteItem}));
  };

  // if(watchLater.length === 1) {return dispatch(watch({watchLater: "d"}))}
  // console.log(watchLater.length);

  return (
    <Box class={classes.playlist}>
      {watchLater.map((video) => (
        <Card
          key={video.id}
          class={!lightMode ? classes.card : classes.lightCard}
        >
          <Box class={classes.container}>
            <Link to={`/video/${video.id}`}>
              <CardMedia
                component="img"
                class={classes.cardMedia}
                image={video.image}
                alt={video.image?.title}
              />
            </Link>
            <Link to={`/video/${video.id}`}>
              <CardContent class={classes.cardContent}>
                <Box
                  class={
                    !lightMode ? classes.description : classes.lightDescription
                  }
                >
                  <Typography
                    variant="subtitle1"
                    fontSize="18px"
                    fontWeight="bold"
                    textDecoration="none"
                  >
                    {video.title}
                  </Typography>
                </Box>
              </CardContent>
            </Link>
          </Box>
          <Box onClick={()=>deleteHandler(video.id)}>
            <ClearIcon />
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default Playlist;
