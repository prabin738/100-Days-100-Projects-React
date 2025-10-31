import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="grid grid-cols-4 gap-85 ">
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}

export default App;
