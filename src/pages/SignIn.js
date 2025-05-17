import React, { useState } from 'react';



const SignIn = () => {

const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Login successful!");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 w-50">
        <h2 className="text-center display-6"><strong>Login</strong></h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary bg-dark w-100">
            Login
          </button>
        </form>
                      <div className="text-center mt-3">
                <a href="/forgot-password">Forgot password?</a>
              </div>
              <div className="text-center mt-2">
                Don't have an account? <a href="/register">Register</a>
              </div>
      </div>
    </div>
  );
};

export default SignIn;
