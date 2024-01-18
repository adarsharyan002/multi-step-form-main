import  { useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { UseContextProvider } from "./contexts/StepperContext";



function App(): JSX.Element {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const steps: string[] = [
    "Account Information",
    "Personal Details",
    "Payment",
    "Complete",
  ];

  const displayStep = (step: number): JSX.Element | null => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Payment />;
      case 4:
        return <Final />;
      default:
        return null;
    }
  };

  const handleClick = (direction: "next" | "prev"): void => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default App;
