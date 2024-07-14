import React, { useContext } from "react";
import "./chat.style.css";
import { DataContext } from "../contex/contextFile";

const Chat = () => {
  const data = useContext(DataContext);

  const handleClick = () => {
    data.callAPI(data.input);
  };

  return (
    <>
      <div className="wrapper">
        <div className="chatContainer">
          <div className="">
            <textarea
              className="inputBox"
              type="text"
              value={data.input}
              onChange={(e) => data.setInput(e.target.value)}
            />
          </div>
          <div className="">
            <button className="sendBtn" onClick={handleClick}>
              {" "}
              Send{" "}
            </button>
          </div>
        </div>
        <div className="resultDisplay">
          {data.answer === 0 ? <>Ask Financial Questions</> : data.answer}
        </div>
      </div>
    </>
  );
};

export default Chat;
