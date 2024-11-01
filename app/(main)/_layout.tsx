import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import useStore from "@/hooks/useStore";
import { RoleName } from "@/model";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { token, employee, employees, isGlobalTimeTrackingEnabled } =
    useStore();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="time-clock"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="timesheet"
        options={{
          title: "Timesheet",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />

      {employee?.role?.name == RoleName.admin && (
        <>
          <Tabs.Screen
            name="employees"
            options={{
              title: "Employees",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "code-slash" : "code-slash-outline"}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="shift-form"
            options={{
              title: "Shift",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "code-slash" : "code-slash-outline"}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="timesheet-admin"
            options={{
              title: "Admin Timesheet",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "code-slash" : "code-slash-outline"}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="settings"
            options={{
              title: "Settings",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "code-slash" : "code-slash-outline"}
                  color={color}
                />
              ),
            }}
          />
        </>
      )}
    </Tabs>
  );
}
