import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../Adminlayout.css'
const AdminLayout = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark vh-100 p-3" style={{ width: "180px" }}>
        <h4 className="text-white">Admin Panel</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link sidebar-link" to="/admin/dashboard">
              📊 Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link sidebar-link" to="/admin/products">
              📦 Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link sidebar-link" to="/admin/orders">
              🛒 Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link sidebar-link" to="/admin/users">
              👤 Users
            </Link>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
