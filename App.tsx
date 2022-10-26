import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import InputForm from "./src/components/InputForm";
import List from "./src/components/List";

export default function App() {
  /*
   * This is the setter and getter for list items
   */
  const [list, setList] = useState<string[]>([]);

  /*
   * This function append the current value in the text input to the list array
   */
  const addToList = (value: string) => {
    setList((prevState) => {
      return [...prevState, value];
    });
  };

  /*
   * Entry point of app starts here
   */
  return (
    <ImageBackground
      source={require("./assets/todo-bg.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={{ width: "100%", flex: 1 }}>
          <InputForm addToList={addToList} />
          <List list={list} />
          <StatusBar style="light" />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
