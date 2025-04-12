import axios from "axios";
import { useState } from "react";
import Cookies from 'js-cookie';

function FileUpload() {

  
let user = Cookies.get('user')
user = JSON.parse(user)

  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage("Please select a file first.");
      return;
    }

    // Simulate file upload process
    const formData = new FormData();
    formData.append("pdfFile", selectedFile); // Attach actual file
    formData.append("userId", user?.email); // Attach user ID

    try {
        const response = await axios.post("http://localhost:5000/pdfs/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        console.log("File upload response:", response.data);
        setMessage("File uploaded successfully!");
    } catch (error) {
      // Handle errors properly
      console.error("File upload error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white rounded-lg">
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