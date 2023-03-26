import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const valueHeight = width > height ? width : height;
const valueWidth = height > width ? height : width;
const portraitStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  image: {
    width: valueWidth * 0.33,
    height: valueWidth * 0.25,
    borderRadius: 10,
  },
  spinner: {
    width: valueWidth * 0.33,
    height: valueWidth * 0.25,
    padding: valueWidth * 0.33,
  },
  innerContainer: {
    flexDirection: "column",
    gap: valueWidth * 0.05,
  },
});

export default portraitStyles;
