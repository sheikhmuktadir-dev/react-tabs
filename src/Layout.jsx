import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";

export default function Layout() {
  return (
    <div className="layoutStructure">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
