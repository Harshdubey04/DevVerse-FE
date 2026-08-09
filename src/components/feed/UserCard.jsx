import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendInterestedRequest, sendIgnoreRequest } from "../../api/connectionRequestApi";
import { removeUserFromFeed } from "../../slices/userSlice";

function UserCard({ user }) {
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
  const [isLoading, setIsLoading] = useState(false);

  const handleInterested = async () => {
    setIsLoading(true);

    try {
      await sendInterestedRequest(user._id);

      dispatch(removeUserFromFeed(user._id));

    } catch (error) {
      console.error(
        "INTERESTED REQUEST ERROR:",
        error.response?.data || error
      )
    } finally {
      setIsLoading(false);
    }
  };

  const handleIgnore = async () => {
    setIsLoading(true);

    try {
      await sendIgnoreRequest(user._id);

      dispatch(removeUserFromFeed(user._id));

      setToast({
        type: "success",
        message: "User ignored.",
      });
    } catch (error) {
      console.error(
        "IGNORE REQUEST ERROR:",
        error.response?.data || error
      )
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card w-full max-w-md bg-base-100 shadow-xl">
      <figure className="px-6 pt-6">
        <img
          src={photoURL}
          alt={`${firstName} ${lastName}`}
          className="h-64 w-full rounded-xl object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-2xl">
          {firstName} {lastName}
        </h2>

        <p className="text-sm opacity-70">
          {age} · {gender}
        </p>

        <p className="mt-2">
          {about}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {skills?.map((skill) => (
            <span key={skill} className="badge badge-primary">
              {skill}
            </span>
          ))}
        </div>

        <div className="card-actions justify-between mt-5">
          <button
            onClick={handleInterested}
            disabled={isLoading}
            className="btn btn-primary"
          >
            {isLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Interested"
            )}
          </button>

          <button
            onClick={handleIgnore}
            disabled={isLoading}
            className="btn btn-outline"
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;