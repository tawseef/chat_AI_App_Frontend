import "./navbar.style.css";
import { DataContext } from "../contex/contextFile";
import { useContext } from "react";

const Navbar = () => {
  const data = useContext(DataContext);
  const handleClick = () => {
    if (data.page === "signup") {
      data.setPage("login");
    } else if (data.page === "login") {
      data.setPage("signup");
    } else if (data.page === "Chat") {
      data.setLogIn(false);
      data.setProfileUser("");
      data.setPage("signup");
    }
  };

  return (
    <div className="NavbarContainer">
      <div>ai-App</div>

      <button className="logBtn" onClick={handleClick}>
        {data.page === "login"
          ? "Signup"
          : data.page === "signup"
          ? "Login"
          : "Logout"}
      </button>
    </div>
  );
};

export default Navbar;
