import { Link } from "react-router-dom";
import { useCheckStatusEvent } from "../../../hooks";

const EventItem = ({ name, reward, file, during }) => {
  const { startTime, endTime } = during;
  const statusEvent = useCheckStatusEvent(startTime, endTime);

  return (
    <div className="col l-4 mt-6">
      <Link
        to="/"
        className=" block rounded-xl p-[2px] cursor-pointer bg-[#2c2c2e] relative h-full"
      >
        <div className="rounded-xl p-3 bg-[#2c2c2e] h-full flex flex-col">
          <div>
            <img
              style={{ aspectRatio: "333/156" }}
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
                alt="logo"
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
