import React from "react";
import Cards from "../Components/Cards";
import FileUpload from "../Components/UploadDoc";
import SearchBar from "../Components/SearchBar";

export default function Home() {
  return (
    <div className="m-10 flex-row">
      <div className="my-10">
        <SearchBar/>
        <div className="my-5 flex gap-4 overflow-x-auto whitespace-nowrap p-4 w-full rounded-lg">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="h-64 w-96">
              <Cards />
            </div>
          ))}
        </div>
      </div>
      <div className="my-10">
      <FileUpload/>
      </div>
      <div className="my-10">
      <h3 className="text-2xl font-bold">Explore Datasets</h3>
        <div className="my-5 flex gap-4 overflow-x-auto whitespace-nowrap p-4 w-full rounded-lg">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="h-64 w-96">
              <Cards />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
