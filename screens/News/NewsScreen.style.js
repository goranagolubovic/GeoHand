import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  content: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
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
