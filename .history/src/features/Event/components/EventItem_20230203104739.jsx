import { Link } from "react-router-dom"

const EventItem = () => {
    return (
        <div className="col l-4">
            <Link to="/" className="block rounded-xl p-[2px] cursor-pointer bg-[#2c2c2e] relative h-full">
                <div className="rounded-xl p-3 bg-[#2c2c2e] h-full flex flex-col">
                   <div>
                        <img src="https://static.wixdomplanet.io/public/images/worldcup0.jpg" alt="img" className="w-full h-full object-cover rounded-lg"/>
                   </div>
                   <div className="flex items-center justify-between my-3 text-white">
                        <span className=" text-lg">WC 2022 EVENT</span>
                        <div className="text-sm">Expired</div>
                   </div>
                </div>
            </Link>
        </div>
    )
  }
  export default EventItem