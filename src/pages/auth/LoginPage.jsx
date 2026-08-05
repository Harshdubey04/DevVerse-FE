import LoginForm from "../../components/auth/LoginForm";
import logo from "../../assets/images/DevVerseLogo.png";

function LoginPage() {
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
              Welcome to DevVerse
            </h1>

            <p className="py-6 text-lg opacity-80">
              Connect, collaborate, and grow with developers from around the
              world.
            </p>

            <div className="space-y-2 text-lg">
              <p>🚀 Build amazing projects</p>
              <p>🤝 Connect with developers</p>
              <p>💼 Showcase your profile</p>
            </div>
          </div>

          {/* Right Section */}
          <LoginForm />

        </div>
      </div>
    </div>
  );
}

export default LoginPage;