import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { format } from "date-fns";

export default function CustomCalendar({ dt }) {
  const [value, setValue] = useState();

  useEffect(() => {
    const formatteddate = value ? format(value.$d, "EEEE, MMMM dd, yyyy") : "";
    dt(formatteddate);
  }, [value, dt]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        date={value}
        disableHighlightToday={true}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        sx={{
          margin: 0,
          width: "100%",
        }}
      />
    </LocalizationProvider>
  );
}
