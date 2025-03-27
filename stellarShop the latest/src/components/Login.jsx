import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Login = ({ openSignUp, setIsModelOpen }) => {
  const handleforgotpasswordclick = () => {
    setIsModelOpen(false); // Close the modal when the terms link is clicked
  };
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="bg-white p-4 rounded shadow-sm w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center text-dark mb-4">Login</h2>
        <form onSubmit={(e)=>e.preventDefault()}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
            </div>
            <div><Link to="/forgot-password" className="text-decoration-none" onClick={handleforgotpasswordclick}>
              Forgot Password?
            </Link></div>
            
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="text-center mt-3">
          <span>Don't have an account? </span>
          <button className="btn btn-link p-0 text-primary" onClick={openSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
