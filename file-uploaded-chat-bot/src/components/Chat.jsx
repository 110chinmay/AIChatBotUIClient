import React, { useEffect } from "react";

function Chat({ chatInfo }) {
  console.log("ChatInfo", chatInfo);
  useEffect(() => {
    console.log(chatInfo);
  }, [chatInfo]);
  return (
    <div
      style={{
        display: "flex",
        height: "75vh",
        justifyContent: "space-between",
        overflowY: "auto",
      }}
    >
      <div style={{ padding: "25px", width: "100%" }}>
        {chatInfo.map((chat, index) => (
          <div key={index}>
            <p>
              <b>You:</b> {chat.client}
            </p>
            <p>
              <b>Bot:</b>{" "}
              <div style={{ height: "20vh", overflowY: "auto" }}>
                {chat.loading
                  ? "..."
                  : chat?.server?.map((item, index) => (
                      <div key={index}>
                        <p>{item.content}</p>
                        <small>Page: {item.metadata.page}</small>
                      </div>
                    ))}
              </div>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
