export const removeTags = (str) => {
  return str.replace(/<\/?[^>]+(>|$)/g, "");
};

export const removeUnecessaryInfos = (str) => {
  return str;
};

export const calculateCelziusTemp = (temp) => {
  return parseFloat(parseFloat(temp) - 273.15).toFixed(1);
};
