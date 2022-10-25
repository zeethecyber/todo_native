import { ScrollView, View, Text, StyleSheet } from "react-native";

function List({ list }: { list: string[] }) {
  function getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const colors = ["#63b4ff", "#b1d199", "#f8aa4c", "#aa9aff"];

  return (
    <ScrollView style={styles.listView}>
      {list.length > 0 ? (
        list.map((item, i) => {
          return (
            <View
              key={i}
              style={{
                ...styles.listItem,
                // backgroundColor: colors[getRndInteger(0, 3)],
              }}
            >
              <View style={styles.listId}>
                <Text style={{ color: "white" }}>{i}</Text>
              </View>
              <Text style={{ color: "white" }}>{item}</Text>
            </View>
          );
        })
      ) : (
        <Text style={{ marginTop: 30, textAlign: "center", color: "white" }}>
          No Items In the List
        </Text>
      )}
    </ScrollView>
  );
}

export default List;

const styles = StyleSheet.create({
  listView: {
    width: "100%",
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  listItem: {
    padding: 10,
    borderRadius: 100,
    width: "100%",
    backgroundColor: "rgba(250, 114, 96, 0.8)",
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  listId: {
    backgroundColor: "#b1d199",
    borderRadius: 100,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
