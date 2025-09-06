import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //two usestate for num and type like linear or gradient
  const [num, setNum] = useState(12);
  const [type, setType] = useState("linear");

  //usestate to handle how many times divs or colors needs to create with empty array
  const [gradients, setGradients] = useState([]);

  //function to convert rgb to hex color code
  const getHexColorCode = () => {
    // alert("hello");

    //everytime we need different rgb value to generate different hex code
    const rgb = 255 * 255 * 255;
    const random = Math.random() * rgb;
    // alert(random);
    const int = Math.floor(random);
    // // alert(int);

    const hexCode = int.toString(16);
    // alert(hexCode);
    const colorHex = hexCode.padStart(6, "0");
    // alert(colorHex);
    return `#${colorHex}`;
  };

  //logic to generate how many times gradient is generated
  const generateGradient = () => {
    // alert("Hello");

    // one empty array to push for value to our usestate gradients
    //  we can't update gradient through loop and create push function
    const colors = [];

    for (let i = 0; i < num; i++) {
      // console.log("Hello");

      const color1 = getHexColorCode();
      const color2 = getHexColorCode();
      const degree = Math.floor(Math.random() * 360);
      // console.log(degree, color1, color2);

      const degreeString = `${degree}deg`;
      colors.push({
        gradient: `linear-gradient(${degreeString}, ${color1}, ${color2})`,
        css: `background: linear-gradient(${degreeString}, ${color1}, ${color2});`,

        //css is for copy which we gonna create function called onCopy
      });
    }
    setGradients(colors);
  };

  //define oncopy function
  const onCopy = (css) => {
    // console.log(css);
    navigator.clipboard.writeText(css);
    toast.success("Copied", { position: "top-center" });
  };

  //useeffect to generate gradient
  useEffect(() => {
    generateGradient();
    //calls the generategradient function
  }, [num]);

  return (
    <>
      <div className="min-h-screen bg-white py-12">
        <div className="w-9/12 mx-auto space-y-8">
          <div className="flex justify-between ">
            <h1 className="text-3xl font-bold"> 🎨 Gradient Generator</h1>
            <div className="flex gap-4 ">
              <input
                value={num}
                type="text"
                className="border border-slate-300 bg-white rounded-lg w-[100px] p-2"
                placeholder="12"
                onChange={(e) => setNum(Number(e.target.value))}
              />

              <select
                value={type}
                className="border border-slate-100 bg-white rounded-lg w-[100px]"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="linear">Linear</option>
                <option value="radial">Radial</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {/* map function to run loop and create colors divs */}
            {gradients.map((items, index) => (
              <div
                key={index}
                className="h-[180px] rounded-xl relative"
                style={{ background: items.gradient }}
              >
                <button
                  onClick={() => onCopy(items.css)}
                  className="  bg-black/50 hover:bg-black cursor-pointer text-xs
               text-white rounded absolute bottom-3 right-3 p-1 py-1 px-2"
                >
                  COPY
                </button>
              </div>
            ))}
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
