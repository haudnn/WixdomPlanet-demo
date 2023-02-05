import { useMemo } from "react"

const useCheckStatusEvent = (startTime, endTime) => {
    const statusEvent = useMemo(() => {
        const currentTime = new Date().getTime();
        const startTimeConvert = new Date(startTime).getTime();
        const endTimeConvert = new Date(endTime).getTime();
        if (currentTime > endTimeConvert) return "Expired"
        if (currentTime >= startTimeConvert) {
            return "Active"
        }
        else {
            return "Not started"
        }
    }, [startTime, endTime])
    return statusEvent;
}
export default useCheckStatusEvent