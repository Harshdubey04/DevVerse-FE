import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import {
  sendInterestedRequest,
  sendIgnoreRequest,
} from "../../api/connectionRequestApi";

import { removeUserFromFeed } from "../../slices/userSlice";

function UserCard({ user, onActionSuccess, onActionError }) {
  const {
    firstName,
    lastName,
    photoURL,
    age,
    gender,
    about,
    skills,
  } = user;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [action, setAction] = useState(null);

  const handleInterested = async () => {
    setAction("interested");

    try {
      await sendInterestedRequest(user._id);

      dispatch(removeUserFromFeed(user._id));

      onActionSuccess("Connection request sent!");
    } catch (error) {
      onActionError(
        error.response?.data?.message ||
          "Failed to send connection request."
      );
    } finally {
      setAction(null);
    }
  };

  const handleIgnore = async () => {
    setAction("ignore");

    try {
      await sendIgnoreRequest(user._id);

      dispatch(removeUserFromFeed(user._id));

      onActionSuccess("User ignored.", "error");
    } catch (error) {
      onActionError(
        error.response?.data?.message ||
          "Failed to ignore user."
      );
    } finally {
      setAction(null);
    }
  };

  return (
    <div className="card bg-base-100 border border-base-300 shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden">

      {/* Cover */}
      <div className="h-24 bg-gradient-to-r from-primary/80 to-secondary/80" />

      <div className="card-body pt-0">

        {/* Profile Header */}
        <div className="flex items-end gap-4 -mt-12">

          <div className="avatar">
            <div className="w-24 rounded-full ring-4 ring-base-100">
              <img
                src={photoURL}
                alt={`${firstName} ${lastName}`}
              />
            </div>
          </div>

          <div className="pb-2 min-w-0">
            <h2 className="text-xl font-bold truncate">
              {firstName} {lastName}
            </h2>

            <p className="text-sm opacity-60">
              {age} · {gender}
            </p>
          </div>

        </div>

        {/* About */}
        <div className="mt-5">
          <p className="text-sm leading-relaxed line-clamp-3">
            {about || "No introduction available."}
          </p>
        </div>

        {/* Skills */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {skills?.slice(0, 5).map((skill) => (
              <span
                key={skill}
                className="badge badge-primary badge-outline"
              >
                {skill}
              </span>
            ))}

            {skills?.length > 5 && (
              <span className="badge badge-ghost">
                +{skills.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-3" />

        {/* Actions */}
        <div className="flex gap-2">

          <button
            onClick={() => navigate(`/profile/${user._id}`)}
            disabled={action !== null}
            className="btn btn-outline btn-info flex-1"
          >
            View Profile
          </button>

          <button
            onClick={handleIgnore}
            disabled={action !== null}
            className="btn btn-outline btn-error"
            title="Ignore"
          >
            {action === "ignore" ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              "Ignore"
            )}
          </button>

          <button
            onClick={handleInterested}
            disabled={action !== null}
            className="btn btn-primary"
          >
            {action === "interested" ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              "Interested"
            )}
          </button>

        </div>

      </div>
    </div>
  );
}

export default UserCard;