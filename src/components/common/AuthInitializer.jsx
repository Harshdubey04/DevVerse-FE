import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../slices/authSlice";
import { getUser } from "../../api/profileApi";

function AuthInitializer({ children }) {
  const dispatch = useDispatch();
  const fetchUser = async () => {
      try {
        const user = await getUser();
        dispatch(addUser(user?.data));
      } catch (error) {
        console.log("User not authenticated");
      }
    };

  useEffect(() => {
    fetchUser();
  }, [dispatch]);

  return children;
}

export default AuthInitializer;