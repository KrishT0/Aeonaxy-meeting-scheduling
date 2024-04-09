import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";

function Form({ onClickOpenFinalForm, setName }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isName, setIsName] = useState("");
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [optionError, setOptionError] = useState(false);
  const [optionArrayError, setOptionArrayError] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionArrayChange = (option) => {
    setSelectedOptions((prevOptions) => [...prevOptions, option]);
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setIsName(name);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const validateFields = () => {
    let nameError = false;
    let emailError = false;
    let optionError = false;
    let optionArrayError = false;

    if (!isName) {
      nameError = true;
    }

    if (!email) {
      emailError = true;
    }

    if (!selectedOption) {
      optionError = true;
    }

    if (selectedOptions.length === 0) {
      optionArrayError = true;
    }

    setError(nameError);
    setEmailError(emailError);
    setOptionError(optionError);
    setOptionArrayError(optionArrayError);

    return !nameError && !emailError && !optionError && !optionArrayError;
  };

  const onClickShcedulehandler = () => {
    if (validateFields()) {
      setName(isName);
      onClickOpenFinalForm();
    }
  };

  const optionArray = [
    "🗻 leadership",
    "🦉 Consolting",
    "🌞 Prouct Manager",
    "🎨 Design",
    "💻 Engineering",
    "🎧 Sales",
    "💣 Marketing",
    "💎 Human Resources",
    "📚 Education",
    "❓ Something else",
  ];

  return (
    <div className="p-5 pb-0 w-4/5 max-h-full">
      <h1 className="text-lg font-bold">Enter Details</h1>
      <div className="flex flex-col gap-3 mt-2">
        <label htmlFor="name" className="font-extrabold text-xs">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={isName}
          className="border-2 border-gray-300 rounded-md p-2"
          onChange={handleNameChange}
        />
        {error && <p className="text-red-500 text-xs">Please enter name</p>}
        <label htmlFor="email" className="font-extrabold text-xs">
          Email *
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className="border-2 border-gray-300 rounded-md p-2"
        />

        {emailError && (
          <p className="text-red-500 text-xs">Please enter email</p>
        )}
        <button className="border border-blue-600 rounded-2xl p-2 px-4 text-xs font-medium w-fit text-blue-600">
          Add guest
        </button>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <h2 className="text-sm font-extrabold">I want Fibery to work for: *</h2>
        {optionError && (
          <p className="text-red-500 text-xs">Please select an option</p>
        )}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="option1"
            name="options"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={() => handleOptionChange("option1")}
            className="h-4 w-4"
          />
          <label htmlFor="option1">🥕 Myself</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="option2"
            name="options"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={() => handleOptionChange("option2")}
            className="h-4 w-4"
          />
          <label htmlFor="option2">👭 {"< "}10 people</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="option3"
            name="options"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={() => handleOptionChange("option3")}
            className="h-4 w-4"
          />
          <label htmlFor="option3">🦄 10-50 people</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="option4"
            name="options"
            value="option4"
            checked={selectedOption === "option4"}
            onChange={() => handleOptionChange("option4")}
            className="h-4 w-4 bg-white text-blue-500"
          />
          <label htmlFor="option4">🦅 50+ people</label>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-5">
        <h2 className="text-sm font-extrabold">You are more about *</h2>
        {optionArrayError && (
          <p className="text-red-500 text-xs">Please select an option</p>
        )}
        {optionArray.map((option, index) => {
          return (
            <Checkbox
              key={index}
              label={option}
              onChange={() => handleOptionArrayChange(option)}
            />
          );
        })}
      </div>

      <div className="mt-6">
        <h2 className="text-sm font-bold">
          Please share anything that help prepare for our meeting
        </h2>
        <textarea
          style={{ resize: "vertical" }}
          className="border-2 border-gray-300 rounded-md mt-2 p-2 w-full"
        />
        <h2 className="text-sm font-bold mt-3">
          Please share with us the name of your Fibery workspace (if any)
        </h2>
        <textarea
          style={{ resize: "vertical" }}
          className="border-2 border-gray-300 rounded-md mt-2 p-2 w-full"
        />

        <button
          className="text-white p-2 px-4 text-sm font-medium rounded-3xl  mt-5 mb-5 bg-blue-500"
          onClick={() => {
            onClickShcedulehandler();
          }}
        >
          Schedule Event
        </button>
      </div>
    </div>
  );
}

export default Form;
