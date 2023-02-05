import { useState } from "react";

const useLocalStorage = () => {
    const [events, setEvents] = useState([])
    

    return events
}
export default useLocalStorage;