import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="grid grid-cols-4 gap-98 ">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}

export default App;
