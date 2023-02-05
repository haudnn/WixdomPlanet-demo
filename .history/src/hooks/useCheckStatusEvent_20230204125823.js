import { useEffect, useState } from "react"

const useCheckStatusEvent = (startTime, endTime) => {
    const [statusEvent, setSatusEvent] = useState("");
    useEffect(() => {
        const currentTime = new Date().getTime();
        const startTimeConvert = new Date(startTime).getTime();
        const endTimeConvert = new Date(endTime).getTime();
        // Active: hien tai >=  bat dau ( 20 >= 19) 
        // Not started: Hien tai < bat dau ( 20 < 21)
        // Expired : Hien tai > ket thuc ( 20 > 19)
        if (currentTime >= startTimeConvert) {
          setSatusEvent("Active");
        } else {
          setSatusEvent("Not started");
        }
        if (currentTime > endTimeConvert) {
          setSatusEvent("Expired");
        }
      }, [statusEvent]);
    return statusEvent;
}
export default useCheckStatusEvent