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

  return (
    <div className="card bg-base-100 shadow-md">
      <figure className="px-5 pt-5">
        <img
          src={photoURL}
          alt={`${firstName} ${lastName}`}
          className="h-48 w-full rounded-xl object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>

        <p className="text-sm opacity-70">
          {age} · {gender}
        </p>

        <p className="line-clamp-2">
          {about}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {skills?.map((skill) => (
            <span key={skill} className="badge badge-primary">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ConnectionCard;