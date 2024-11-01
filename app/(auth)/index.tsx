import useStore from "@/hooks/useStore";
import { Redirect } from "expo-router";

export default function IndexScreen() {
  const { employee } = useStore();
  return employee ? (
    <Redirect href={"/(main)/time-clock"} />
  ) : (
    <Redirect href={"/(auth)/login"} />
  );
}
