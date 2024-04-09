import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState, useEffect } from "react";
import { format } from "date-fns";

function ServerDay(props) {
  const { day, outsideCurrentMonth, highlightedDays, ...other } = props;
  const isClicked = props["aria-selected"];
  const isDisabled = dayjs().diff(day, "day") > 0;
  const isHighlighted =
    highlightedDays.includes(day.format("YYYY-MM-DD")) &&
    day.month() === dayjs().month();

  return (
    <PickersDay
      {...other}
      style={{
        color: isClicked
          ? "#fff"
          : isDisabled
            ? "#ccc"
            : isHighlighted
              ? "#000"
              : "",
        backgroundColor: isClicked ? "#03DEB6" : isHighlighted ? "#03DEB6" : "",
        cursor: isDisabled ? "not-allowed" : "pointer",
      }}
      outsideCurrentMonth={outsideCurrentMonth}
      day={day}
    />
  );
}

export default function Calendar({ dt }) {
  const [value, setValue] = useState(dayjs());
  const today = dayjs();
  const futureDates = [0, 1, 2, 3, 4].map((daysToAdd) =>
    today.add(daysToAdd, "day").format("YYYY-MM-DD")
  );
  //eslint-disable-next-line
  const [highlightedDays, setHighlightedDays] = useState(futureDates);

  useEffect(() => {
    const formattedDate = value ? format(value.$d, "EEEE, MMMM dd, yyyy") : "";
    dt(formattedDate);
  }, [value, dt]);

  const disablePastDates = (day) => {
    return !highlightedDays.includes(day.format("YYYY-MM-DD"));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        disableHighlightToday
        onChange={(newValue) => setValue(newValue)}
        renderDay={(day, selectedDates, DayComponentProps) => {
          return (
            <ServerDay
              day={day}
              highlightedDays={highlightedDays}
              {...DayComponentProps}
            />
          );
        }}
        shouldDisableDate={disablePastDates}
        value={value}
      />
    </LocalizationProvider>
  );
}
