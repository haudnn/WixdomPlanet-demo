function formatDate(str) {
    let dateFormat= ""
    const date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2),
      hour = (date.getHours());
      console.log(hour)
    dateFormat += date.getFullYear() + "-" + mnth + "-" + day + " " + hour 
    return dateFormat;
}

export default formatDate;