import { useMemo } from "react"

const useCheckStatusEvent = (startTime, endTime) => {
    const statusEvent = useMemo(() => {
        const currentTime = new Date().getTime();
        const startTimeConvert = new Date(startTime).getTime();
        const endTimeConvert = new Date(endTime).getTime();
        return (currentTime > endTimeConvert)
            ? "Expired"
            : (currentTime >= startTimeConvert)
                ? "Active"
                : "Not started";
    }, [startTime, endTime])
    return statusEvent;
}
export default useCheckStatusEvent