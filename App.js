import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tic from "./src/components/Cd/Tic";
export default function App() {
  return (
    <View style={styles.app}>
      <TicTac/>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    justifyContent: "center",
    flex: 1,
  },
})