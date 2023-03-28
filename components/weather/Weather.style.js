import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const valueWidth = height > width ? height : width;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: valueWidth * 0.05,
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: valueWidth * 0.2,
    height: valueWidth * 0.2,
  },
  currentTemp: {
    fontSize: valueWidth * 0.04,
  },
  temp: {
    display: "flex",
    flexDirection: "row",
  },
  tempIcon: {
    backgroundColor: "#ffe2c8",
  },
  info: {
    fontSize: valueWidth * 0.02,
  },
  place: {
    fontSize: valueWidth * 0.02,
  },
  centralContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default styles;
