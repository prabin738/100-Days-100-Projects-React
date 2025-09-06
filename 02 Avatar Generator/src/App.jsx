import "remixicon/fonts/remixicon.css";
import "animate.css";
import "./App.css";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

//array to store data
const data = [
  {
    label: "Illustration",
    value: "illustration",
    url: " https://api.dicebear.com/7.x/avataaars/svg?seed= ",
  },
  {
    label: "Sketchy",
    value: "sketchy",
    url: " https://api.dicebear.com/7.x/croodles/svg?seed=",
  },
  {
    label: "Cartoon",
    value: "cartoon",
    url: " https://api.dicebear.com/7.x/adventurer/svg?seed= ",
  },
  {
    label: "Robots",
    value: "robots",
    url: " https://api.dicebear.com/7.x/bottts/svg?seed= ",
  },
  {
    label: "Art",
    value: "art",
    url: "https://api.dicebear.com/7.x/pixel-art/svg?seed=",
  },
  {
    label: "Men",
    value: "men",
    url: "http://randomuser.me/api/portraits/men",
  },
  {
    label: "Women",
    value: "women",
    url: "http://randomuser.me/api/portraits/women",
  },
];

function App() {
  //usestate
  const [src, setSrc] = useState(null);
  const [option, setOption] = useState("men");

  //function to generate random number between 1 and 100
  const generateNumForPerson = () => {
    const r = Math.floor(Math.random() * 99) + 1;
    return r;
  };

  //urls http://api.dicebear.com/7.x/avataaars/svg?seed=12
  // https://api.dicebear.com/7.x/adventurer/svg?seed=13
  // https://api.dicebear.com/7.x/croodles/svg?seed=
  // https://api.dicebear.com/7.x/bottts/svg?seed=
  // https://api.dicebear.com/7.x/pixel-art/svg?seed=
  // http://randomuser.me/api/portraits/men/{id}.jpg
  // http://randomuser.me/api/portraits/men/{id}.jpg

  //function to create avatars

  const generate = () => {
    // alert("hello");
    // alert(option);
    const obj = data.find((item) => item.value === option);
    // console.log(obj);
    const url = obj.url;
    // console.log(url);

    //if else statement to identify which value is selected
    if (option === "men" || option === "women") {
      // console.log(url);

      const imageUrl = `${url}/${generateNumForPerson()}.jpg`;
      setSrc(imageUrl);
    } else {
      const uniqueValue = Date.now();
      // console.log(uniqueValue);
      const imageUrl = `${url}${uniqueValue}`;
      // console.log(imageUrl);
      setSrc(imageUrl);
    }
  };

  const onOptionChange = (e) => {
    const value = e.target.value;
    // alert(value);

    setOption(value);
  };

  //download function
  const download = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = `${Date.now()}.jpg`;
    a.click();
    a.remove();
  };

  //function to copy link
  const copy = (url) => {
    navigator.clipboard.writeText(url);
    toast.success("Image URL Copied", { position: "top-center" });
  };

  useEffect(() => {
    generate();
  }, [option]);

  return (
    <>
      <div className="  animate__animated animate__fadeIn overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-800 text-white">
        <div className="animate__animated animate__bounceIn  gap-6 flex flex-col items-center w-full max-w-md h-full  rounded-2xl shadow-xl backdrop-blur-xl border border-slate-700 p-10 ">
          <img
            className="w-32 h-32 rounded-full border-4 border-slate-700 shadow-lg object-cover"
            src={src || "/avt.png"}
          />
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-wide">
              Avatar Generator
            </h1>
            <p className="text-slate-300">
              Generate Unlimited Avatars for your website
            </p>
          </div>

          <div className="w-full space-x-6 space-y-4">
            <select
              className="bg-slate-900/60 w-full p-3 rounded-xl"
              value={option}
              onChange={onOptionChange}
            >
              {/* loop and map function to run the above array data */}
              {data.map((items, index) => (
                <option key={index} value={items.value}>
                  {" "}
                  {items.label}{" "}
                </option>
              ))}
            </select>
            <div className="bg-slate-900/60 w-full p-3 rounded-xl">{src}</div>
          </div>
          <div className="flex w-full gap-4">
            <button
              onClick={generate}
              className=" flex-1 bg-gradient-to-r from-rose-500 to-orange-600 font-medium rounded-lg py-2
            hover:scale-105 transition-transform cursor-pointer
            "
            >
              <i className="ri-arrow-right-up-line mr-1"></i>
              Change
            </button>
            <button
              onClick={() => download(src)}
              className=" flex-1 bg-gradient-to-r from-green-500 to-cyan-600 font-medium rounded-lg py-2
            hover:scale-105 transition-transform cursor-pointer
            "
            >
              <i className="ri-download-line mr-1"></i>
              Download
            </button>
            <button
              onClick={() => copy(src)}
              className=" flex-1 bg-gradient-to-r from-orange-500 to-amber-600 font-medium rounded-lg py-2
            hover:scale-105 transition-transform cursor-pointer
            "
            >
              <i className="ri-file-copy-line mr-1"></i>
              Copy
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
