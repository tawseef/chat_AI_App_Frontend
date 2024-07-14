import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { SAVE_API, OpenAiAPI } from "../../api";

export const DataContext = createContext(null);

export const DataProvider = (props) => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState(0);
  const [arrayRecieved, setArrayRecieved] = useState([]);
  const [page, setPage] = useState("signup");
  const [logIn, setLogIn] = useState(false);
  const [profileUser, setProfileUser] = useState("");

  const saveingInDB = async () => {
    try {
      console.log(">>", profileUser);
      console.log(">", answer);
      if (profileUser && input && answer)
        await axios.post(`${SAVE_API}`, {
          user: `${profileUser}`,
          question: `${input}`,
          answer: `${answer}`,
          logIn: `${logIn}`,
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (answer) saveingInDB();
  }, [answer]);

  const callAPI = async (question) => {
    const URL = `${OpenAiAPI}`;
    try {
      const fetch = await axios.post(`${URL}`, {
        question: `${question}`,
        logIn: `${logIn}`,
      });
      if (fetch) {
        console.log(fetch);
        setAnswer(fetch.data[0].content);
        // saveingInDB();
      } else setAnswer("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DataContext.Provider
      value={{
        input,
        setAnswer,
        answer,
        setInput,
        arrayRecieved,
        setArrayRecieved,
        saveingInDB,
        callAPI,
        page,
        setPage,
        logIn,
        setLogIn,
        profileUser,
        setProfileUser,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
