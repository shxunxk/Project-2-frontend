import React from "react";
import Cards from "../Components/Cards";

export default function Home() {
  return (
    <div className="m-10">
      <h3 className="text-2xl font-bold">Datasets</h3>
      <div className="my-5 flex gap-4 overflow-x-auto whitespace-nowrap p-4 w-full">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="h-64 w-96">
            <Cards />
          </div>
        ))}
      </div>
    </div>
  );
}
