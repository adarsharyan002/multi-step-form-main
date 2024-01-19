import  { Dispatch, SetStateAction, useContext } from "react";
import { StepperContext } from "./StepperContext"; // Update this with the correct file path

interface StepperContextProps {
    userData: { [key: string]: string | number};
    setUserData: Dispatch<SetStateAction<{ [key: string]: string | number}>>;
    inputValidation:boolean;
    setInputValidation:React.Dispatch<React.SetStateAction<boolean>>
  }

export const useStepperContext = (): StepperContextProps => {
  const { userData, setUserData,inputValidation,setInputValidation } = useContext(StepperContext);

  return { userData, setUserData ,inputValidation,setInputValidation};
};
