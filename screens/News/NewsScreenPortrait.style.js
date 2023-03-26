import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const valueHeight = width > height ? width : height;
const valueWidth = height > width ? height : width;
const portraitStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  content: {
    // marginTop: valueHeight * 0.04,
    // marginBottom: valueHeight * 0.04,
    margin: valueHeight * 0.04,
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

export default portraitStyles;
