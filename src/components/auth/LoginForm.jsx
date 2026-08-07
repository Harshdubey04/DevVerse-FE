import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/loginSchema";
import { useState } from "react";
import { Eye, EyeOff } from 'lucide-react';
import { loginUser } from "../../api/authApi";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../../slices/authSlice";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
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
      const response = await loginUser(data);
      // console.log(response);
      // console.log(response.data);
      //Adding data to the store
      dispatch(addUser(response.data));
      navigate("/feed");
    }
    catch (error) {
      setServerError(
        error?.response?.data?.message || "Something went wrong"
      )
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body p-8">

          <h2 className="text-3xl font-bold text-center">
            Welcome Back 👋
          </h2>

          <p className="text-center opacity-70 mb-6">
            Sign in to continue to DevVerse
          </p>

          <fieldset className="fieldset">

            <legend className="fieldset-legend">Email</legend>

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

            <legend className="fieldset-legend mt-4">
              Password
            </legend>

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
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>


            {errors.password && (
              <p className="text-error text-sm mt-1">
                {errors.password.message}
              </p>
            )}

          </fieldset>

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
              "Sign In"
            )}
          </button>

          <p className="text-center mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="link link-primary font-semibold">
              Sign Up
            </Link>
          </p>

        </div>
      </div>

    </form>
  );
}

export default LoginForm;