import { useFormContext } from "react-hook-form";
import ProfileCard from "./ProfileCard";

function ProfilePreview({ user }) {
  const { watch } = useFormContext();

  const formValues = watch();

  const previewUser = {
    ...user,
    ...formValues,

    skills:
    // Converting string to array
      typeof formValues.skills === "string"
        ? formValues.skills
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean)
        : formValues.skills || [],
  };

  return (
    <div className="lg:sticky lg:top-24">
      <h2 className="text-xl font-semibold mb-4">
        Live Preview
      </h2>

      <ProfileCard user={previewUser} showEditButton={false} />
    </div>
  );
}

export default ProfilePreview;