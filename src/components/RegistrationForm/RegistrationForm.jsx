import { Button, Switch, TextField, FormControlLabel } from "@mui/material";
import { useState } from "react";

export default function RegistrationForm({ onSubmit, validateCPF }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cpf, setCpf] = useState("");
  const [sales, setSales] = useState(true);
  const [news, setNews] = useState(true);
  const [errors, setErrors] = useState({cpf:{valid:true, helperText:""}});
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ name, surname, cpf, sales, news });
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        id="name"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={surname}
        onChange={(event) => {
          setSurname(event.target.value);
        }}
        id="surname"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}

        onBlur={() => {
          const isValid = validateCPF(cpf)
          setErrors({cpf:isValid})
        }}
        error={!errors.cpf.valid}
        helperText={errors.cpf.helperText}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={sales}
            onChange={(event) => {
              setSales(event.target.checked);
            }}
            name="deal"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={news}
            onChange={(event) => {
              setNews(event.target.checked);
            }}
            name="news"
          />
        }
      />

      <Button type="submit" variant="contained">
        Cadastrar
      </Button>
    </form>
  );
}
