import useStore from "@/hooks/useStore";
import { EasyTeamProvider } from "@easyteam/ui";

export default function EasyteamProvider({ children }: any) {
  const { token, employees, isGlobalTimeTrackingEnabled } = useStore();
  return (
    <EasyTeamProvider
      token={token}
      employees={employees}
      isGlobalTimeTrackingEnabled={isGlobalTimeTrackingEnabled}
      basePath=""
      
    >
      {children}
    </EasyTeamProvider>
  );
}
