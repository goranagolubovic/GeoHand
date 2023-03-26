import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const valueHeight = width > height ? width : height;
const valueWidth = height > width ? height : width;
const landscapeStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  image: {
    width: valueHeight * 0.33,
    height: valueHeight * 0.25,
    borderRadius: 10,
  },
  spinner: {
    width: valueHeight * 0.33,
    height: valueHeight * 0.25,
    padding: valueHeight * 0.33,
  },
  innerContainer: {
    flexDirection: "row",
    gap: valueHeight * 0.05,
  },
});

export default landscapeStyles;