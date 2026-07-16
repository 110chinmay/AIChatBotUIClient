import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle"); // 'idle' | 'uploading' | 'success' | 'error'

  // Capture the chosen file from the input event
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setStatus("idle");
    }
  };

  // Send the file data to the server
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    setStatus("uploading");

    // FormData formats binary file data for multipart/form-data requests
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/file_upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        setFile(null); // Clear input on success
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setStatus("error");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h3>Upload a File</h3>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} />

        {file && (
          <p>
            Selected: <strong>{file.name}</strong>
          </p>
        )}

        <button type="submit" disabled={status === "uploading"}>
          {status === "uploading" ? "Uploading..." : "Upload!"}
        </button>
      </form>

      {status === "success" && (
        <p style={{ color: "green" }}>File uploaded successfully!</p>
      )}
      {status === "error" && (
        <p style={{ color: "red" }}>Upload failed. Try again.</p>
      )}
    </div>
  );
};

export default FileUpload;
