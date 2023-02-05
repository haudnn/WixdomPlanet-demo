import { Link } from "react-router-dom"

const EventItem = () => {
    return (
        <div className="col l-4">
            <Link to="/" className="block rounded-xl p-[2px] cursor-pointer bg-[#2c2c2e] relative h-full">
                <div className="rounded-xl p-3 bg-[#2c2c2e] h-full flex flex-col">
                   <div>
                        <img src="https://static.wixdomplanet.io/public/images/worldcup0.jpg" alt="img" className="w-full h-full object-cover rounded-lg"/>
                   </div>
                   <div className="flex items-center justify-between">
                        <span>WC 2022 EVNET</span>
                   </div>
                </div>
            </Link>
        </div>
    )
  }
  export default EventItem