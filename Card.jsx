import React from "react";

const Card = () => {
  return (
    <>
      <div className=" items-center justify-between p-4 flex shadow-green-400  shadow mt-2   rounded gap-3 border border-t-0 border-3 border-e-0 border-b-0 border-green-600 shadow-green-300">
        <div className="flex gap-3 items-center">
          <img
            className="w-[70px] h-[70px] rounded-full object-cover   "
            src="https://akcdn.detik.net.id/visual/2024/09/18/kim-woo-bin-2_43.jpeg?w=720&q=90"
            alt=""
          />
          <div className="">
            <h2 className="font-semibold ">Kim Woo Bin</h2>
            <p className="text-gray-500 ">Actor/Model</p>
          </div>
        </div>
        <div className="h-[20px] w-[20px] rounded-full bg-green-500"></div>
      </div>
    </>
  );
};
export default Card;
