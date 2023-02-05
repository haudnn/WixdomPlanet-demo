import { useEffect, useState } from "react";
// Function for check localStorage: if null create localStorage else get localStorage
const useLocalStorage = () => {
    const [events, setEvents] = useState(JSON.parse(localStorage.getItem('events') || '[]'));
    useEffect(() => {
        localStorage.setItem("events", JSON.stringify(events));
    }, [events]);
    return events;
}

export default useLocalStorage;