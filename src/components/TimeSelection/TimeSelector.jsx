import React, { useState } from "react";
import TimeButtons from "./TimeButtons";

function TimeSelector({ dt, handleOpenFinalForm, setSelectedTime }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    setSelectedTime(time[index]);
  };

  const day = dt.split(",")[0];
  const month = dt.split(",")[1];
  const formattedDate = `${day}, ${month}`;

  const time = [];
  for (let hour = 9; hour <= 15; hour++) {
    if (hour === 12) {
      time.push(`12:00`);
      time.push(`12:30`);
    } else if (hour > 12) {
      time.push(`${hour - 12}:00`);
      time.push(`${hour - 12}:30`);
    } else {
      time.push(`${hour}:00`);
      time.push(`${hour}:30`);
    }
  }

  return (
    <div className="flex flex-col gap-5 p-3 pr-0 items-center w-full">
      <div className="font-medium mt-14">{formattedDate}</div>
      <div
        className="w-full flex flex-col items-center overflow-y-auto max-h-[400px]"
        style={{
          scrollbarWidth: "thin", // "auto" or "thin" for scrollbar width
          scrollbarColor: "#888888 #f0f0f0",
          msScrollbarArrowColor : "transparent"
        }}
      >
        {time.map((t, index) => (
          <TimeButtons
            key={index}
            time={t}
            isActive={activeIndex === index}
            onClick={() => handleButtonClick(index)}
            onClickNext={handleOpenFinalForm}
          />
        ))}
      </div>
    </div>
  );
}

export default TimeSelector;
