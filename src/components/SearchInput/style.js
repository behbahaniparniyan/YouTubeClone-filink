import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchInput: {
    width: "525px",
    height: "40px",
    padding: "4px",
    border: "1px solid #438A6A",
    color: "#111111",
    fontSize: "18px",
    lineHeight: "24px",
    "&:focus": {
      border: "none",
    },
  },
  searchIcon: {
    backgroundColor: "#438A6A",
    width: "65px",
    height: "40px",
    color: "#fff",
    border: "1px solid #438A6A",
    alignSelf: "center",
    justifySelf: "center",
    pointerEvents: "none",
  },
}));

export default useStyles;
