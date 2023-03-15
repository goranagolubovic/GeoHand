import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  search: {
    height: 30,
    width: 250,
    marginTop: 30,
    fontSize: 10,
  },
  content: {
    marginTop: 60,
    width: 300,
    height: 300,
  },
  img: {
    height: 100,
    width: 200,
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: "#ffe2c8",
    color: "#1c2520",
    borderRadius: 10,
  },
  generalInfos: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
