import React, { useCallback, useLayoutEffect, useMemo, useRef } from "react";
import { EmployeeListRef, EmployeesTimesheet } from "@easyteam/ui";
import { useRouter, useLocalSearchParams, useFocusEffect } from "expo-router";

const EmployeesScreen = () => {
  const ref = useRef<EmployeeListRef>(null);
  const router = useRouter();
  const { startDate: paramStartDate, endDate: paramEndDate } =
    useLocalSearchParams();

  const startDate = useMemo(() => paramStartDate as string, [paramStartDate]);
  const endDate = useMemo(() => paramEndDate as string, [paramEndDate]);

  useFocusEffect(
    useCallback(() => {
      ref?.current?.reloadData();
      return () => {};
    }, [])
  );

  return (
    <EmployeesTimesheet
      ref={ref}
      onEmployeeReportPress={({ employeeId, startDate, endDate }) => {
        router.push({
          pathname: "/(others)/timesheet-admin",
          params: { employeeId, startDate, endDate },
        });
      }}
      startDate={startDate}
      endDate={endDate}
    />
  );
};

export default EmployeesScreen;
