import { Link } from "react-router-dom"

const EventItem = () => {
    return (
        <div className="col l-4">
            <Link to="/" className="block rounded-xl p-[2px] cursor-pointer bg-[#2c2c2e] relative h-full">
                <div className="rounded-xl p-3 bg-[#2c2c2e] h-full flex flex-col">
                   <div>
                        <img src="https://static.wixdomplanet.io/public/images/worldcup0.jpg" alt="img" className="w-full h-full object-cover rounded-lg"/>
                   </div>
                   <div className="flex items-center box-border">
                        <span style={{display:"-webkit-box", "-webkit-line-clamp" : "2", "-webkit-box-orient" :"vertical"}} className="break-words text-white text-xl mt-3 mb-4 font-medium flex-1 max-w-full overflow-hidden text-ellipsis ">Polygon is expanding the ecosytem to Vietnam Polygon is expanding the ecosytem to Vietnam</span>
                        <div className="text-xs bg-[#f5f5f5]  text-[#3a3a3c] px-2 py-[2px] rounded-2xl flex items-center justify-center ">Expired</div>
                   </div>
                   <div className="flex mt-[26px]">
                        <div className="flex flex-col flex-1">
                            <span className="text-[#d4d4d4] text-xs ">Reward</span>
                            <span className="mt-1 text-[#dddde5] text-sm flex items-center">
                                <img src="https://static.wixdomplanet.io/public/images/wxp/binance-usd-busd-logo.png" alt="BUSD" className="w-4 h-4 mr-2"/>
                                <span>100 BUSD</span>
                            </span>
                        </div>
                        <div className="flex flex-col flex-1">
                            <span className="text-[#d4d4d4] text-xs ">Participants</span>
                            <span className="mt-1 text-[#dddde5] text-sm flex items-center">
                                <img src="https://wixdomplanet.io/images/ic_person.svg" alt="BUSD" className="w-4 h-4 mr-2"/>
                                <span>488</span>
                            </span>
                        </div>
                   </div>
                </div>
            </Link>
        </div>
    )
  }
  export default EventItem