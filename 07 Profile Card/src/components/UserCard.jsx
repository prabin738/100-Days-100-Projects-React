import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import { IoMdShareAlt } from "react-icons/io";
import Buttons from "./Buttons";

const UserCard = () => {
  return (
    <div className="w-[20rem] h-[30rem] shadow-2xl rounded-xl overflow-hidden">
      <div className="relative w-full h-[10rem] bg-blue-400">
        <img
          className=" absolute h-full rounded-full aspect-square object-cover translate-x-1/2 translate-y-1/4 border-4 border-blue-400 p-1 bg-white"
          src="https://img.freepik.com/free-photo/young-smiling-teen-happy-woman-making-selfie-street-ling-hairs-bright-make-up-cute-clear-glasses-traveling-alone-having-fun-positive-mood-joy-vacation_291049-2130.jpg?semt=ais_hybrid&w=740&q=80"
          alt="err loading image"
        />
      </div>
      {/* Bottom Part  */}
      <div className="flex flex-col items-center pt-[3rem]">
        <h1>Prabin Singh Thakuri</h1>
        <p>Software Engineer</p>
        <div className="flex gap-[1rem] pt-[1rem]">
          <FaFacebook className="bg-blue-600 p-2 text-white text-4xl rounded-full" />
          <AiFillTwitterCircle className="bg-blue-400 p-2 text-white text-4xl rounded-full" />
          <FaSquareInstagram className="bg-red-400 p-2 text-white text-4xl rounded-full" />
          <FaYoutube className="bg-red-600 p-2 text-white text-4xl  rounded-full" />
        </div>
        <div className="flex gap-[2rem]">
          <Buttons text="Subscribe" />
          <Buttons text="Message" />
        </div>
        <div className="flex items-center gap-[1rem]">
          <div className="flex items-center text-xl">
            <CiHeart />
            <span>60.4k</span>
          </div>
          <Line />
          <div className="flex items-center text-xl">
            <FiMessageCircle />
            <span>20k</span>
          </div>
          <Line />
          <div className="flex items-center text-xl">
            <IoMdShareAlt />
            <span>12.4k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Line = () => {
  return <div className="w-[1px] h-[1rem] bg-black/20"></div>;
};

export default UserCard;
