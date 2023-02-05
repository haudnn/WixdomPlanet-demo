function formatDate(dateTime) {
  let dateFormat = ""
  const date = new Date(dateTime),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2),
    hour = (date.getHours()),
    minutes = (date.getMinutes()),
    seconds = (date.getSeconds());
  dateFormat += date.getFullYear() + "-" + mnth + "-" + day + " " + hour + ":" + minutes + ":" + seconds
  return dateFormat;
}

// function formatDate(str) {
//   const date = new Date(str);
//   return date.toISOString().slice(0, 19).replace('T', ' ');
// }

export default formatDate;