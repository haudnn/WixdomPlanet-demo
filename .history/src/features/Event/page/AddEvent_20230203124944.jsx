import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
const AddEvent = () => {
  const [event, setEvent] = useState({
    nameEvent:"",
    reward:"",
    introduction: ""
  });
  const handleEventChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value)
    setEvent((prev) => {
        return {
            ...prev,
            name: value
        }
    })
  }
  const [dateTime, setDateTime] = useState(new Date());
  const [file, setFile] = useState();
  const handleUploadImage = (e) => {
    // console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <section className="add flex items-center justify-center my-5">
      <div>
        <p className="font-bold text-2xl text-white">Add Event</p>
        <div className="form mt-5">
          <form action="">
            <div className="mb-5">
              <label htmlFor="" className="text-white text-base">
                Name Event:
              </label>
              <div className="mt-3 w-[450px]">
                <input
                  type="text"
                  name="nameEvent"
                  value={event.nameEvent}
                  onChange={() => handleEventChange}
                  placeholder="Enter name event here..."
                  className="text-sm px-[15px] h-10 leading-10 border border-solid border-[#636366] inline-block w-full bg-[#3a3a3c] rounded-lg text-white"
                />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="" className="text-white text-base">
                Reward:
              </label>
              <div className="mt-3 w-[450px]">
                <input
                  type="text"
                  placeholder="Enter reward here..."
                  className="text-sm px-[15px] h-10 leading-10 border border-solid border-[#636366] inline-block w-full bg-[#3a3a3c] rounded-lg text-white"
                />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="" className="text-white text-base">
                During:
              </label>
              <div className="mt-3">
                <div className="mb-5 flex items-center gap-x-5">
                  <label
                    htmlFor=""
                    className="text-white text-base block w-[72px]"
                  >
                    Start time:
                  </label>
                  <DateTimePicker
                    className="text-[#bdbcbc]"
                    onChange={setDateTime}
                    value={dateTime}
                  />
                </div>
                <div className="mb-5 flex items-center gap-x-5">
                  <label
                    htmlFor=""
                    className="text-white text-base block w-[72px]"
                  >
                    End time:
                  </label>
                  <DateTimePicker
                    className="text-[#bdbcbc]"
                    onChange={setDateTime}
                    value={dateTime}
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="" className="text-white text-base">
                Project Introduction:
              </label>
              <div className="mt-3">
                <textarea
                  rows={5}
                  className="text-sm p-[15px] block w-full bg-[#3a3a3c] rounded-lg text-white"
                  placeholder="Enter project introduction here..."
                ></textarea>
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="" className="text-white text-base">
                Add Image:
              </label>
              <div className="mt-3">
                <input
                  type="file"
                  className="text-white"
                  onChange={handleUploadImage}
                />
                <img
                  src={file}
                  className="mt-5 w-full max-h-[200px] object-cover rounded-lg"
                />
              </div>
            </div>{" "}
            <button
              style={{
                background: "linear-gradient(239deg,#3262dd,#7af4ae 98.78%)",
              }}
              className="text-sm text-white rounded-[20px] py-3 px-[43px] block w-full"
            >
              Add Event
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddEvent;
