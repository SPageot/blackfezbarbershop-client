import { StyleSheet } from "react-native";

const cardStyles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    height: "70%",
  },
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#ebebeb",
    height: "100%",
  },
  title: {
    textAlign: "center",
  },
  textInput: {
    width: "80%",
    backgroundColor: "#fff",
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export { cardStyles };
