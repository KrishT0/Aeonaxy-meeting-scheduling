import React, { useState } from "react";

function TimeButtons({ time }) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const buttonClickhandler = () => {
    setButtonClicked((prev) => !prev);
  };
  return (
    <div className="w-3/4">
      {!buttonClicked ? (
        <button
          className="border border-blue-500 text-blue-500 rounded-sm p-3 w-full text-center mt-3"
          onClick={buttonClickhandler}
        >
          {time}
        </button>
      ) : (
        <div className="flex justify-between">
          <button>{time}</button>
          <button>Next</button>
        </div>
      )}
    </div>
  );
}
export default TimeButtons;
