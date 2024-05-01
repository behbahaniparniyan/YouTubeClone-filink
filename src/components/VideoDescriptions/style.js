import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  descriptions: {
    color: "#fff",
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "10px",
  },

  lightDescriptions: {
    color: "#212121",
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "10px",
  },

  reacttions: {
    display: "flex",
    width: "140px",
    justifyContent: "space-between",
    paddingRight: "5px",
    height: "20px",
    cursor: "pointer",
  },
});

export default useStyles;
