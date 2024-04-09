import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { useState, useEffect } from "react";
import { format } from "date-fns";

//eslint-disable-next-line
const initialValue = dayjs("2022-04-17");

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;
  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0;
  const isClicked = props["aria-selected"];

  return (
    <PickersDay
      {...other}
      style={{
        color: isClicked ? "#fff" : isSelected ? "#1976d2" : "",
        backgroundColor: isClicked ? "#1976d2" : isSelected ? "#eff5ff" : "",
      }}
      outsideCurrentMonth={outsideCurrentMonth}
      day={day}
    />
  );
}

export default function Calendar({ dt }) {
  //eslint-disable-next-line
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 3, 4]);
  const [value, setValue] = useState();

  useEffect(() => {
    const formatteddate = value ? format(value.$d, "EEEE, MMMM dd, yyyy") : "";
    dt(formatteddate);
  }, [value, dt]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        disableHighlightToday={true}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        sx={{
          margin: 0,
          width: "100%",
        }}
        date={value}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          },
        }}
      />
    </LocalizationProvider>
  );
}
