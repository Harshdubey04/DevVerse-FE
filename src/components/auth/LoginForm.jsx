import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/loginSchema";



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

  const onSubmit = (data) => {
    console.log(data);
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

            <input
              type="password"
              placeholder="Enter your password"
              className={`input input-bordered w-full ${errors.password ? "input-error" : ""
                }`}
              {...register("password")}
            />

            {errors.password && (
              <p className="text-error text-sm mt-1">
                {errors.password.message}
              </p>
            )}

          </fieldset>

          <button type="submit" className="btn btn-primary w-full mt-6">
            Sign In
          </button>

          <p className="text-center mt-6">
            Don't have an account?{" "}
            <button className="link link-primary font-semibold">
              Sign Up
            </button>
          </p>

        </div>
      </div>

    </form>
  );
}

export default LoginForm;