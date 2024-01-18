import React, { useContext } from "react";
import { StepperContext } from "./StepperContext"; // Update this with the correct file path

interface StepperContextProps {
  userData: string;
  setUserData: React.Dispatch<React.SetStateAction<string>>;
}

export const useStepperContext = (): StepperContextProps => {
  const { userData, setUserData } = useContext(StepperContext);

  return { userData, setUserData };
};
