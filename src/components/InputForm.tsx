import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import CheckIcon from "../icons/PlusIcon";
import getDate from "../utils/getDate";

function InputForm({ addToList }: { addToList: any }) {
  /*
   * Getter and setter for input value of text input
   */
  const [input, setInput] = useState("");

  /*
   * This function will set the current value "input" variable on every keystroke
   */
  const handleChange = (value: string) => {
    setInput(value);
  };

  /*
   * Getting the current date
   */
  const [date, day, month] = getDate();

  /*
   * Pushing input value to list array passed through props
   */
  const handleSubmit = () => {
    setInput("");
    addToList(input);
  };

  return (
    <View style={styles.topView}>
      <View
        style={{
          marginBottom: 20,
        }}
      >
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>
          {day}, {month} {date}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your todo here."
          placeholderTextColor={"rgba(255,255,255,0.5)"}
          style={styles.input}
          onChangeText={(value) => handleChange(value)}
          value={input}
        />
        <Pressable style={styles.button} onPress={handleSubmit}>
          <CheckIcon />
        </Pressable>
      </View>
    </View>
  );
}

export default InputForm;

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: "600",
    color: "white",
  },
  subtitle: {
    color: "white",
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 4,
    fontSize: 16,
    color: "white",
    marginRight: 10,
  },

  topView: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 40,
    width: "100%",
  },

  button: {
    padding: 9,
    borderRadius: 4,
    backgroundColor: "#9f1329",
  },
});
