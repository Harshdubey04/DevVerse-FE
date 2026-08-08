import { Link, Navigate, NavLink, useNavigate } from "react-router";
import logo from "../../assets/images/DevVerseLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../api/authApi";
import { removeUser } from "../../slices/authSlice";

function Navbar() {

  const user=useSelector(store=>store?.auth?.user);
  
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleLogout=async ()=>{
    try{

      const response=await logoutUser();
      
      dispatch(removeUser());
      navigate('/login');
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="navbar bg-base-100 shadow-md px-4 lg:px-8 sticky top-0 z-50">
      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/feed">Feed</NavLink>
            </li>

            <li>
              <NavLink to="/requests">Requests</NavLink>
            </li>

            <li>
              <NavLink to="/connections">Connections</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/feed" className="flex items-center gap-3">
          <img
            src={logo}
            alt="DevVerse"
            className="w-10 h-10 object-contain"
          />
          <span className="text-2xl font-bold">DevVerse</span>
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <NavLink to="/feed">Feed</NavLink>
          </li>

          <li>
            <NavLink to="/requests">Requests</NavLink>
          </li>

          <li>
            <NavLink to="/connections">Connections</NavLink>
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          { user && <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src={user?.photoURL}
              />
            </div>
          </div>}

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>

            <li>
              <NavLink to="/profile/editProfile">Edit Profile</NavLink>
            </li>

            <div className="divider my-1"></div>

            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;