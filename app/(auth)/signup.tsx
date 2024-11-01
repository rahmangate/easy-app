import CustomDropdown from "@/components/Dropdown";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useAuth } from "@/hooks/useAuth";
import useLocation from "@/hooks/useLocation";
import { RoleName } from "@/model";
import { router } from "expo-router";

import React, { useCallback, useMemo, useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";

const SignupScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [locationId, setLocationId] = useState("");
  const [role, setRole] = useState<RoleName>(RoleName.regular);

  const { loading, handleSignup } = useAuth();
  const { locations, loadingLocation } = useLocation();

  const locationOptions = useMemo(() => {
    return locations?.map((item) => ({ label: item.name, value: item.name }));
  }, [locations]);
  console.log(locations);

  const onSignupPress = () => {
    console.log(email, role);
    return;
    handleSignup({
      email,
      confirmPassword,
      password,
      username,
      locationId,
      role: { name: role },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <Text>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
        autoCapitalize="none"
      />

      <Text>Location</Text>
      <CustomDropdown data={locationOptions} placeholder="Select location" />

      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 25,
          justifyContent: "space-between",
        }}
      >
        <Text>Admin Role</Text>
        <Switch
          value={role == RoleName.admin}
          onValueChange={() =>
            setRole(role == RoleName.admin ? RoleName.regular : RoleName.admin)
          }
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onSignupPress}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 10, margin: 10 }}
        onPress={() => router.push("/(auth)/signup")}
      >
        <ThemedText style={{ textAlign: "center" }}>Goto Login</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    /// flex: 1,
    // justifyContent: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  errorText: {
    color: "red",
    marginBottom: 20,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignupScreen;
