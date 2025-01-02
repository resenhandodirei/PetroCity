import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  spacer: {
    flex: 1,
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  dogIcon: {
    transform: [{ scaleX: -1 }], // Espelha horizontalmente
  },
  title: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  button: {
    height: 40,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
