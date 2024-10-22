import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { Box, TextField } from "@mui/material";
import dayjs from "dayjs";

function DatePicker({ onDateChange }) {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = date.format("YYYY-MM-DD");
      onDateChange(formattedDate); // Appel de la fonction passée depuis SearchPage
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
          defaultValue={dayjs("2022-04-17")}
          label="Select Date"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
}

export default DatePicker;
