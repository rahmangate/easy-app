import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import { useThemeColor } from "@/hooks/useThemeColor";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import useStore from "@/hooks/useStore";
import Feather from "@expo/vector-icons/Feather";

const CustomTabBar = ({ state }: any) => {
  const { employee } = useStore();
  const router = useRouter();

  const backgroundColor = useThemeColor({}, "background");
  const inactiveColor = useThemeColor({}, "bottomTabLabel");
  const activeColor = useThemeColor({}, "activeBottomTabLabel");
  const inactiveIconColor = useThemeColor({}, "bottomTabIcon");
  const activeIconColor = useThemeColor({}, "activeBottomTabIcon");

  const tabs = [
    {
      label: "Clock",
      icon: (color: any) => <AntDesign name="home" size={15} color={color} />,
      route: () => router.push("/time-clock"),
    },
    {
      label: "Timesheet",
      icon: (color: any) => (
        <MaterialCommunityIcons name="timetable" size={15} color={color} />
      ),
      route: () => router.push("/timesheet"),
    },
  ];

  if (employee?.role?.name == "admin") {
    tabs.push(
      {
        label: "Employees",
        icon: (color: any) => (
          <FontAwesome name="users" size={15} color={color} />
        ),
        route: () => router.push("/employees"),
      },

      {
        label: "Settings",
        icon: (color: any) => (
          <Feather name="settings" size={15} color={color} />
        ),
        route: () => router.push(`/settings`),
      }
    );
  }

  return (
    <View style={[styles.tabBar, { backgroundColor }]}>
      {tabs.map((tab, index) => {
        const isFocused = state.index === index;
        const color = isFocused ? activeColor : inactiveColor;
        const iconColor = isFocused ? activeIconColor : inactiveIconColor;

        return (
          <TouchableOpacity
            key={tab.label}
            onPress={() => tab.route()}
            style={[styles.tab]}
          >
            {tab.icon(iconColor)}
            <Text style={{ color, fontSize: 11 }}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    elevation: 4,
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#6200EE",
  },
});

export default CustomTabBar;
