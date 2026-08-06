import { Routes, Route } from "react-router";

import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";

import FeedPage from "./pages/feed/FeedPage";
import ProfilePage from "./pages/profile/ProfilePage";
import EditProfilePage from "./pages/profile/EditProfilePage";
import RequestsPage from "./pages/requests/RequestsPage";
import ConnectionsPage from "./pages/connections/ConnectionsPage";

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Protected Layout */}
      <Route element={<MainLayout />}>
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<EditProfilePage />} />
        <Route path="/requests" element={<RequestsPage />} />
        <Route path="/connections" element={<ConnectionsPage />} />
      </Route>
    </Routes>
  );
}

export default App;