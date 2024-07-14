import "./prevMessage.style.css";
import { PREV_MESSAGE_API } from "../../api";
import axios from "axios";
import { useEffect, useContext } from "react";
import { DataContext } from "../contex/contextFile";

const PreviousMessage = () => {
  const data = useContext(DataContext);

  const checkPrevMessage = async () => {
    try {
      console.log(data.profileUser);
      console.log("data.logIn", data.logIn);
      const response = await axios.get(
        `${PREV_MESSAGE_API}/${data.profileUser}`
      );
      data.setArrayRecieved(response.data || []);
    } catch (error) {
      console.error("Error fetching previous messages:", error);
    }
  };

  const handlePrevQuestionClick = (element) => {
    data.setInput(element.question);
    data.setAnswer(element.assistant);
  };

  useEffect(() => {
    // if(data.answer)
    checkPrevMessage();
  }, [data.profileUser]);

  return (
    <div className="PreviousMessageContainer">
      <strong>Previous Asked Questions...</strong>
      {data.arrayRecieved.length > 0 ? (
        data.arrayRecieved.map((ele, ind) => (
          <div key={ind} onClick={() => handlePrevQuestionClick(ele)}>
            {ele.question}
          </div>
        ))
      ) : (
        <div>No previous questions found.</div>
      )}
    </div>
  );
};

export default PreviousMessage;
