import React, { useLayoutEffect, useRef } from "react";
import { Timesheet, AddButton } from "@easyteam/ui";
import { useRouter, useLocalSearchParams, useNavigation } from "expo-router";

const TimesheetAdminScreen = () => {
  const ref = useRef<any>(null);
  const router = useRouter();
  const navigation = useNavigation();
  const { employeeId } = useLocalSearchParams();

  useLayoutEffect(() => {
    if (ref.current?.adminWritePermissions) {
      // Set the header right button for adding a new shift
      navigation.setOptions({
        headerRight: () => (
          <AddButton
            onPress={() => {
              const selectedEmployeeId = ref.current?.selectedEmployeeId;
              if (selectedEmployeeId) {
                router.push({
                  pathname: "/shift-form",
                  params: { employeeId: selectedEmployeeId },
                });
              }
            }}
          />
        ),
      });

      // Reload data when screen is focused
      const unsubscribe = navigation.addListener("focus", () => {
        ref.current?.reloadData();
      });

      return unsubscribe;
    }
  }, [navigation]);

  if (!employeeId) {
    // If employeeId is missing, go back
    router.back();
    return null;
  }

  return (
    <Timesheet
      ref={ref}
      employeeId={`${employeeId}`}
      onEditPress={(date, selectedEmployeeId) => {
        router.push({
          pathname: "/shift-form",
          params: { date, employeeId: selectedEmployeeId },
        });
      }}
    />
  );
};

export default TimesheetAdminScreen;
