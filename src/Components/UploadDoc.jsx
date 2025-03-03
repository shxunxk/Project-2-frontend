import { useState } from "react";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setMessage("Please select a file first.");
      return;
    }

    // Simulate file upload process
    setTimeout(() => {
      setMessage(`File ${selectedFile.name} uploaded successfully.`);
      setSelectedFile(null);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-center">Upload File</h2>
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4 w-full border p-2 rounded-lg"
        />
        <button
          onClick={handleUpload}
          className="w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Upload
        </button>
        {message && <p className="mt-4 text-sm text-green-500">{message}</p>}
      </div>
    </div>
  );
}

export default FileUpload;