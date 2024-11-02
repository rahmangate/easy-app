import React, { useRef, useState } from "react";
import { Timesheet, TimesheetRef } from "@easyteam/ui";

const TimesheetScreen = () => {
  const [startDate, setStartDate] = useState<string | undefined>();
  const [endDate, setEndDate] = useState<string | undefined>();
  const ref = useRef<TimesheetRef>(null);

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
