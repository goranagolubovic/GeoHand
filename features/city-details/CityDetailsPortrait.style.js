import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const valueHeight = width > height ? width : height;
const valueWidth = height > width ? height : width;

const portraitStyles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    margin: valueHeight * 0.02,
  },
  name: {
    color: "#1c2520",
    fontSize: valueHeight * 0.03,
    fontWeight: "600",
    paddingTop: valueHeight * 0.01,
    paddingBottom: valueHeight * 0.01,
  },
  basicInfos: {
    padding: valueHeight * 0.01,
    backgroundColor: "#ffb901",
    borderRadius: 5,
  },
  content: {
    color: "#1c2520",
    fontSize: valueHeight * 0.02,
  },
  selectedText: {
    fontSize: valueHeight * 0.025,
    fontWeight: "600",
    color: "#ffb901",
    paddingVertical: valueHeight * 0.03,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  centeredViewWeather: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: valueWidth * 0.07,
    backgroundColor: "#ffe2c8",
    borderRadius: 20,
    padding: valueWidth * 0.01,
    paddingTop: valueWidth * 0.01,
    paddingBottom: valueWidth * 0.03,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalViewWeather: {
    width: valueWidth * 0.45,
    backgroundColor: "#ffe2c8",
    borderRadius: 20,
    padding: valueWidth * 0.01,
    paddingTop: valueWidth * 0.01,
    paddingBottom: valueWidth * 0.03,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  close: {
    alignSelf: "flex-end",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: valueWidth * 0.03,
  },
  details: {
    padding: valueHeight * 0.03,
    textAlign: "center",
  },
  weather: {
    backgroundColor: "#fff",
    borderColor: "#144e5a",
    borderWidth: valueWidth * 0.003,
  },
  presentation: {
    backgroundColor: "#144e5a",
    borderWidth: valueWidth * 0.003,
    borderColor: "#144e5a",
  },
});

export default portraitStyles;
