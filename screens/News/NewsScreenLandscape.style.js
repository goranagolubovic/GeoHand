import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const valueHeight = width > height ? width : height;
const valueWidth = height > width ? height : width;

const landscapeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  content: {
    margin: valueWidth * 0.04,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: valueHeight * 0.02,
  },
  link: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    color: "blue",
    textDecorationLine: "underline",
    fontSize: valueHeight * 0.02,
  },
});

export default landscapeStyles;
