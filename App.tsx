import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import InputForm from "./src/components/InputForm";
import List from "./src/components/List";

export default function App() {
  const [list, setList] = useState<string[]>([]);

  const addToList = (value: string) => {
    setList((prevState) => {
      return [...prevState, value];
    });
  };
  return (
    <View style={styles.container}>
      <InputForm addToList={addToList} />
      <List list={list} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313642",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
