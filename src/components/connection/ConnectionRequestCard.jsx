function ConnectionRequestCard({ user }) {
  const {
    firstName,
    lastName,
    age,
    gender,
    photoURL,
    about,
  } = user;

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

      {/* User Information */}
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
      </div>

      {/* Actions */}
      <div className="flex gap-2 shrink-0">
        <button className="btn btn-primary">
          Accept
        </button>

        <button className="btn btn-outline btn-error">
          Reject
        </button>
      </div>

    </div>
  );
}

export default ConnectionRequestCard;