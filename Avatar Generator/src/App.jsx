import "remixicon/fonts/remixicon.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-800 text-white">
        <div className=" gap-6 flex flex-col items-center w-full max-w-md h-full  rounded-2xl shadow-xl backdrop-blur-xl border border-slate-700 p-10 ">
          <img
            className="w-32 h-32 rounded-full border-4 border-slate-700 shadow-lg object-cover"
            src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
            alt=""
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
            <select className="bg-slate-900/60 w-full p-3 rounded-xl">
              <option>Male</option>
            </select>
            <div className="bg-slate-900/60 w-full p-3 rounded-xl">
              https://prabinsinghthakuri.com.np
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
