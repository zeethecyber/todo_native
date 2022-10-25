import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

function InputForm({ addToList }: { addToList: any }) {
  const [input, setInput] = useState("");
  const handleChange = (value: string) => {
    setInput(value);
  };

  const handleSubmit = () => {
    setInput("");
    addToList(input);
  };
  return (
    <View style={styles.topView}>
      <Text style={styles.title}>Hi, Zeeshan</Text>
      <TextInput
        placeholder="Enter your todo here."
        placeholderTextColor={"rgba(255,255,255,0.5)"}
        style={styles.input}
        onChangeText={(value) => handleChange(value)}
        value={input}
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={{ color: "white", textAlign: "center" }}>Add Item</Text>
      </Pressable>
    </View>
  );
}

export default InputForm;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 20,
    color: "white",
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 100,
    fontSize: 16,
    color: "white",
  },

  topView: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 80,
    width: "100%",
  },

  button: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 100,
    backgroundColor: "rgb(250, 114, 96)",
    marginTop: 20,
  },
});
