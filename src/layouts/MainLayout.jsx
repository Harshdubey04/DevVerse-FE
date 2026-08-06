import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-64px)] bg-base-200">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;