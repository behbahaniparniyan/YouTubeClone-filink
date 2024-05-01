import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SignupForm from "../../components/Form/SignupForm";

export default function Form() {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
      {!formIsSubmitted ? (
        <SignupForm submitForm={submitForm} />
      ) : (
        navigate("/")
      )}
    </div>
  );
}
