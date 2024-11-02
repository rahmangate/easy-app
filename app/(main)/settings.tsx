import React from "react";
import { Settings } from "@easyteam/ui";
import useStore from "@/hooks/useStore";
import Logger from "@/util/Logger";
import { api } from "@/api";
import { BASE_API } from "@/config";

const SettingsScreen = () => {
  const { token, setIsGlobalTimeTrackingEnabled } = useStore();

  const updateGlobalTrackingSetting = async (payload: boolean) => {
    try {
      const resp = await api.put(
        BASE_API + "/settings",
        {
          isGlobalTrackingEnabled: payload,
        },
        {
          headers: {
            "auth-token": token,
          },
        }
      );

      setIsGlobalTimeTrackingEnabled(payload);
    } catch (error) {
      Logger.error("Error updating global tracking setting:", error);
    }
  };

  return (
    <Settings
      onSave={({ employees, isGlobalTrackingEnabled }) => {
        updateGlobalTrackingSetting(isGlobalTrackingEnabled);
      }}
    />
  );
};

export default SettingsScreen;
