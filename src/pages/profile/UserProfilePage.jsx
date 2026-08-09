import { useSelector } from "react-redux";
import { useParams } from "react-router";
import useUserProfile from "../../hooks/useUserProfile";

function UserProfilePage() {
  const { userId } = useParams();

  useUserProfile(userId);

  const {user,isLoading,error} = useSelector((store) => store.profile);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-error">{error}</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

 return (
  <div className="min-h-[calc(100vh-4rem)] py-10 px-4">
    <div className="max-w-4xl mx-auto">

      {/* Profile Card */}
      <div className="card bg-base-100 shadow-xl overflow-hidden">

        {/* Cover */}
        <div className="h-32 bg-gradient-to-r from-primary/80 to-secondary/80" />

        <div className="card-body pt-0">

          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 -mt-16">

            {/* Avatar */}
            <div className="avatar">
              <div className="w-32 rounded-full ring ring-base-100 ring-offset-4 ring-offset-base-100">
                <img
                  src={user.photoURL}
                  alt={`${user.firstName} ${user.lastName}`}
                />
              </div>
            </div>

            {/* Basic Info */}
            <div className="text-center sm:text-left pb-2 flex-1">
              <h1 className="text-3xl font-bold">
                {user.firstName} {user.lastName}
              </h1>

              <p className="opacity-60 mt-1">
                {user.age} · {user.gender}
              </p>
            </div>

          </div>

          <div className="divider" />

          {/* About */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              About
            </h2>

            <p className="text-base opacity-80 leading-relaxed">
              {user.about || "No information available."}
            </p>
          </section>

          {/* Skills */}
          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-3">
              Skills
            </h2>

            {user.skills?.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill) => (
                  <span
                    key={skill}
                    className="badge badge-primary badge-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <p className="opacity-60">
                No skills added.
              </p>
            )}
          </section>

          {/* Profile Info */}
          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-3">
              Profile Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="bg-base-200 rounded-xl p-4">
                <p className="text-sm opacity-60">
                  Name
                </p>
                <p className="font-medium mt-1">
                  {user.firstName} {user.lastName}
                </p>
              </div>

              <div className="bg-base-200 rounded-xl p-4">
                <p className="text-sm opacity-60">
                  Gender
                </p>
                <p className="font-medium mt-1">
                  {user.gender || "Not specified"}
                </p>
              </div>

            </div>
          </section>

        </div>
      </div>

    </div>
  </div>
);
}

export default UserProfilePage;