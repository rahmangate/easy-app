import React, { useEffect, useLayoutEffect, useRef } from "react";
import { ShiftForm } from "@easyteam/ui";
import { Alert, Platform } from "react-native";
import { useRouter, useLocalSearchParams, useNavigation } from "expo-router";
import HeaderBackButton from "@/components/navigation/HeaderBackButton";

const ShiftFormScreen = () => {
  const { date, employeeId } = useLocalSearchParams();
  const ref = useRef<any>(null);
  const router = useRouter();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    const dateFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const screenTitle = date
      ? new Date(date.toString()).toLocaleString("en-US")
      : "Add Shift";

    if (Platform.OS === "ios") {
      navigation.setOptions({
        title: screenTitle,
        headerLeft: () => <HeaderBackButton tintColor="#ff3479" />,
      });
    } else {
      navigation.setOptions({ title: screenTitle });
    }
  }, [navigation, date]);

  useEffect(() => {
    const preventGoingBack = (e: any) => {
      if (!ref.current?.unsavedChanges) return;

      e.preventDefault();

      Alert.alert(
        "Unsaved Changes",
        "Are you sure you want to discard the changes?",
        [
          { text: "Cancel", style: "cancel", onPress: () => {} },
          {
            text: "Yes",
            style: "destructive",
            onPress: () => router.back(),
          },
        ]
      );
    };

    const unsubscribe = navigation.addListener(
      "beforeRemove",
      preventGoingBack
    );
    return unsubscribe;
  }, [navigation]);

  return (
    <ShiftForm
      ref={ref}
      employeeId={`${employeeId}`}
      shiftDate={`${date}`}
      onSaveSuccess={() => router.back()}
      onCancelPress={() => router.back()}
    />
  );
};

export default ShiftFormScreen;
