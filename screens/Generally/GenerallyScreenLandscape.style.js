import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const valueWidth = height > width ? height : width;

const landscapeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: valueWidth * 0.03,
    backgroundColor: "#ffe2c8",
    borderRadius: valueWidth * 0.02,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    alignItems: "center",
    justifyContent: "center",
    height: valueWidth * 0.2,
    width: valueWidth * 0.4,
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: valueWidth * 0.08,
    backgroundColor: "#ffe2c8",
    color: "#1c2520",
    borderRadius: 10,
  },
  capitalCity: {
    alignSelf: "center",
    color: "#14415a",
  },
  generalInfos: {
    justifyContent: "center",
    alignItems: "center",
    margin: valueWidth * 0.02,
    gap: valueWidth * 0.01,
  },
  history: {
    textAlign: "center",
  },
});

export default landscapeStyles;
