import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderRadius: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  video: {
    aspectRatio: 16 / 9,
    width: "50%",
    height: 200,
  },
});

export default styles;
