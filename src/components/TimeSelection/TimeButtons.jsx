import React from "react";

function TimeButtons({ time, isActive, onClick, onClickNext }) {
  return (
    <div className="w-3/4">
      {!isActive ? (
        <button
          className="border border-blue-500 text-blue-500 rounded-md p-3 w-full text-center mt-3"
          onClick={onClick}
        >
          {time}
        </button>
      ) : (
        <div className="flex justify-between">
          <button className="bg-[#666666] text-white font-semibold rounded-md p-3 w-[48%] text-center mt-3">
            {time}
          </button>
          <button
            className="bg-blue-500 text-white font-semibold w-[48%] rounded-md p-3 text-center mt-3"
            onClick={onClickNext}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default TimeButtons;
