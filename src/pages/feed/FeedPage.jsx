import { useEffect, useState } from "react";
import { getFeed } from "../../api/userApi";
import UserCard from "../../components/feed/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../slices/userSlice";

function FeedPage() {
  const dispatch = useDispatch();

  const users = useSelector((store) => store.user.users);

  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await getFeed();

        dispatch(setUsers(response?.data));
      } catch (error) {
        console.error("FEED ERROR:", error);

        setToast({
          type: "error",
          message:
            error.response?.data?.message ||
            "Failed to fetch feed.",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeed();
  }, [dispatch]);

  const handleActionSuccess = (message,type="success") => {
    setToast({
      type,
      message,
    });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleActionError = (message) => {
    setToast({
      type: "error",
      message,
    });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center px-4 py-8">
      {/* DaisyUI Toast */}
      {toast && (
        <div className="toast toast-top toast-end z-50">
          <div
            className={`alert ${toast.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-600 text-white"
              }`}
          >
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* Feed */}
      <div className="w-full max-w-md">
        {users?.length > 0 ? (
          <div className="flex flex-col gap-6">
            {users.map((user) => (
              <UserCard
                key={user._id}
                user={user}
                onActionSuccess={handleActionSuccess}
                onActionError={handleActionError}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-20">
            <p className="text-lg opacity-60">
              No more users available.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FeedPage;