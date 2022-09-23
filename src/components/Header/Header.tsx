import { NavLink, Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <NavLink className="nav-item" to="/" key="">
            Home
          </NavLink>
          <NavLink className="nav-item" to="/user" key="">
            User
          </NavLink>
          <NavLink className="nav-item" to="/task" key="">
            Task
          </NavLink>
        </div>
        <input className="search" />
        <NavLink className="nav-item" to="/login" key="">
          Logout
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
