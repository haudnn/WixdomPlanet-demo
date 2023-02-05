import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks";
import Event from "./Event/page/Event";

const categorise = [
  {
    id: 0,
    name: "All",
  },
  {
    id: 1,
    name: "Active",
  },
  {
    id: 2,
    name: "Not started",
  },
  {
    id: 3,
    name: "Expired",
  },
];
const Home = () => {
  const events = useLocalStorage();
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [filteredEvents, setFilteredEvents] = useState([]);
  useEffect(() => {
    setFilteredEvents(events);
  }, [events]);
  const handleFilterEvents = (categoryId) => {
    if (categoryId === 0) {
      setFilteredEvents(events);
    } else {
      const filterEvents = events.filter((event) => {
        return categorise[categoryId].name === event.statusEvent;
      });
      setFilteredEvents(filterEvents);
    }
    setSelectedCategoryId(categoryId);
  };
  return (
    <section className="home py-10 max-w-[1140px] my-0 mx-auto">
      <div className="text-center">
        <span className="text-white font-bold text-5xl">Events</span>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <ul className="flex items-center gap-x-10">
          {categorise.map((category) => (
            <li
              onClick={() => handleFilterEvents(category.id)}
              key={category.id}
              name={category.name}
              className={`${
                selectedCategoryId === category.id ? "active" : ""
              } font-medium text-[#949499] px-3 py-[6px] cursor-pointer text-sm`}
            >
              {category.name}
            </li>
          ))}
        </ul>
        <div>
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
      </div>

      <div className="mt-5">
        <Event events={filteredEvents} />
      </div>
    </section>
  );
};

export default Home;
