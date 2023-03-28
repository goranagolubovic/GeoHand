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
  textWithButton: {
    fontSize: valueHeight * 0.02,
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default landscapeStyles;
