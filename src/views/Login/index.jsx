import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "../../components/Form/LoginForm";

export default function Form() {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
      {!formIsSubmitted ? <LoginForm submitForm={submitForm} /> : navigate("/")}
    </div>
  );
}
