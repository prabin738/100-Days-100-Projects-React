import React from "react";

const UserCard = () => {
  return (
    <div className="w-[20rem] h-[30rem] bg-red-400 rounded-xl overflow-hidden">
      <div className="w-full h-[10rem] bg-blue-400">
        <img
          className="h-full rounded-full aspect-square object-cover"
          src="https://img.freepik.com/free-photo/young-smiling-teen-happy-woman-making-selfie-street-ling-hairs-bright-make-up-cute-clear-glasses-traveling-alone-having-fun-positive-mood-joy-vacation_291049-2130.jpg?semt=ais_hybrid&w=740&q=80"
          alt="err loading image"
        />
      </div>
    </div>
  );
};

export default UserCard;
