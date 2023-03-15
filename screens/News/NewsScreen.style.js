import { StyleSheet } from "react-native";

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
  title: {
    fontSize: 20,
  },
  link: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 15,
  },
});

export default styles;
