import React from "react";
import { Settings } from "@easyteam/ui";
import useStore from "@/hooks/useStore";
import Logger from "@/util/Logger";
import { api, BASE_URL } from "@/api";

const SettingsScreen = () => {
  const { token } = useStore();

  const updateGlobalTrackingSetting = async (payload: boolean) => {
    try {
      await api.put(
        BASE_URL + "/settings",
        {
          isGlobalTrackingEnabled: payload,
        },
        {
          headers: {
            "auth-token": token,
          },
        }
      );
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
