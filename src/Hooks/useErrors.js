import { useState } from "react";

export default function useErrors(validations) {
  const initialState = createInitialState(validations);
  const [errors, setErrors] = useState(initialState);

  function validateFields(event) {
    const { name, value } = event.target;
    const newState = { ...errors };
    newState[name] = validations[name](value);
    setErrors(newState);
  }

  function canSend() {
    for (let field in errors) {
      if (!errors[field].valid) {
        return false;
      }
    }
    return true;
  }

  return [errors, validateFields, canSend];
}

function createInitialState(validations) {
  const initialState = {};
  for (let attb in validations)
    initialState[attb] = { valid: true, helperText: "" };

  return initialState;
}
