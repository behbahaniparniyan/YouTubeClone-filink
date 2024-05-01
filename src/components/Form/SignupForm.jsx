import { TextField, Button, Box, Paper, Typography } from "@mui/material";

import useForm from "./UseForm";
import Icon from "../Icons/index";

const SignupForm = ({ submitForm }) => {
  const { handleChange, handleFormSubmit, values, errors } =
    useForm(submitForm);

  const emailValue = values.email;
  localStorage.setItem("email", JSON.stringify(emailValue));

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "10px",
        background: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
      }}
    >
      <Paper
        component="form"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "40vh",
          height: "70vh",
          gap: "20px",
        }}
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.email && (
          <Box>
            {" "}
            <Icon name="errorOutlineIcon" />{" "}
            <Typography style={{ color: "red" }}>{errors.email}</Typography>
          </Box>
        )}

        <TextField
          id="standard-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.password && (
          <Typography style={{ color: "red" }}>{errors.password}</Typography>
        )}

        <TextField
          id="standard-basic"
          label="Confirm Password"
          variant="outlined"
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.confirmPassword && (
          <Typography style={{ color: "red" }}>
            {errors.confirmPassword}
          </Typography>
        )}
        <Box style={{ backgroundColor: "#438A6A" }} backgroundColor="#438A6A">
          <Button
            onClick={handleFormSubmit}
            type="submit"
            variant="contained"
            color="success"
          >
            Sign up
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignupForm;
