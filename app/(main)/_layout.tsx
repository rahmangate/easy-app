import { router, Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import CustomTabBar from "@/components/navigation/CustomTabBar";
import { Alert, TouchableOpacity, Text } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import useStore from "@/hooks/useStore";
import EasyteamProvider from "@/components/provider/EasyteamLayout";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { reset } = useStore();
  const color = useThemeColor({}, "activeBottomTabIcon");
  const logout = () => {
    Alert.alert("Logout", "Do you want to logout?", [
      {
        text: "Yes",
        onPress: () => {
          router.replace("/(auth)/login");
          reset();
        },
      },
      { text: "No" },
    ]);
  };

  return (
    <EasyteamProvider>
      <Tabs
        initialRouteName="time-clock"
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,

          headerRight: () => (
            <TouchableOpacity style={{ padding: 10 }} onPress={logout}>
              <Text style={{ color }}>Logout</Text>
            </TouchableOpacity>
          ),
        }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tabs.Screen
          name="time-clock"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="timesheet"
          options={{
            title: "Timesheet",
          }}
        />

        <Tabs.Screen
          name="employees"
          options={{
            title: "Employees",
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
          }}
        />
      </Tabs>
    </EasyteamProvider>
  );
}
