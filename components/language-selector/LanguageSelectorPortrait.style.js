import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const valueWidth = height > width ? height : width;

const portraitStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#144e5a",
    fontSize: valueWidth * 0.03,
    fontWeight: "600",
  },
  buttonContainer: {
    marginTop: valueWidth * 0.01,
  },
  text: {
    fontSize: valueWidth * 0.03,
    color: "#000",
    paddingVertical: valueWidth * 0.005,
  },
  selectedText: {
    fontSize: valueWidth * 0.03,
    fontWeight: "600",
    color: "#ffb901",
    paddingVertical: valueWidth * 0.005,
  },
});

export default portraitStyles;
