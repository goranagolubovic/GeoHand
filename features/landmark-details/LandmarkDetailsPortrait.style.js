import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const valueWidth = height > width ? height : width;

const portraitStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: valueWidth * 0.03,
  },
  image: {
    width: valueWidth * 0.5,
    height: valueWidth * 0.35,
    marginBottom: valueWidth * 0.04,
  },
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: valueWidth * 0.03,
  },
  title: {
    fontWeight: "bold",
    fontSize: valueWidth * 0.032,
    color: "#144e5a",
  },
  backButton: {
    marginTop: valueWidth * 0.05,
    marginBottom: valueWidth * 0.05,
  },
  label: {
    color: "#ffb901",
    fontSize: valueWidth * 0.025,
  },
  details: {
    textAlign: "center",
  },
});

export default portraitStyles;
