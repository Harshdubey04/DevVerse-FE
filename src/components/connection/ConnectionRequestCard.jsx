import { useState } from "react";
import { useDispatch } from "react-redux";

import {acceptConnectionRequest,rejectConnectionRequest} from "../../api/connectionRequestApi";

import { removeRequest } from "../../slices/connectionRequestSlice";

function ConnectionRequestCard({ request }) {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const user = request.fromUserId;

  const {
    firstName,
    lastName,
    age,
    gender,
    photoURL,
    about,
  } = user;

  const handleAccept = async () => {
    setIsLoading(true);
    setError("");

    try {
      await acceptConnectionRequest(request._id);

      dispatch(removeRequest(request._id));
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to accept request."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleReject = async () => {
    setIsLoading(true);
    setError("");

    try {
      await rejectConnectionRequest(request._id);

      dispatch(removeRequest(request._id));
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to reject request."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-5 p-5 border-b border-base-300">

      <div className="avatar shrink-0">
        <div className="w-20 rounded-full">
          <img
            src={photoURL}
            alt={`${firstName} ${lastName}`}
          />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <h2 className="text-lg font-semibold">
          {firstName} {lastName}
        </h2>

        <p className="text-sm opacity-60">
          {age} · {gender}
        </p>

        <p className="text-sm mt-1 line-clamp-2">
          {about}
        </p>

        {error && (
          <p className="text-error text-sm mt-2">
            {error}
          </p>
        )}
      </div>

      <div className="flex gap-2 shrink-0">
        <button
          onClick={handleAccept}
          disabled={isLoading}
          className="btn btn-primary"
        >
          {isLoading ? (
            <span className="loading loading-spinner loading-sm" />
          ) : (
            "Accept"
          )}
        </button>

        <button
          onClick={handleReject}
          disabled={isLoading}
          className="btn btn-outline btn-error"
        >
          Reject
        </button>
      </div>

    </div>
  );
}

export default ConnectionRequestCard;