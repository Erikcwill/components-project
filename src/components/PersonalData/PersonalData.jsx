import { Button, Switch, TextField, FormControlLabel } from "@mui/material";
import { useContext, useState } from "react";
import RegisterValidations from "../../contexts/registerValidations";
import useErrors from "../../Hooks/useErrors";

export default function PersonalData({ onSubmit }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cpf, setCpf] = useState("");
  const [sales, setSales] = useState(true);
  const [news, setNews] = useState(true);
  const validations = useContext(RegisterValidations);
  const [errors, validateFields, canSend] = useErrors(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSend()) {
          onSubmit({ name, surname, cpf, sales, news });
        }
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        onBlur={validateFields}
        error={!errors.name.valid}
        helperText={errors.name.helperText}
        id="name"
        name="name"
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
        name="surname"
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
        onBlur={validateFields}
        error={!errors.cpf.valid}
        helperText={errors.cpf.helperText}
        id="cpf"
        name="cpf"
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
        Próximo
      </Button>
    </form>
  );
}
