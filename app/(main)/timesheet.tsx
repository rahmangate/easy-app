import React, { useRef, useState } from "react";
import { Timesheet } from "@easyteam/ui";
import { useRouter } from "expo-router";

const TimesheetScreen = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const ref = useRef(null);
  const router = useRouter();

  return (
    <Timesheet
      ref={ref}
      onDateRangeChange={(newStartDate, newEndDate) => {
        setStartDate(newStartDate);
        setEndDate(newEndDate);
      }}
      startDate={startDate}
      endDate={endDate}
    />
  );
};

export default TimesheetScreen;
