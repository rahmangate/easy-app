import React, { useLayoutEffect, useMemo, useRef } from "react";
import { EmployeesTimesheet } from "@easyteam/ui";
import { useRouter, useLocalSearchParams, useFocusEffect } from "expo-router";

const EmployeesScreen = () => {
  const ref = useRef<any>(null);
  const router = useRouter();
  const { startDate: paramStartDate, endDate: paramEndDate } =
    useLocalSearchParams();

  const startDate = useMemo(() => paramStartDate, [paramStartDate]);
  const endDate = useMemo(() => paramEndDate, [paramEndDate]);

  useFocusEffect(() => {
    ref?.current?.reloadData();
  });

  return (
    <EmployeesTimesheet
      ref={ref}
      onEmployeeReportPress={({ employeeId, startDate, endDate }) => {
        router.push({
          pathname: "/(main)/timesheet-admin",
          params: { employeeId, startDate, endDate },
        });
      }}
      startDate={`${startDate}`}
      endDate={`${endDate}`}
    />
  );
};

export default EmployeesScreen;
