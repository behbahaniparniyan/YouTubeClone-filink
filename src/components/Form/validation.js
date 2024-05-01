const validation = (values) => {
  let errors = {};

  // if (!values.email) {
  //   errors.email = "Email is required !";
  // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //   errors.email = "The email is invalid";
  // }

  if (!values.password) {
    errors.password = " Password is required !";
  } else if (values.password.length < 5) {
    errors.password = "The password is invalid !";
  }

  //   if (!values.confirmPassword) {
  //     errors.confirmPassword = "Confirm Password is required !";
  //   } else if (values.confirmPassword !== values.password) {
  //     errors.confirmPassword = "Password and Confirm Password does not match !";
  //   }

  return errors;
};
export default validation;
