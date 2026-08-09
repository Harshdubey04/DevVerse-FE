import { Routes, Route } from "react-router";

import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";

import FeedPage from "./pages/feed/FeedPage";
import ProfilePage from "./pages/profile/ProfilePage";
import EditProfilePage from "./pages/profile/EditProfilePage";
import ConnectionsPage from "./pages/connections/ConnectionsPage";

import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/common/ProtectedRoute"
import GuestRoute from "./components/common/GuestRoute";
import ConnectionRequestPage from "./pages/connections/ConnectionRequestPage";
import UserProfilePage from "./pages/profile/UserProfilePage";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<GuestRoute />}>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      </Route>

      {/* Protected Layout */}
      
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/editProfile" element={<EditProfilePage />} />
          <Route path="/requests" element={<ConnectionRequestPage />} />
          <Route path="/connections" element={<ConnectionsPage />} />
          <Route path="/profile/:userId" element={<UserProfilePage />}
/>
          
        </Route>
        </Route>
      

    </Routes>
  );
}

export default App;