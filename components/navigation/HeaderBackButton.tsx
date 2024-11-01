import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const HeaderBackButton = ({
  tintColor = "#ff3479",
  label = "Back",
  iconSize = 24,
}) => {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.container} onPress={() => router.back()}>
      <Ionicons name="chevron-back" size={iconSize} color={tintColor} />
      <Text style={[styles.label, { color: tintColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    marginLeft: 5,
  },
});

export default HeaderBackButton;
