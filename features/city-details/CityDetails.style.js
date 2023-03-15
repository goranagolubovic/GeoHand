import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  name: {
    color: "#1c2520",
    fontSize: 20,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10,
  },
  basicInfos: {
    padding: 10,
    backgroundColor: "#ffb901",
    borderRadius: 5,
  },
  content: {
    color: "#1c2520",
    fontSize: 15,
  },
  selectedText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffb901",
    paddingVertical: 4,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 10,
    backgroundColor: "#ffe2c8",
    borderRadius: 20,
    padding: 20,
    paddingTop: 20,
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
    // display: "flex",
    alignSelf: "flex-end",
    // justifyContent: "space-evenly",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default styles;
