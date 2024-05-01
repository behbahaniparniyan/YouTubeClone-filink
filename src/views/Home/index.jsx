import Main from "../../components/Main";

import useStyles from "./style.js";

const Home = () => {
  const classes = useStyles();
  return (
    <div class={classes.home}>
      <Main />
    </div>
  );
};

export default Home;
