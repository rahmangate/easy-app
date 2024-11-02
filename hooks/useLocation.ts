import { useEffect, useState } from "react";
import useStore from "./useStore";
import { getLocations } from "@/api";

const useLocation = () => {
  const [loading, setLoading] = useState(false);
  const { locations, setLocations } = useStore();

  useEffect(() => {
    async function _fetch() {
      setLoading(true);
      let resp = await getLocations();
      setLoading(false);
      if (resp.success) {
        setLocations(resp.data);
      }
    }
    if (locations.length == 0) {
      _fetch();
    }
  }, []);

  return { locations, loadingLocation: loading };
};

export default useLocation;
