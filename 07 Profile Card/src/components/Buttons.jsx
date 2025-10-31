import React from "react";

const Buttons = (props) => {
  return (
    <div className="bg-blue-400 text-white rounded-full px-5 py-3 mt-[1rem]">
      {props.text}
    </div>
  );
};

export default Buttons;
