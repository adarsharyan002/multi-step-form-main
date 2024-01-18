import React, { createContext, useContext, useState, ReactNode } from "react";

interface StepperContextProps {
  userData: string;
  setUserData: React.Dispatch<React.SetStateAction<string>>;
}

const StepperContext = createContext<StepperContextProps>({
  userData: "",
  setUserData: () => {},
});

interface UseContextProviderProps {
  children: ReactNode;
}

export function StepperContextProvider({ children }: UseContextProviderProps): JSX.Element {
  const [userData, setUserData] = useState<string>("");

  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext(): StepperContextProps {
  const { userData, setUserData } = useContext(StepperContext);

  return { userData, setUserData };
}
