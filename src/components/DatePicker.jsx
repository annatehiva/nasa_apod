import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { Box, TextField } from "@mui/material";
import dayjs from "dayjs";

function DatePicker({ onDateChange }) {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const minDate = dayjs("1995-06-16");
  const maxDate = dayjs();
  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = date.format("YYYY-MM-DD");
      onDateChange(formattedDate);
    }
  };

  return (
    <Box
      sx={{
        marginTop: "5rem",
        marginBottom: "3rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          defaultValue={dayjs()}
          label="Select Date"
          minDate={minDate}
          maxDate={maxDate}
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
}

export default DatePicker;
