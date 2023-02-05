import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks";
import Event from "./Event/page/Event";

const Home = () => {
  const {events} = useLocalStorage();
  return (
    <section className="home py-10 max-w-[1140px] my-0 mx-auto">
      <div className="text-center">
        <span className="text-white font-bold text-5xl ">Events</span>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <ul className="flex items-center gap-x-10">
          <li className="bg-[#f5f5f5] rounded-[100px] font-medium text-[#525252] px-3 py-[6px] cursor-pointer text-sm">
            All
          </li>
          <li name="" className="font-medium text-[#949499] px-3 py-[6px] cursor-pointer text-sm">
            Active
          </li>
          <li className="font-medium text-[#949499] px-3 py-[6px] cursor-pointer text-sm">
            Not Started
          </li>
          <li className="font-medium text-[#949499] px-3 py-[6px] cursor-pointer text-sm">
            Expired
          </li>
        </ul>
        <div className="w-[280px]">
          <input
            type="text"
            placeholder="Enter name event"
            className="text-sm pl-[30px] pr-[15px] h-10 leading-10 border border-solid border-[#636366] inline-block w-full bg-[#3a3a3c] rounded-lg text-white"
          />
        </div>
      </div>
      <div className="mt-5">
        <Event events={events} />
      </div>
    </section>
  );
};

export default Home;
