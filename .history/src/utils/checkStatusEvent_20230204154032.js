const checkStatusEvent = (startTime, endTime) => {
    const currentTime = new Date().getTime();
    const startTimeConvert = new Date(startTime).getTime();
    const endTimeConvert = new Date(endTime).getTime();
    return (currentTime > endTimeConvert)
        ? "Expired"
        : (currentTime >= startTimeConvert)
            ? "Active"
            : "Not started";
}
export default checkStatusEvent