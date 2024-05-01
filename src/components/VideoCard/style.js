import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  videoCardContent: {
    backgroundColor: "#212121",
    height: "106px",
    display: "flex",
    justifyContent: "space-between",
    padding: "5px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#303134",
    },
  },

  lightVideoCardContent: {
    backgroundColor: "#eee",
    height: "106px",
    display: "flex",
    justifyContent: "space-between",
    padding: "5px",
    color: "#540303",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e1e1e1",
    },
  },

  contentColor: {
    color: "#FFF",
    fontSize: "16px",
  },

  contentLightColor: {
    color: "#7E7E7E",
    fontSize: "16px",
  },
});

export default useStyles;
