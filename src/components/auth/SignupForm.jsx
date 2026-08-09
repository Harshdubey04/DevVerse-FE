import { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";
import { signupSchema } from "../../schemas/signupSchema";
import { signupUser } from "../../api/authApi";
import { addUser } from "../../slices/authSlice";
import { useDispatch } from "react-redux";

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setServerError("");

      const response = await signupUser(data);
      //Adding data to the store
      dispatch(addUser(response?.data));
      navigate("/feed");

    } catch (error) {
        setServerError(
            error?.message || "Something went wrong"
        );
    } finally {
        setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body p-8">
          <h2 className="text-3xl font-bold text-center">
            Create Account
          </h2>

          <p className="text-center opacity-70 mb-6">
            Start your DevVerse journey today
          </p>

          <div className="grid grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label className="label">
                <span className="fieldset-legend">First Name</span>
              </label>

              <input
                type="text"
                placeholder="John"
                className={`input input-bordered w-full ${errors.firstName ? "input-error" : ""
                  }`}
                {...register("firstName")}
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
                <span className="fieldset-legend">Last Name</span>
              </label>

              <input
                type="text"
                placeholder="Doe"
                className={`input input-bordered w-full ${errors.lastName ? "input-error" : ""
                  }`}
                {...register("lastName")}
              />

              {errors.lastName && (
                <p className="text-error text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="mt-2">
            <label className="label">
              <span className="fieldset-legend">Email</span>
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className={`input input-bordered w-full ${errors.emailId ? "input-error" : ""
                }`}
              {...register("emailId")}
            />

            {errors.emailId && (
              <p className="text-error text-sm mt-1">
                {errors.emailId.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mt-2">
            <label className="label">
              <span className="fieldset-legend">Password</span>
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`input input-bordered w-full ${errors.password ? "input-error" : ""
                  }`}
                {...register("password")}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-error text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          {serverError && (
            <div className="alert alert-error mt-4">
              <span>{serverError}</span>
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary w-full mt-6"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Create Account"
            )}
          </button>

          <p className="text-center mt-6">
            Already have an account?{" "}
            <Link to="/login" className="link link-primary font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default SignupForm;