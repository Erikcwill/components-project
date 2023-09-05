import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import DeliveryData from "../DeliveryData/DeliveryData";
import PersonalData from "../PersonalData/PersonalData";
import UserData from "../UserData/UserData";
import { useEffect, useState } from "react";

export default function RegistrationForm({ onSubmit }) {
  const [actualStage, setActualStage] = useState(0);
  const [collectedData, setData] = useState({});
  useEffect(() => {
    if (actualStage === forms.length - 1) {
      onSubmit(collectedData);
    }
  });

  const forms = [
    <UserData key="userData" onSubmit={collectData} />,
    <PersonalData key="personalData" onSubmit={collectData} />,
    <DeliveryData key="deliveryData" onSubmit={collectData} />,
    <Typography key="thankyou" variant="h5">
      {" "}
      Obrigado pelo cadastro!{" "}
    </Typography>,
  ];

  function collectData(data) {
    setData({ ...collectedData, ...data });
    next();
  }

  function next() {
    setActualStage(actualStage + 1);
  }

  return (
    <>
      <Stepper activeStep={actualStage}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados Pessoais</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>

      {forms[actualStage]}
    </>
  );
}
