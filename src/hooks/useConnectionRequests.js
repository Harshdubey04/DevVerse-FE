import { useEffect } from "react";
import { getConnectionRequests } from "../api/userApi";
import { useDispatch } from "react-redux";
import { sendRequests,setError } from "../slices/connectionRequestSlice";

function useConnectionRequests() {
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchRequests=async () => {
            try {
                const response = await getConnectionRequests();
                dispatch(sendRequests(response?.data))
            }
            catch (error) {
                const message =
                    error.response?.data?.message ||
                    "Failed to fetch connection requests.";

                dispatch(setError(message));
            }
        }

        fetchRequests();
    }, [dispatch])
}

export default useConnectionRequests