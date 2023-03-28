import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const valueHeight = width > height ? width : height;

const landscapeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: valueHeight * 0.03,
  },
  image: {
    width: valueHeight * 0.5,
    height: valueHeight * 0.35,
    marginBottom: valueHeight * 0.04,
  },
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: valueHeight * 0.02,
  },
  title: {
    fontWeight: "bold",
    fontSize: valueHeight * 0.032,
    color: "#144e5a",
  },
  backButton: {
    marginTop: valueHeight * 0.05,
    marginBottom: valueHeight * 0.05,
  },
  label: {
    color: "#ffb901",
    fontSize: valueHeight * 0.025,
  },
  details: {
    textAlign: "center",
  },
});

export default landscapeStyles;
