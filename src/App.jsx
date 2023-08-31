import { Component } from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import "@fontsource/roboto";
import { Container, Typography } from "@mui/material";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center" component="h1">
          Formulário de cadastro
        </Typography>
        <RegistrationForm onSubmit={onSubmitForm} validateCPF={validateCPF} />
      </Container>
    );
  }
}

function onSubmitForm(data) {
  console.log(data);
}

function validateCPF(cpf){
  if(cpf.length !== 11){
    return {valid:false, helperText:"CPF deve ter 11 dígitos"}
  }else{
    return {valid:true, helperText:""}
  }
}

export default App;
