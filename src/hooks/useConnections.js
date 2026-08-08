import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getConnections } from "../api/userApi";
import {setConnections,setLoading,setError} from "../slices/connetionSlice"

function useConnections() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchConnections = async () => {
      dispatch(setLoading(true));

      try {
        const response = await getConnections();

        dispatch(setConnections(response.data));
      } catch (error) {
        const message =
          error.response?.data?.message ||
          "Failed to fetch connections.";

        dispatch(setError(message));
      }
    };

    fetchConnections();
  }, [dispatch]);
}

export default useConnections;