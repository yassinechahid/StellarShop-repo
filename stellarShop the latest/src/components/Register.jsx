import React, { useState } from "react";
import { Link } from "react-router-dom"; // Keep Link from react-router-dom

const Register = ({ openLogin, setIsModelOpen }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    // Simple validation logic
    if (!formData.fullName) validationErrors.fullName = "Full Name is required";
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.password) validationErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) validationErrors.confirmPassword = "Passwords do not match";
    if (!formData.agreeToTerms) validationErrors.agreeToTerms = "You must agree to the terms";

    if (Object.keys(validationErrors).length === 0) {
      // Perform actual form submission here
      alert("Account created successfully!");
    } else {
      setErrors(validationErrors);
    }
  };

  const handleTermsClick = () => {
    setIsModelOpen(false); // Close the modal when the terms link is clicked
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center text-dark mb-3">Create an Account</h2>

        <form onSubmit={handleSubmit} className="mb-3">
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label fw-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-medium">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-medium">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="text-danger">{errors.password}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label fw-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="termsCheck"
              checked={formData.agreeToTerms}
              onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
            />
            <label className="form-check-label text-secondary" htmlFor="termsCheck">
              I agree to the
              <Link to="/termsandconditions" onClick={handleTermsClick} className="text-primary">
                terms and conditions
              </Link>
            </label>
            {errors.agreeToTerms && <div className="text-danger">{errors.agreeToTerms}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>

        <div className="text-center">
          <span className="text-secondary">Already have an account? </span>
          <button
            className="btn btn-link text-primary fw-medium text-decoration-none"
            onClick={openLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
