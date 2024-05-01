import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#202020",

    width: "100%",
    height: "56px",
    position: "sticky",
    top: "0",
    color: "#fff",
    padding: "0 25px",
  },
  lightNavbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FCFCFC",
    width: "100%",
    height: "56px",
    position: "sticky",
    top: "0",
    color: "#fff",
    padding: "0 25px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "150px",
    color: "#6852BB",
  },

  loginContainer: {
    display: "flex",
    width: "70px",
    paddingRight: "10px",
    color: "#fff",
    "&:hover": {
      color: "gray",
    },
  },
  lightLoginContainer: {
    display: "flex",
    width: "70px",
    paddingRight: "10px",
    color: "#212121",
    "&:hover": {
      color: "gray",
    },
  },

  rightContainer: {
    display: "flex",
    width: "110px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lightRightContainer: {
    display: "flex",
    width: "120px",
    justifyContent: "space-between",
    color: "#111111",
  },
  NotificationsIconColor: {
    color: "#FFF",
  },
  NotificationsIconLightColor: {
    color: "#212121",
  },
}));

export default useStyles;
