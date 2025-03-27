// ForgotPassword.js
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    setError("");

    // Send a password reset request to the backend (example logic)
    // This is where you would typically make an API request to trigger the reset password process.
    // You would use Axios or Fetch to communicate with the backend.

    setMessage("If an account with that email exists, a reset link will be sent to your email.");
    setEmail(""); // Clear the input field after submission
  };

  return (
    <>
    <br /><br />
    <div className="d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center text-dark mb-3">Forgot Your Password?</h2>

        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Enter your Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Reset Password
          </button>
        </form>
      </div>
    </div>
    <br /><br />
    </>
  );
};

export default ForgotPassword;
