import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#144e5a",
  },
  backButton: {
    marginTop: 10,
    marginBottom: 10,
  },
  label: {
    color: "#ffb901",
    fontSize: 18,
  },
  details: {
    textAlign: "center",
  },
});

export default styles;
