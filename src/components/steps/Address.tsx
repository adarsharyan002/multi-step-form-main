import React, { useState } from "react";
import { useStepperContext } from "../../contexts/useStepperContext";

interface AddressProps {}

const Address: React.FC<AddressProps> = () => {
  const { userData, setUserData } = useStepperContext();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    // Clear the error message when the user starts typing
    setErrors({ ...errors, [name]: "" });
   
  };

  const validateInputs = () => {
    let valid = true;
    const newErrors: { [key: string]: string } = {};

    // Validate Street Address (minimum length)
    if (userData["streetAddress"].length < 5) {
      newErrors["streetAddress"] = "Street Address must be at least 5 characters";
      valid = false;
    }

    // Validate City (minimum length)
    if (userData["city"].length < 3) {
      newErrors["city"] = "City must be at least 3 characters";
      valid = false;
    }

    // Validate State (non-empty)
    if (!userData["state"]) {
      newErrors["state"] = "State is required";
      valid = false;
    }

    // Validate Zip Code (numeric)
    const zipCodeRegex = /^\d+$/;
    if (!zipCodeRegex.test(userData["zipCode"])) {
      newErrors["zipCode"] = "Zip Code must be numeric";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Street Address
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["streetAddress"] || ""}
            name="streetAddress"
            placeholder="Street Address"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
          {errors["streetAddress"] && (
            <div className="text-red-500 text-sm">{errors["streetAddress"]}</div>
          )}
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          City
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["city"] || ""}
            name="city"
            placeholder="City"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
          {errors["city"] && (
            <div className="text-red-500 text-sm">{errors["city"]}</div>
          )}
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          State
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          {/* Replace the following select input with your state dropdown component */}
          {/* <select
            onChange={handleChange}
            value={userData["state"] || ""}
            name="state"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          >
            <option value="">Select State</option>
            {/* Add your state options here */}
          {/* </select> */}
          {/* Example: */}
          <input
            onChange={handleChange}
            value={userData["state"] || ""}
            name="state"
            placeholder="State"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
          {errors["state"] && (
            <div className="text-red-500 text-sm">{errors["state"]}</div>
          )}
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Zip Code
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["zipCode"] || ""}
            name="zipCode"
            placeholder="Zip Code"
            type="text"  
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
          {errors["zipCode"] && (
            <div className="text-red-500 text-sm">{errors["zipCode"]}</div>
          )}
        </div>
      </div>
      <button onClick={validateInputs}>Submit</button>
    </div>
  );
};

export default Address;
