import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser,removeUser,setLoading } from "../../slices/authSlice";
import { getUser } from "../../api/profileApi";

function AuthInitializer({ children }) {
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store?.auth?.isLoading);

  const fetchUser = async () => {
      try {
        const response = await getUser();
        dispatch(addUser(response.data));
        
      } catch (error) {
        console.log("PROFILE API ERROR:", error.response?.data || error);
        dispatch(removeUser());
      } finally {
        dispatch(setLoading(false));
      }
    };

  useEffect(() => {
    fetchUser();
  }, [dispatch]);


  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return children;
}

export default AuthInitializer;