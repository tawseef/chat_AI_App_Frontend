import React, { useState, useContext } from "react";
import { LOGIN } from "../../api";
import axios from "axios";
import { DataContext } from "../contex/contextFile";
import "./logcss.css";

const Login = () => {
  const data = useContext(DataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (user_email, user_password) => {
    const response = await axios.post(`${LOGIN}`, {
      email: user_email,
      password: user_password,
    });
    if (response.data.isLoggedIn === true) {
      data.setLogIn(true);
      data.setProfileUser(response.data.username);
      data.setPage("Chat");
    }
  };
  return (
    <div className="log_Div">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(email, password);
        }}
      >
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
            LOGIN{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
