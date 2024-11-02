import { Employee, FormattedEmployee, Location } from "@/model";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";

interface StateAction {
  token: any;
  setToken: (token: string) => void;
  employee: Employee | null;
  setEmployee: (data: any) => void;
  employees: FormattedEmployee[];
  setEmployees: (formattedEmployees: FormattedEmployee[]) => void;
  locations: Location[];
  setLocations: (locations: Location[]) => void;
  isGlobalTimeTrackingEnabled: boolean;
  setIsGlobalTimeTrackingEnabled: (
    isGlobalTimeTrackingEnabled: boolean
  ) => void;
  reset: () => void;
}

const initial = {
  token: "",
  employee: null,
  employees: [],
  locations: [],
  isGlobalTimeTrackingEnabled: true,
};
const useStore = create(
  persist<StateAction>(
    (set, get) => ({
      ...initial,
      setToken: (token: any) => set({ token }),

      setEmployee: (employee: any) => set({ employee }),

      setEmployees: (employees: FormattedEmployee[]) => set({ employees }),

      setLocations: (locations: Location[]) => set({ locations }),

      setIsGlobalTimeTrackingEnabled: (isGlobalTimeTrackingEnabled: boolean) =>
        set({ isGlobalTimeTrackingEnabled }),
      reset: () => set({ ...initial }),
    }),
    {
      name: "easy-team-1",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useStore;
