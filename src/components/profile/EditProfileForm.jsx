import { useFormContext } from "react-hook-form";
import { editProfile } from "../../api/profileApi";
import { useDispatch } from "react-redux";
import { addUser } from "../../slices/authSlice";
import { useNavigate } from "react-router";
import { useState } from "react";

function EditProfileForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useFormContext();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSuccessMessage("");
        setErrorMessage("");
        try {
            const response = await editProfile(data);
            //Adding user feed to the store
            dispatch(addUser(response?.data));
            setSuccessMessage("Profile updated successfully.");
            setTimeout(() => {
                setSuccessMessage("");
                navigate("/profile")
            }, 2000);
        } catch (error) {
            setErrorMessage(
                error?.message ||
                "Failed to update profile. Please try again."
            );

            setTimeout(() => {
                setErrorMessage("");
            }, 2000);
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                {/* First Name */}
                <div>
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>

                    <input
                        type="text"
                        {...register("firstName")}
                        className={`input input-bordered w-full ${errors.firstName ? "input-error" : ""
                            }`}
                    />

                    {errors.firstName && (
                        <p className="text-error text-sm mt-1">
                            {errors.firstName.message}
                        </p>
                    )}
                </div>

                {/* Last Name */}
                <div>
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>

                    <input
                        type="text"
                        {...register("lastName")}
                        className={`input input-bordered w-full ${errors.lastName ? "input-error" : ""
                            }`}
                    />

                    {errors.lastName && (
                        <p className="text-error text-sm mt-1">
                            {errors.lastName.message}
                        </p>
                    )}
                </div>

                {/* Photo URL */}
                <div>
                    <label className="label">
                        <span className="label-text">Profile Photo URL</span>
                    </label>

                    <input
                        type="url"
                        {...register("photoURL")}
                        className={`input input-bordered w-full ${errors.photoURL ? "input-error" : ""
                            }`}
                    />

                    {errors.photoURL && (
                        <p className="text-error text-sm mt-1">
                            {errors.photoURL.message}
                        </p>
                    )}
                </div>

                {/* Age */}
                <div>
                    <label className="label">
                        <span className="label-text">Age</span>
                    </label>

                    <input
                        type="number"
                        {...register("age", {
                            setValueAs: (value) => value === "" ? undefined : Number(value),
                        })}
                        className={`input input-bordered w-full ${errors.age ? "input-error" : ""
                            }`}
                    />

                    {errors.age && (
                        <p className="text-error text-sm mt-1">
                            {errors.age.message}
                        </p>
                    )}
                </div>

                {/* Gender */}
                <div>
                    <label className="label">
                        <span className="label-text">Gender</span>
                    </label>

                    <select
                        {...register("gender")}
                        className={`select select-bordered w-full ${errors.gender ? "select-error" : ""
                            }`}
                    >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>

                    {errors.gender && (
                        <p className="text-error text-sm mt-1">
                            {errors.gender.message}
                        </p>
                    )}
                </div>

                {/* About */}
                <div>
                    <label className="label">
                        <span className="label-text">About</span>
                    </label>

                    <textarea
                        {...register("about")}
                        className={`textarea textarea-bordered w-full h-32 ${errors.about ? "textarea-error" : ""
                            }`}
                    />

                    {errors.about && (
                        <p className="text-error text-sm mt-1">
                            {errors.about.message}
                        </p>
                    )}
                </div>

                {/* Skills */}
                <div>
                    <label className="label">
                        <span className="label-text">
                            Skills
                        </span>
                    </label>

                    <input
                        type="text"
                        placeholder="React, Node.js, MongoDB"
                        {...register("skills")}
                        className={`input input-bordered w-full ${errors.skills ? "input-error" : ""
                            }`}
                    />

                    {errors.skills && (
                        <p className="text-error text-sm mt-1">
                            {errors.skills.message}
                        </p>
                    )}
                </div>

                {successMessage && (
                    <div className="alert alert-success">
                        <span>{successMessage}</span>
                    </div>
                )}

                {errorMessage && (
                    <div className="alert alert-error">
                        <span>{errorMessage}</span>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full"
                >
                    {isSubmitting ? (
                        <>
                            <span className="loading loading-spinner loading-sm"></span>
                            Saving...
                        </>
                    ) : (
                        "Save Changes"
                    )}
                </button>
            </form>
            {successMessage && <div className="toast toast-top toast-center">

                <div className="alert alert-success">
                    <span>{successMessage}</span>
                </div>
            </div>}

            {errorMessage && <div className="toast toast-top toast-center">

                <div className="alert alert-success">
                    <span>{errorMessage}</span>
                </div>
            </div>}
        </div>
    );
}

export default EditProfileForm;