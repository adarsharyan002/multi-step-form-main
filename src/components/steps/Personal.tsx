import React, { useState } from "react";
import { useStepperContext } from "../../contexts/useStepperContext";

interface PersonalProps {}

const Personal: React.FC<PersonalProps> = () => {
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

    // Validate Full Name (minimum length)
    if (userData["fullName"].length < 3) {
      newErrors["fullName"] = "Full Name must be at least 3 characters";
      valid = false;
    }

    // Validate Email Address
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(userData["email"])) {
      newErrors["email"] = "Invalid Email Address";
      valid = false;
    }

    // Validate Date of Birth (optional: you can add more specific validation)
    if (!userData["dob"]) {
      newErrors["dob"] = "Date of Birth is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <div className="flex flex-col">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Full Name
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["fullName"] || ""}
            name="fullName"
            placeholder="Full Name"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        {errors["fullName"] && (
          <div className="text-red-500 text-sm">{errors["fullName"]}</div>
        )}
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Email Address
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["email"] || ""}
            name="email"
            placeholder="Email Address"
            type="email"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        {errors["email"] && (
          <div className="text-red-500 text-sm">{errors["email"]}</div>
        )}
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Date of Birth
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["dob"] || ""}
            name="dob"
            placeholder="Date of Birth"
            type="date"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        {errors["dob"] && (
          <div className="text-red-500 text-sm">{errors["dob"]}</div>
        )}
      </div>
      <button onClick={validateInputs}>Submit</button>
    </div>
  );
};

export default Personal;
