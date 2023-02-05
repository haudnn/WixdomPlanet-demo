import { Link } from "react-router-dom";
import EventItem from "../components/EventItem";

const Event = () => {
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
          <EventItem></EventItem>
        </div>
      </div>
    </div>
  );
};

export default Event;
