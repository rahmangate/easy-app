import { authenticate, signup } from "@/api";
import { useState } from "react";
import { Alert } from "react-native";
import useStore from "./useStore";
import Logger from "@/util/Logger";
import { isValidEmail } from "@/util";
import { router } from "expo-router";

export const useAuth = () => {
  const {
    setToken,
    setEmployee,
    setEmployees,
    setIsGlobalTimeTrackingEnabled,
  } = useStore();
  const [loading, setLoading] = useState(false);

  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }
    setLoading(true);

    const response = await authenticate({ email, password });
    setLoading(false);
    if (response.success) {
      const { token, employee, employees, isGlobalTrackingEnabled } =
        response.data;
      setEmployee(employee);
      setEmployees(employees);
      setIsGlobalTimeTrackingEnabled(isGlobalTrackingEnabled);
      setToken(token);
      router.replace("/(main)");
    } else {
      Alert.alert(
        "Login Failed",
        "Please check your credentials and try again"
      );
    }
  };

  const handleSignup = async ({
    email,
    password,
    confirmPassword,
    username,
    role,
    locationId,
  }: {
    email: string;
    password: string;
    confirmPassword: string;
    username: string;
    role: any;
    locationId: string;
  }) => {
    if (!isValidEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    if (username === "") {
      Alert.alert("Error", "Fix the name field to continue");
      return;
    }

    const payload = {
      locationId,
      email,
      password,
      username,
      organizationId: locationId,
      partnerId: "d40e2f92-2523-4833-a9cc-a95cef576876",
      payrollId: "Payroll123",
      employerPayrollId: "EmployerPayroll123",
      accessRole: {
        name: "manager",
        permissions: [
          "LOCATION_READ",
          "SHIFT_READ",
          "SHIFT_WRITE",
          "SHIFT_ADD",
        ],
      },
      role: { name: role },
    };

    setLoading(true);
    try {
      const response = await signup(payload);

      if (response.success) {
        Alert.alert(
          "Sign Up Successful",
          `Your account has been created as a ${role}.`,
          [{ text: "OK", onPress: () => router.navigate("/(auth)/login") }]
        );
      }
    } catch (error) {
      Logger.error("Sign Up Error:", error);
      Alert.alert(
        "Sign Up Failed",
        "There was an error creating your account. Please try again.",
        [{ text: "OK" }]
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleLogin,
    handleSignup,
  };
};
