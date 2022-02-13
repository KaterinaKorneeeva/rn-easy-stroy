// форматирование суммы - 100 000 000
export const numberWithSpaces = (x) => {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
};


export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

