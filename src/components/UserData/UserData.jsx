import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import RegisterValidations from "../../contexts/RegisterValidations";
import useErrors from "../../Hooks/useErrors";

export default function UserData({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validations = useContext(RegisterValidations);
  const [errors, validateFields, canSend] = useErrors(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSend()) {
          onSubmit({ email, password });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        name="email"
        label="E-mail"
        type="email"
        required
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        onBlur={validateFields}
        error={!errors.password.valid}
        helperText={errors.password.helperText}
        id="password"
        name="password"
        label="Senha"
        type="password"
        required
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained">
        Cadastrar{" "}
      </Button>
    </form>
  );
}
