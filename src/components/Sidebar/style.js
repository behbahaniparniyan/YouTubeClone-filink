import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  sidebar: {
    display: "flex",
    flexDirection: "column",
    width: "72px",
    background: "#212121",
    height: "100vh",
    position: "fixed",
  },

  lightSidebar: {
    display: "flex",
    flexDirection: "column",
    width: "72px",
    background: "#FCFCFC",
    height: "100vh",
    position: "fixed",
  },
});

export default useStyles;
