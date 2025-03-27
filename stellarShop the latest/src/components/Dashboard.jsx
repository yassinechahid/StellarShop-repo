import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const totalProducts = useSelector((state) => state.product.products.length);
  const totalOrders = 5; // Replace with actual state later
  const totalUsers = 3; // Replace with actual state later

  return (
    <div>
      <h2>📊 Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-primary p-3">
            <h5>Total Products</h5>
            <p>{totalProducts}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-success p-3">
            <h5>Total Orders</h5>
            <p>{totalOrders}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-danger p-3">
            <h5>Total Users</h5>
            <p>{totalUsers}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
