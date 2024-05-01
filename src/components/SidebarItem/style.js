import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  sidebarItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "72px",
    color: "#6852BB",
    marginBottom: "5px",
    "&:hover": {
      background: "#383838",
    },
  },
  lightSidebarItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "72px",
    color: "#6852BB",
    marginBottom: "5px",
    "&:hover": {
      background: "#eee",
    },
  },
});

export default useStyles;
