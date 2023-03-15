import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 20,
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: 150,
    height: 150,
  },
  currentTemp: {
    fontSize: 40,
  },
  temp: {
    display: "flex",
    flexDirection: "row",
  },
  tempIcon: {
    backgroundColor: "#ffe2c8",
  },
  info: {
    fontSize: 15,
  },
  place: {
    fontSize: 20,
  },
  centralContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default styles;
