import { NavLink } from "react-router-dom";
import Style from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={Style.sidebarMain}>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${Style.sidebarLink} ${isActive ? Style.sidebarLinkActive : ""}`
        }
      >
        All Movies
      </NavLink>
      <NavLink
        to="/tv-series"
        className={({ isActive }) =>
          `${Style.sidebarLink} ${isActive ? Style.sidebarLinkActive : ""}`
        }
      >
        All Tv Series
      </NavLink>
    </div>
  );
}
