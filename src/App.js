import "./App.css";
import { useContext } from "react";
import Chat from "./components/Chat/chat";
import Navbar from "./components/navbar/Navbar";
import PreviousMessage from "./components/PrevMessages/prevMessage";
import { DataContext } from "./components/contex/contextFile";
import Signup from "./components/Profile/Signup";
import Login from "./components/Profile/Login";

function App() {
  const data = useContext(DataContext);
  return (
    <div>
      <Navbar />
      <div className="mainContent">
        {data.page === "signup" ? (
          <Signup />
        ) : data.page === "login" ? (
          <Login />
        ) : (
          <>
            <Chat />
            <PreviousMessage />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
