import React, { useLayoutEffect, useRef, useCallback } from "react";
import { Timesheet, AddButton } from "@easyteam/ui";
import { useRouter, useLocalSearchParams, useNavigation } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";

const TimesheetAdminScreen = () => {
  const ref = useRef<any>(null);
  const router = useRouter();
  const navigation = useNavigation();
  const { employeeId } = useLocalSearchParams();

  const handleAddPress = useCallback(() => {
    const selectedEmployeeId = ref.current?.selectedEmployeeId;

    if (selectedEmployeeId) {
      router.push({
        pathname: "/shift-form",
        params: { employeeId: selectedEmployeeId },
      });
    }
  }, [router, ref]);

  useLayoutEffect(() => {
    if (!ref?.current) return;
    if (ref?.current?.adminWritePermissions) {
      navigation.setOptions({
        headerRight: () => <AddButton onPress={handleAddPress} />,
      });
    }
  }, [navigation, ref]);

  useFocusEffect(
    useCallback(() => {
      if (ref.current) {
        ref.current.reloadData();
      }
    }, [])
  );

  if (!employeeId) {
    router.back();
    return null;
  }

  return (
    <Timesheet
      ref={ref}
      employeeId={employeeId ? `${employeeId}` : undefined}
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
