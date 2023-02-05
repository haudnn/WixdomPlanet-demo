import React from "react";

const AddEvent = () => {
  return (
    <section className="add flex items-center justify-center mt-5">
      <div>
        <p className="font-bold text-2xl text-white">Add Event</p>
        <div className="form mt-5">
          <form action="">
            <div>
              <label htmlFor="" className="text-white text-base">
                Name Event
              </label>
              <div className="">
                <input
                  type="text"
                  placeholder="Enter name event"
                  className="text-sm px-[15px] h-10 leading-10 border border-solid border-[#636366] inline-block w-full bg-[#3a3a3c] rounded-lg text-white"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddEvent;
