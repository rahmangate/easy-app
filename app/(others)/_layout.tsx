import HeaderBackButton from "@/components/navigation/HeaderBackButton";
import EasyteamProvider from "@/components/provider/EasyteamLayout";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <EasyteamProvider>
      <Stack
        initialRouteName="shift-form"
        screenOptions={{
          headerShown: true,
          headerLeft: () => <HeaderBackButton />,
        }}
      >
        <Stack.Screen name="shift-form" options={{ headerTitle: "Shift" }} />
        <Stack.Screen
          name="timesheet-admin"
          options={{ headerTitle: "Timesheet" }}
        />
      </Stack>
    </EasyteamProvider>
  );
}
