import React from "react";
import TimeButtons from "./TimeButtons";

function TimeSelector({ dt }) {
  const time = [];
  for (let hour = 9; hour <= 15; hour++) {
    if (hour === 12) {
      time.push(`12:00 PM`);
      time.push(`12:30 PM`);
    } else if (hour > 12) {
      time.push(`${hour - 12}:00 PM`);
      time.push(`${hour - 12}:30 PM`);
    } else {
      time.push(`${hour}:00 AM`);
      time.push(`${hour}:30 AM`);
    }
  }
  console.log(dt);

  return (
    <div className="flex flex-col gap-5 p-3 items-center w-full ">
      <div>{dt}</div>
      <div className="w-full ">
        {time.map((t, index) => (
          <TimeButtons time={t} key={index} />
        ))}
      </div>
    </div>
  );
}

export default TimeSelector;
