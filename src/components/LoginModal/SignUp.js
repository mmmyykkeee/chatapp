import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [file, setFile] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFileUpload = (e) => {
    setFile(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white w-[30rem] space-y-5 py-[4rem] rounded-xl">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Myke Chat</h1>
        <p className="text-sm">Register</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-3 px-[4rem] ">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={handleUsernameChange}
            className="py-3 px-2 border"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            placeholder="Email"
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
          <label htmlFor="password">Avatar</label>
          <input
            type="file"
            value={file}
            onChange={handleFileUpload}
            className="py-3 px-2"
          />
          <button
            type="submit"
            className="border text-white font-[400] py-3 bg-[#3E3C62] rounded"
          >
            Sign Up
          </button>
          <p>
            You have an account?{" "}
            <span className="underline font-bold">
              <Link to={"/"}>Sign In</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
