function SignupForm() {
  return (
    <div className="card w-full max-w-md bg-base-100 shadow-2xl">
      <div className="card-body p-8">

        <h2 className="text-3xl font-bold text-center">
          Create Account
        </h2>

        <p className="text-center opacity-70 mb-6">
          Start your DevVerse journey today
        </p>

        <div className="grid grid-cols-2 gap-4">

          <div>
            <label className="label">
              <span className="label-text">First Name</span>
            </label>

            <input
              type="text"
              placeholder="John"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>

            <input
              type="text"
              placeholder="Doe"
              className="input input-bordered w-full"
            />
          </div>

        </div>

        <label className="label mt-2">
          <span className="label-text">Email</span>
        </label>

        <input
          type="email"
          placeholder="john@example.com"
          className="input input-bordered w-full"
        />

        <label className="label mt-2">
          <span className="label-text">Password</span>
        </label>

        <input
          type="password"
          placeholder="••••••••"
          className="input input-bordered w-full"
        />

        <button className="btn btn-primary w-full mt-6">
          Create Account
        </button>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <button className="link link-primary font-semibold">
            Sign In
          </button>
        </p>

      </div>
    </div>
  );
}

export default SignupForm;