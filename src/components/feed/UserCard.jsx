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
          <button className="btn btn-outline btn-error">
            Ignore
          </button>

          <button className="btn btn-primary">
            Interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;