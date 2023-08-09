import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white w-[30rem] space-y-5 py-[4rem] rounded-xl">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Myke Chat</h1>
        <p className="text-sm">LogIn</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5 px-[4rem] ">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            placeholder="email"
            onChange={handleEmailChange}
            className="py-3 px-2 border"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={handlePasswordChange}
            className="py-3 px-2 border"
          />
          <button
            type="submit"
            className="border text-white font-[400] py-3 bg-[#3E3C62] rounded"
          >
            Sign In
          </button>
          <p>
            You don't have an account?{" "}
            <span className="underline font-bold">
              <Link to={"/register"}>Register</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
