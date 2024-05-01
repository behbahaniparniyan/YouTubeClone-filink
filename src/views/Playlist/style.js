import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  playlist: {
    width: "calc(100% - 72px)",
    minHeight: "calc(100% - 56px)",
    marginLeft: "72px",
    marginTop: "30px",
    paddingLeft: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#0F0F0F",
    width: "90%",
    color: "#FFF",
    "&:hover": {
      backgroundColor: "#272727",
    },
    cursor: "pointer",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
  },

  lightCard: {
    backgroundColor: "#eee",
    width: "90%",
    "&:hover": {
      backgroundColor: "#e1e1e1",
    },
    cursor: "pointer",
    borderBottom: "1px solid #ffffff",
    marginBottom: "10px",
    height: "138px",
    display: "flex",
    justifyContent: "space-between",
  },

  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  cardMedia: {
    width: "250px",
    objectFit: "container",
    backgroundRepeat: "no-repeat",
  },

  cardContent: {
    justifySelf: "center",
    alignItems: "center",
    fontSize: "444px",
    paddingLeft: "20px",
  },

  lightDescription: {
    color: "#212121",
  },
  description: {
    color: "#FFF",
  },
});

export default useStyles;
