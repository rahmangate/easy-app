import { BASE_PATH } from "@/config";
import useStore from "@/hooks/useStore";
import { EasyTeamProvider } from "@easyteam/ui";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function EasyteamProvider({ children }: any) {
  const { token, employee, employees, isGlobalTimeTrackingEnabled } =
    useStore();

  return (
    <EasyTeamProvider
      token={token}
      employees={employees}
      isGlobalTimeTrackingEnabled={isGlobalTimeTrackingEnabled}
      basePath={BASE_PATH}
    >
      {children}
    </EasyTeamProvider>
  );
}
