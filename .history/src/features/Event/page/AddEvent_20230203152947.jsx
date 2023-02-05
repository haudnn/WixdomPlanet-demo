import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { useNavigate } from "react-router-dom";
import formatDate from "../../../utils/formatDate";

const AddEvent = () => {
  const [event, setEvent] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    reward: "",
    introduction: "",
    during: {
      startTime: new Date(),
      endTime: new Date(),
    },
    file: "",
  });
  const handleDataChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleUploadImage = (e) => {
    setData({ ...data, file: URL.createObjectURL(e.target.files[0]) });
  };
  const handleChangeTimeStart = (value) => {
    setData({
      ...data,
      during: {
        ...data.during,
        startTime: value,
      },
    });
  };
  const handleChangeTimeEnd = (value) => {
    setData({
      ...data,
      during: {
        ...data.during,
        endTime: value,
      },
    });
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setData({ ...data,
    during: {
      startTime : await formatDate(data.during.startTime),
      endTime : await formatDate(data.during.endTime)
    }
    })
    event.push(data)
    localStorage.setItem('eventList', JSON.stringify(event));
    navigate("/")
  };

  useEffect(() => {
    const isEnventList = JSON.parse(localStorage.getItem('eventList'));
    if (!isEnventList) {
        localStorage.setItem("eventList", JSON.stringify([]))
    }
    else{ 
        setEvent(isEnventList)
    }
  }, []);
  return (
    <section className="add flex items-center justify-center my-5">
      <div>
        <p className="font-bold text-2xl text-white">Add Event</p>
        <div className="form mt-5">
          <form action="" onSubmit={handleSubmitForm}>
            <div className="mb-5">
              <label htmlFor="" className="text-white text-base">
                Name Event:
              </label>
              <div className="mt-3 w-[450px]">
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={(e) => handleDataChange(e)}
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
                  name="reward"
                  value={data.reward}
                  onChange={(e) => handleDataChange(e)}
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
                    onChange={(value) => handleChangeTimeStart(value)}
                    value={data.during.startTime}
                    format={"dd-MM-y h:mm:ss a"}
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
                    onChange={(value) => handleChangeTimeEnd(value)}
                    value={data.during.endTime}
                    format={"dd-MM-y h:mm:ss a"}
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
                  name="introduction"
                  value={data.introduction}
                  onChange={(e) => handleDataChange(e)}
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
                  src={data.file}
                  className="mt-5 w-full max-h-[200px] object-cover rounded-lg"
                />
              </div>
            </div>{" "}
            <button
              type="submit"
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
