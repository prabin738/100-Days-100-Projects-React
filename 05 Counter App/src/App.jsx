import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <h1>Counter App</h1>
        <p> Your Count: {count} </p>
        <div className="buttons">
          <button onClick={increment}>➕ INCREMENT</button>
          <button onClick={decrement}>➖ DECREMENT</button>
          <button
            onClick={function () {
              setCount(0);
            }}
          >
            🔄️ RESET
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
