import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface StepperContextProps {
  userData: { [key: string]: string | number};
  setUserData: Dispatch<SetStateAction<{ [key: string]: string | number}>>;
  inputValidation:boolean;
    setInputValidation:React.Dispatch<React.SetStateAction<boolean>>;
}

export const StepperContext = createContext<StepperContextProps>({
  userData: {},
  setUserData: () => {},
  inputValidation:false,
  setInputValidation:() => {}
});

interface StepperContextProviderProps {
  children: ReactNode;
}

export const StepperContextProvider: React.FC<StepperContextProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<{ [key: string]: string | number }>({});
  const [inputValidation,setInputValidation]=useState<boolean>(false)

  console.log(inputValidation)


  return (
    <StepperContext.Provider value={{ userData, setUserData,inputValidation,setInputValidation }}>
      {children}
    </StepperContext.Provider>
  );
};
