function formatDate(str) {
    const date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2),
      hour = (date.getHours());
      console.log(hour)
    return [date.getFullYear(), mnth, day].join("-");
}

export default formatDate;