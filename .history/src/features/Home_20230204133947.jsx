import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks";
import Event from "./Event/page/Event";

const Home = () => {
  const events = useLocalStorage();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(events);
  const handleCategorySelect = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <section className="home py-10 max-w-[1140px] my-0 mx-auto">
      <div className="text-center">
        <span className="text-white font-bold text-5xl">Events</span>
      </div>
      <div className="mt-10 flex items-center justify-between">
      <select className="flex items-center gap-x-10" onChange={handleCategorySelect} value={selectedCategory}>
        <option className="bg-[#f5f5f5] rounded-[100px] font-medium text-[#525252] px-3 py-[6px] cursor-pointer text-sm" value="">All </option>
        <option className="font-medium text-[#949499] px-3 py-[6px] cursor-pointer text-sm" value="Active">Active</option>
        <option className="font-medium text-[#949499] px-3 py-[6px] cursor-pointer text-sm" value="Not Started">Not Started</option>
        <option className="font-medium text-[#949499] px-3 py-[6px] cursor-pointer text-sm" value="Expired">Expired</option>
      </select>
        <div className="w-[280px]">
          <input
            type="text"
            placeholder="Enter name event"
            className="text-sm pl-[30px] pr-[15px] h-10 leading-10 border border-solid border-[#636366] inline-block w-full bg-[#3a3a3c] rounded-lg text-white"
          />
        </div>
      </div>
      <div className="my-5 flex justify-end">
        <Link
          to="/add"
          style={{
            background: "linear-gradient(239deg,#3262dd,#7af4ae 98.78%)",
          }}
          className=" block text-sm text-white rounded-[20px] py-3 px-[43px]"
        >
          Add Event
        </Link>
      </div>
      <div className="mt-5">
        {events.length > 0 ? (
          <Event events={events} />
        ) : (
          <div className="text-center">
            <span className="text-white font-medium text-lg">
              No events have been created yet.
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
