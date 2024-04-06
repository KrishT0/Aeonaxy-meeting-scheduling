import React, { useState } from "react";
import Checkbox from "./Checkbox";

function Form({ onClickOpenFinalForm }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
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
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <label htmlFor="email" className="font-extrabold text-xs">
          Email *
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="border-2 border-gray-300 rounded-md p-2"
        />

        <button className="border border-blue-600 rounded-2xl p-2 px-4 text-xs font-medium w-fit text-blue-600">
          Add guest
        </button>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <h2 className="text-sm font-extrabold">I want Fibery to work for: *</h2>
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
        {optionArray.map((option, index) => {
          return <Checkbox key={index} label={option} />;
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
          className="text-white p-2 text-sm font-medium rounded-3xl  mt-5 mb-5 bg-blue-600"
          onClick={onClickOpenFinalForm}
        >
          Schedule Event
        </button>
      </div>
    </div>
  );
}

export default Form;
