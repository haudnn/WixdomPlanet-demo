function formatDate(str) {
  const date = new Date(str);
  return date.toISOString().slice(0, 19).replace('T', ' ');
}

export default formatDate;