import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
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
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "column",
    gap: valueWidth * 0.05,
  },
});

export default portraitStyles;
