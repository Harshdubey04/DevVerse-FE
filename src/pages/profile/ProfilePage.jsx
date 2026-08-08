import { useSelector } from "react-redux";
import ProfileCard from "../../components/profile/ProfileCard";

function ProfilePage() {
  const user = useSelector((store) => store.auth.user);

  return (
    <div className="min-h-[calc(100vh-64px)] px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <ProfileCard user={user} />
      </div>
    </div>
  );
}

export default ProfilePage;