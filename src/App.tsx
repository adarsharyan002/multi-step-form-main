import  {  useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";

import Personal from "./components/steps/Personal";
import Address from "./components/steps/Address";
import Account from "./components/steps/Account";
import Complete from "./components/steps/Complete";
import { useStepperContext } from "./contexts/useStepperContext";



function App(): JSX.Element {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const { inputValidation,setInputValidation} = useStepperContext();



  

  const steps: string[] = [
    "Personal Information",
    "Address Information",
    "Account Setup",
    "Complete",
  ];

  const displayStep = (step: number): JSX.Element | null => {
    switch (step) {
      case 1:
        return <Personal />;
      case 2:
        return <Address />;
      case 3:
        return <Account/>;
      case 4:
        return <Complete/>
      
      default:
        return null;
    }
  };

  const handleClick = (direction: "next" | "prev" | undefined): void => {
    let newStep = currentStep;
  
    if (direction === "next" && inputValidation) {
      // Proceed only if it's a forward direction and inputValidation is true
      newStep++;
    } else if (direction === "prev") {
      // For backward direction, always allow stepping back without validation
      newStep--;
    } else {
      // For any other cases, such as "next" without validation, show an alert
      alert('Validate the inputs');
      return; // Stop the function here if validation fails
    }
  
    // Check if steps are within bounds
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
    setInputValidation(false)
  };
  

  return (
    
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          {displayStep(currentStep)}
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
