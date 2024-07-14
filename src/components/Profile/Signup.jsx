import React, { useState, useContext } from "react";
import { SIGN_UP } from "../../api";
import axios from "axios";
import { DataContext } from "../contex/contextFile";
import "./logcss.css";

const Signup = () => {
  const data = useContext(DataContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (username, user_email, user_password) => {
    const response = await axios.post(`${SIGN_UP}`, {
      name: username,
      email: user_email,
      password: user_password,
    });
    if (response.data.message === "Signup Successful") {
      data.setPage("login");
    }
  };
  return (
    <div className="log_Div">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(name, email, password);
        }}
      >
        <div>
          <input
            type="text"
            className="commonField"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            className="commonField"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
        </div>
        <div>
          <input
            type="password"
            className="commonField"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
        </div>
        <div>
          <button type="submit" className="commonField h-50">
            {" "}
            SIGN UP{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
