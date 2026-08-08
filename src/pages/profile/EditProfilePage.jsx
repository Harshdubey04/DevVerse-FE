import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";

import { editProfileSchema } from "../../schemas/editProfileSchema";
import EditProfileForm from "../../components/profile/EditProfileForm";
import ProfilePreview from "../../components/profile/ProfilePreview";

function EditProfilePage() {
  const user = useSelector((store) => store.auth.user);

  const methods = useForm({
    resolver: zodResolver(editProfileSchema),

    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      photoURL: user?.photoURL || "",
      age: user?.age || "",
      gender: user?.gender || "",
      about: user?.about || "",
      skills: user?.skills?.join(", ") || "",
    },
  });

  return (
    <FormProvider {...methods}>
      <div className="min-h-[calc(100vh-64px)] px-4 py-10">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl font-bold mb-8 text-center">
            Edit Profile
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Form */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <EditProfileForm />
              </div>
            </div>

            {/* Live Preview */}
            <ProfilePreview user={user} />

          </div>

        </div>
      </div>
    </FormProvider>
  );
}

export default EditProfilePage;