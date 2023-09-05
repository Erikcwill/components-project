function validateCPF(cpf) {
  if (cpf.length !== 11) {
    return { valid: false, helperText: "CPF deve ter 11 dígitos" };
  } else {
    return { valid: true, helperText: "" };
  }
}

function validatePassword(password) {
  if (password.length < 4 || password.length > 20) {
    return { valid: false, helperText: "Senha deve ter de 4 a 20 dígitos" };
  } else {
    return { valid: true, helperText: "" };
  }
}

function validateName(name) {
  if (name.length < 3 || name.length > 15) {
    return {
      valid: false,
      helperText: "Nome deve ter entre 3 a 15 caracteres",
    };
  } else {
    return { valid: true, helperText: "" };
  }
}

export { validateCPF, validatePassword, validateName };
