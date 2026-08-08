import { Link } from "react-router";

function ProfileCard({ user,showEditButton = true }) {
  const {
    firstName,
    lastName,
    photoURL,
    age,
    gender,
    emailId,
    about,
    skills,
  } = user;

  return (
    <div className="card w-full max-w-3xl bg-base-100 shadow-xl">
      <div className="card-body">

        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="avatar">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={photoURL}
                alt={`${firstName} ${lastName}`}
              />
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold">
              {firstName} {lastName}
            </h1>

            <p className="opacity-70 mt-1">
              {age} · {gender}
            </p>

            <p className="mt-2">
              {emailId}
            </p>
          </div>
        </div>

        <div className="divider" />

        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            About
          </h2>

          <p className="opacity-80">
            {about}
          </p>
        </div>

        {/* Skills */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-3">
            Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {skills?.length > 0 ? (
              skills.map((skill) => (
                <span key={skill} className="badge badge-primary">
                  {skill}
                </span>
              ))
            ) : (
              <p className="opacity-60">
                No skills added yet.
              </p>
            )}
          </div>
        </div>

        {/* Action */}
        {showEditButton && <div className="card-actions justify-end mt-6">
          <Link
            to="/profile/editProfile"
            className="btn btn-primary"
          >
            Edit Profile
          </Link>
        </div>}

      </div>
    </div>
  );
}

export default ProfileCard;