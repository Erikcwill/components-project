import React from "react";

const RegisterValidations = React.createContext({
  cpf: noValidation,
  password: noValidation,
  name: noValidation,
});

function noValidation() {
  return { valid: true, helperText: "" };
}

export default RegisterValidations;
