import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const valueHeight = width > height ? width : height;

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
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
    gap: valueHeight * 0.05,
  },
});

export default landscapeStyles;
