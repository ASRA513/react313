import React from "react";
import { BiCard } from "react-icons/bi";
import { GiGluttonousSmile } from "react-icons/gi";
import Card from "./card";

const MainScreen = () => {
  return (
    <>
      <div className="container shadow-2xl xl:w-[25%] lg:w-[35%] md:w-[50%] w-[90%] overflow-hidden   mx-auto mt-5 rounded-md">
        <div className="flex bg-green-500 p-5 ">
          <div className="flex gap-3">
            <GiGluttonousSmile size={45} color="white" />
            <div className="">
              <h2 className="text-xl font-semibold text-white">
                {" "}
                Start A Conversation
              </h2>
              <p className="text-white">
                {" "}
                Hi! Click one of our member below to chat on{" "}
                <b className="text-yellow-300"> Wattsapp</b>
              </p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <p className="text-gray-500">
            The team typically replies in a few minutes
          </p>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default MainScreen;
