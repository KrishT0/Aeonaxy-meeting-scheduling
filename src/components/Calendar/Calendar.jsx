import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.css";

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date("2024-03-26"));

  const isDateActive = (date) => {
    return date >= new Date("2024-03-26");
  };

  const tileClassName = ({ date }) => {
    return isDateActive(date) ? "active-date" : null;
  };

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <div>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={tileClassName}
        tileContent={({ date }) => {
          return isDateActive(date) ? "." : null;
        }}
        className="no-border full-width"
      />
    </div>
  );
};

export default CustomCalendar;
