import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const valueHeight = width > height ? width : height;

const landscapeStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#144e5a",
    fontSize: valueHeight * 0.03,
    fontWeight: "600",
  },
  buttonContainer: {
    marginTop: valueHeight * 0.01,
  },
  text: {
    fontSize: valueHeight * 0.03,
    color: "#000",
    paddingVertical: valueHeight * 0.005,
  },
  selectedText: {
    fontSize: valueHeight * 0.03,
    fontWeight: "600",
    color: "#ffb901",
    paddingVertical: valueHeight * 0.005,
  },
});

export default landscapeStyles;
