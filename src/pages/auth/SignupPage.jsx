import SignupForm from "../../components/auth/SignupForm";
import logo from "../../assets/images/DevVerseLogo.png";

function SignupPage() {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row lg:gap-24">

          {/* Left Section */}
          <div className="hidden lg:flex flex-col items-center text-center max-w-lg">
            <img
              src={logo}
              alt="DevVerse Logo"
              className="w-96 mb-8"
            />

            <h1 className="text-5xl font-bold">
              Join DevVerse
            </h1>

            <p className="py-6 text-lg opacity-80">
              Build your developer profile, connect with others, and grow together.
            </p>

            <div className="space-y-2 text-lg">
              <p>🚀 Showcase your skills</p>
              <p>🤝 Network with developers</p>
              <p>💼 Discover opportunities</p>
            </div>
          </div>

          {/* Right Section */}
          <SignupForm />

        </div>
      </div>
    </div>
  );
}

export default SignupPage;