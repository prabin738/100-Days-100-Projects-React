import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "animate.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="w-9/12 mx-auto py-10 space-y-8">
          <h1 className="text-4xl font-bold text-center">Image Storage</h1>
          <div className="flex flex-col items-center"></div>
        </div>
      </div>
    </>
  );
}

export default App;
