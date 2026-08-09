import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../api/profileApi";

import {setProfile,setProfileLoading,setProfileError} from "../slices/profileSlice";

function useUserProfile(userId) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userId) return;

    const fetchProfile = async () => {
      dispatch(setProfileLoading(true));

      try {
        const response = await getUserProfile(userId);

        dispatch(setProfile(response.data));
      } catch (error) {
        dispatch(
          setProfileError(
            error.response?.data?.message ||
              "Failed to fetch profile."
          )
        );
      }
    };

    fetchProfile();
  }, [userId, dispatch]);
}

export default useUserProfile;