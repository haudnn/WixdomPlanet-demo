import { Link } from "react-router-dom";
import EventItem from "../components/EventItem";
import React, { useEffect, useState } from "react";
const Event = ({events}) => {
  return (
    <div className="event">
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
