import { Component } from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import "@fontsource/roboto";
import { Container, Typography } from "@mui/material";
import {
  validateCPF,
  validateName,
  validatePassword,
} from "./models/register";
import RegisterValidations from "./contexts/RegisterValidations";


class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center" component="h1">
          Formulário de cadastro
        </Typography>
        <RegisterValidations.Provider
          value={{
            cpf: validateCPF,
            password: validatePassword,
            name: validateName,
          }}
        >
          <RegistrationForm onSubmit={onSubmitForm} />
        </RegisterValidations.Provider>
      </Container>
    );
  }
}

function onSubmitForm(data) {
  console.log(data);
}

export default App;
