import Cards from "../Components/Cards";
import FileUpload from "../Components/UploadDoc";
import SearchBar from "../Components/SearchBar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {


  let user = Cookies.get('user')
  user = JSON.parse(user)

  const [searchResults, setSearchResults] = useState([]); // Store search results

  const handleSearch = async (query) => {
    try {
      const response = await axios.get("http://localhost:5000/pdfs/search", {
        params: { query },
      });
      console.log("Search response:", response.data); // Log the entire response
      setSearchResults(response.data || []); // Update search results
    } catch (error) {
      console.error("Error fetching search results:", error.message);
    }
  };

  return (
    <div className="m-10 flex-row">
      <div className="my-10">
      <SearchBar onSearch={handleSearch} />
        <div className="my-5 flex gap-4 overflow-x-auto whitespace-nowrap p-4 w-full rounded-lg">
          {searchResults.map((item, index) => (
            <div key={index} className="h-64 w-96">
              <Cards title={item?.filename||""} description={item?.description||""} by={item?.userId||""}/>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10">
      <FileUpload/>
      </div>
      {/* <div className="my-10">
      <h3 className="text-2xl font-bold">Explore Datasets</h3>
        <div className="my-5 flex gap-4 overflow-x-auto whitespace-nowrap p-4 w-full rounded-lg">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="h-64 w-96">
              <Cards />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
