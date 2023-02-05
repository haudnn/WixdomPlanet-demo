import { Link } from "react-router-dom";
import EventItem from "../components/EventItem";
import React, { useEffect, useState } from "react";
const Event = ({events}) => {
  return (
    <div className="event">
      <div className="mb-10 flex justify-end">
        <button
          style={{
            background: "linear-gradient(239deg,#3262dd,#7af4ae 98.78%)",
          }}
          className="text-sm text-white rounded-[20px] py-3 px-[43px]"
        >
          <Link to="/add">Add Event</Link>
        </button>
      </div>
      <div className="grid">
        <div className="row">
          {
            events.map((event, i) => (
              <EventItem
                key={i}
                name={event.name}
                reward={event.reward}
                file={event.file}
                introduction={event.introduction}
                during={event.during}
              ></EventItem>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Event;
