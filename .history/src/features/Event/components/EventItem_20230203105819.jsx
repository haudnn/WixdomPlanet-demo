import { Link } from "react-router-dom"

const EventItem = () => {
    return (
        <div className="col l-4">
            <Link to="/" className="block rounded-xl p-[2px] cursor-pointer bg-[#2c2c2e] relative h-full">
                <div className="rounded-xl p-3 bg-[#2c2c2e] h-full flex flex-col">
                   <div>
                        <img src="https://static.wixdomplanet.io/public/images/worldcup0.jpg" alt="img" className="w-full h-full object-cover rounded-lg"/>
                   </div>
                   <div className="flex items-center my-3 ">
                        <span className="text-white text-xl mt-3 mb-4 font-medium flex-1 max-w-full overflow-hidden text-ellipsis ">Bring your own furry pet by the</span>
                        <div className="text-xs bg-[#f5f5f5]  text-[#3a3a3c] px-2 py-[2px] rounded-2xl flex items-center justify-center ">Expired</div>
                   </div>
                </div>
            </Link>
        </div>
    )
  }
  export default EventItem