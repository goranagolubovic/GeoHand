export const calculateCelziusTemp = (temp) => {
  return parseFloat(parseFloat(temp) - 273.15).toFixed(1);
};
