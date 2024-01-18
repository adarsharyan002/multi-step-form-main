import React, { useState } from "react";
import { useStepperContext } from "../../contexts/useStepperContext";

interface AccountProps {}

const Account: React.FC<AccountProps> = () => {
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

    // Validate Username (minimum length)
    if (userData["username"].length < 5) {
      newErrors["username"] = "Username must be at least 5 characters";
      valid = false;
    }

    // Validate Password (minimum length)
    if (userData["password"].length < 8) {
      newErrors["password"] = "Password must be at least 8 characters";
      valid = false;
    }

    // Validate Confirm Password
    if (userData["password"] !== userData["confirmPassword"]) {
      newErrors["confirmPassword"] = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <div className="flex flex-col">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Username
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            placeholder="Username"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
          {errors["username"] && (
            <div className="text-red-500 text-sm">{errors["username"]}</div>
          )}
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Password
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["password"] || ""}
            name="password"
            placeholder="Password"
            type="password"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
          {errors["password"] && (
            <div className="text-red-500 text-sm">{errors["password"]}</div>
          )}
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Confirm Password
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["confirmPassword"] || ""}
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
          {errors["confirmPassword"] && (
            <div className="text-red-500 text-sm">{errors["confirmPassword"]}</div>
          )}
        </div>
      </div>
      <button onClick={validateInputs}>Submit</button>
    </div>
  );
};

export default Account;
