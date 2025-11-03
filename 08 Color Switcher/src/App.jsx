import Button from "./components/Button";
import "./App.css";

function App() {
  //Color array
  const color = ["pink", "blue", "red", "yellow"];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 ">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        🎨Color Switcher
      </h1>
      {/* Map Function to map colors  */}
      <div className="flex flex-row gap-3">
        {color.map((item) => (
          <button
            key={item}
            color={item}
            className="  mb-2 text-black font-semibold py-2 px-6 rounded-md shadow-md transition duration-300 cursor-pointer"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
