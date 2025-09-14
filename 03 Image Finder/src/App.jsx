import React from "react";
import "animate.css";

const App = () => {
  return (
    <div
      className="bg-gray-400 min-h-screen flex flex-col gap-8
     items-center animate__animated animate__fadeIn"
    >
      <h1 className="text-4xl font-bold text-indigo-600 py-8 ">
        📸 Image Gallery
      </h1>
      <form>
        <input
          className=" p-3 bg-white rounded-l-lg w-[400px] focus:outline-indigo-500"
          placeholder="Search Image Here"
          required
        />
        <button
          className="bg-gradient-to-br from-indigo-600 via-blue-500 to-indigo-600
         text-white font-bold py-3 px-8 rounded-r-lg 
          hover:scale-105 transition-transform cursor-pointer"
        >
          Search
        </button>
      </form>
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-12 gap-8 w-9/12 ">
        {Array(24)
          .fill(0)
          .map((items, index) => (
            <div key={index} className="bg-white rounded-2xl p-12"></div>
          ))}
      </div>
    </div>
  );
};

export default App;
