import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventItem = ({ name, reward, file, introduction, during }) => {
  const [statusEvent, setSatusEvent] = useState("");
  useEffect(() => {
    const currentDate = new Date().getTime();
    let dateStart = new Date(during.startTime).getTime();
    let dateEnd = new Date(during.startTime).getTime();
    // Active: hien tai >=  bat dau ( 20 >= 19) 
    // Not started: Hien tai < bat dau ( 20 < 21)
    // Expired : Hien tai > ket thuc ( 20 > 19)
    if (currentDate >= dateStart) {
      setSatusEvent("Active");
    } else {
      setSatusEvent("Not started");
    }
    if (currentDate > dateEnd) {
      setSatusEvent("Expired");
    }
  }, [statusEvent]);
  console.log(statusEvent);
  return (
    <div className="col l-4">
      <Link
        to="/"
        className="block rounded-xl p-[2px] cursor-pointer bg-[#2c2c2e] relative h-full"
      >
        <div className="rounded-xl p-3 bg-[#2c2c2e] h-full flex flex-col">
          <div>
            <img
              src={file}
              alt="img"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex items-center box-border">
            <span
              style={{
                display: "-webkit-box",
                "-webkit-line-clamp": "2",
                "-webkit-box-orient": "vertical",
              }}
              className="break-words text-white text-xl mt-3 mb-4 font-medium flex-1 max-w-full overflow-hidden text-ellipsis "
            >
              {name}
            </span>
            <div className="text-xs bg-[#f5f5f5]  text-[#3a3a3c] px-2 py-[2px] rounded-2xl flex items-center justify-center ">
              {statusEvent}
            </div>
          </div>
          <div className="flex mt-[26px]">
            <div className="flex flex-col flex-1">
              <span className="text-[#d4d4d4] text-xs ">Reward</span>
              <span className="mt-1 text-[#dddde5] text-sm flex items-center">
                <img
                  src="https://static.wixdomplanet.io/public/images/wxp/binance-usd-busd-logo.png"
                  alt="BUSD"
                  className="w-4 h-4 mr-2"
                />
                <span>{reward} BUSD</span>
              </span>
            </div>
            <div className="flex flex-col flex-1 items-center">
              <span className="text-[#d4d4d4] text-xs ">Participants</span>
              <span className="mt-1 text-[#dddde5] text-sm flex items-center">
                <img
                  src="https://wixdomplanet.io/images/ic_person.svg"
                  alt="BUSD"
                  className="w-4 h-4 mr-2"
                />
                <span>488</span>
              </span>
            </div>
            <div className="flex flex-col flex-1 items-end">
              <span className="text-[#d4d4d4] text-xs ">Duration</span>
              <span className="mt-1 text-[#dddde5] text-sm flex items-center">
                <img
                  src="https://wixdomplanet.io/images/ic_time.svg"
                  alt="BUSD"
                  className="w-4 h-4 mr-2"
                />
                <span>-</span>
              </span>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <div className="flex items-center">
              <img
                src="https://static.wixdomplanet.io/public/images/Logo-wxp.png"
                alt=""
                className="rounded-[50%] w-6 h-6 max-w-full"
              />
              <span className="ml-2 text-[#fcfcfc] font-bold">
                WixdomPlanet
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default EventItem;
