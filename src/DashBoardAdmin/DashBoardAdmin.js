import HeaderAdmin from "./components/HeaderAdmin";
import { Outlet } from "react-router";
import "./style/DashBoard.css";

export default function DashBoardAdmin() {
  return (
    <div className="containerDashBoard">
      <HeaderAdmin />
      <Outlet />
    </div>
  );
}
