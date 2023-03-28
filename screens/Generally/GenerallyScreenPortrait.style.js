import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const valueHeight = width > height ? width : height;
const valueWidth = height > width ? height : width;
const portraitStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: valueHeight * 0.03,
    backgroundColor: "#ffe2c8",
    borderRadius: valueHeight * 0.02,
  },
  content: {
    // marginTop: 60,
    // width: 300,
    // height: 300,
    //flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    alignItems: "center",
    justifyContent: "center",
    height: valueWidth * 0.2,
    width: valueWidth * 0.4,
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: valueWidth * 0.08,
    backgroundColor: "#ffe2c8",
    color: "#1c2520",
    borderRadius: 10,
  },
  capitalCity: {
    alignSelf: "center",
    color: "#14415a",
  },
  generalInfos: {
    justifyContent: "center",
    alignItems: "center",
    margin: valueHeight * 0.02,
    gap: valueHeight * 0.01,
  },
  history: {
    textAlign: "center",
  },
});

export default portraitStyles;
