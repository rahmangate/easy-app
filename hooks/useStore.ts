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
}
const useStore = create(
  persist<StateAction>(
    (set, get) => ({
      token: "",
      setToken: (token: any) => set({ token }),
      employee: null,
      setEmployee: (employee: any) => set({ employee }),
      employees: [],
      setEmployees: (employees: FormattedEmployee[]) => set({ employees }),
      locations: [],
      setLocations: (locations: Location[]) => set({ locations }),
      isGlobalTimeTrackingEnabled: true,
      setIsGlobalTimeTrackingEnabled: (isGlobalTimeTrackingEnabled: boolean) =>
        set({ isGlobalTimeTrackingEnabled }),
    }),
    {
      name: "easy-team-1",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useStore;
