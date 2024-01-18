import React, { createContext,  useState, ReactNode } from "react";

interface StepperContextProps {
  userData: string;
  setUserData: React.Dispatch<React.SetStateAction<string>>;
}

export const StepperContext = createContext<StepperContextProps>({
  userData: "",
  setUserData: () => {},
});

interface StepperContextProviderProps {
  children: ReactNode;
}

export const StepperContextProvider: React.FC<StepperContextProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<string>("");

  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
};
