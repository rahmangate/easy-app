import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen name="login" options={{ headerTitle: "Login" }} />
      <Stack.Screen name="signup" options={{ headerTitle: "Signup" }} />
    </Stack>
  );
}
