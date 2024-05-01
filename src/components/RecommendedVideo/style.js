import makeStyles from "@mui/styles/makeStyles";
const useStyles = makeStyles({
  recommendationCard: {
    objectFit: "container",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#383838",
    color: "#fff",
    marginBottom: "5px",
    "&:hover": {
      backgroundColor: "gray",
    },
  },
  lightRecommendationCard: {
    objectFit: "container",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#eee",
    color: "#212121",
    marginBottom: "5px",
    fontSize: "18px",
    "&:hover": {
      backgroundColor: "#e1e1e1",
    },
  },

  recommendationImg: {
    width: "250px",
    height: "130px",
  },
});

export default useStyles;
