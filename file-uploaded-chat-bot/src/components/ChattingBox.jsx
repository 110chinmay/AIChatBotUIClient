import React, { useState } from "react";
import Chat from "./chat";

function ChattingBox() {
  const [getInput, setGetInput] = useState("");
  const [chatInfo, setChatInfo] = useState([]);

  function onTextChange(e) {
    setGetInput(e.target.value);
  }

  function onButtonClick() {
    const question = getInput;
    setChatInfo((prev) => [
      ...prev,
      {
        client: question,
        server: [],
        loading: true,
      },
    ]);
    setGetInput("");
    fetch("http://localhost:8000/userQuery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: getInput }),
    })
      .then((response) => response.json())
      .then((data) => {
        setGetInput("");
        setChatInfo((prev) => {
          const updated = [...prev];

          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            server: data.documents,
            loading: false,
          };

          return updated;
        });
      })
      .catch((error) => {
        console.error(error);
        setGetInput("");
        setChatInfo((prev) => {
          const updated = [...prev];

          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            server: "Something went wrong.",
          };

          return updated;
        });
      });
  }

  return (
    <div
      style={{
        display: "flex",
        height: "85vh",
        justifyContent: "space-between",
      }}
    >
      <div style={{ padding: "25px", width: "100%" }}>
        <Chat chatInfo={chatInfo} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <input
            style={{ width: "90%" }}
            value={getInput}
            onChange={onTextChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onButtonClick();
              }
            }}
          />
          <button onClick={onButtonClick}>Enter</button>
        </div>
      </div>
    </div>
  );
}

export default ChattingBox;
