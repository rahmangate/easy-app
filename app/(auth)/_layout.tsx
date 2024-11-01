import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="login" options={{ headerTitle: "Login" }} />
      <Stack.Screen name="signup" options={{ headerTitle: "Signup" }} />
    </Stack>
  );
}
