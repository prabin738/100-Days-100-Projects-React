import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "animate.css";
import { useEffect } from "react";
import axios from "axios";

const API_KEY = "";

function App() {
  //function to fetch image
  const fetchImage = () => {
    // console.log("Hello");
    // alert("Hello");
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <div className=" animate__animated animate__fadeIn bg-gray-100 min-h-screen flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-indigo-600 py-8">
          📸 Image Gallery
        </h1>
        <form className="space-x-4">
          <input
            className="p-3 bg-white rounded-l-lg w-[400px] focus:outline-indigo-600"
            placeholder="Search Image"
            required
          />
          <button className="text-white font-bold py-3 px-8 rounded-r-lg transition-transform hover:scale-105 cursor-pointer bg-gradient-to-br from-indigo-600 via-blue-500 to-indigo-600">
            Search
          </button>
        </form>
        <div className="grid lg:grid-cols-4 lg:gap-12 gap-8 w-9/12">
          {Array(24)
            .fill(0)
            .map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-12">
                {" "}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
