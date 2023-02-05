import React from "react";

const AddEvent = () => {
  return (
    <section className="add flex items-center justify-center mt-5">
      <div>
        <p className="font-bold text-2xl text-white">Add Event</p>
        <div className="form mt-5">
          <form action="">
            <div>
              <label htmlFor="" className="text-white text-base">Name Event</label>
              <input type="text" placeholder="Enter name event here..." />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddEvent;
