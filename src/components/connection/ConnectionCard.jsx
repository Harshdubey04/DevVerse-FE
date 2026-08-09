import {useNavigate } from "react-router";

function ConnectionCard({ user }) {
  const {
    firstName,
    lastName,
    photoURL,
    age,
    gender,
    about,
    skills,
  } = user;

  const navigate=useNavigate();

  return (
    <div className="flex items-center gap-5 p-5 border-b border-base-300">

      {/* Profile Image */}
      <div className="avatar shrink-0">
        <div className="w-20 rounded-full">
          <img
            src={photoURL}
            alt={`${firstName} ${lastName}`}
          />
        </div>
      </div>

      {/* User Info */}
      <div className="flex-1 min-w-0">

        <h2 className="text-lg font-semibold">
          {firstName} {lastName}
        </h2>

        <p className="text-sm opacity-60">
          {age} · {gender}
        </p>

        <p className="text-sm mt-1 line-clamp-1">
          {about}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {skills?.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="badge badge-sm badge-outline"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>

      {/* Action */}
      <div className="shrink-0">
        <button
        
          onClick={() => navigate(`/profile/${user._id}`)}
           className="btn btn-outline btn-info"
        >
          View Profile
        </button>
      </div>

    </div>
  );
}

export default ConnectionCard;