import { useEffect, useState } from "react";

const useLocalStorage = () => {
    const [events, setEvents] = useState([])
    // check if localStorage if haved  "events" in localStorage getelse set
    useEffect(() => {
        const isEnvents = JSON.parse(localStorage.getItem('events'));
        if (!isEnvents) {
            localStorage.setItem("events", JSON.stringify([]))
        }
        else{ 
            setEvents(isEnvents)
        }
      }, []);
    return events
}
export default useLocalStorage;