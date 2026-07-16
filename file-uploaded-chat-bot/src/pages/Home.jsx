import ChattingBox from "../components/ChattingBox";
import FileUpload from "../Components/FileUpload";

function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "97vh",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            padding: "25px",
            width: "20%",
            border: "2px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FileUpload />
        </div>
        <div
          style={{ padding: "25px", border: "2px solid black", width: "70%" }}
        >
          Chatting Application
          <ChattingBox />
        </div>
      </div>
    </>
  );
}

export default Home;
