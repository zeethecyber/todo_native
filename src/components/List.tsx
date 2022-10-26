import { ScrollView, View, Text, StyleSheet } from "react-native";

function List({ list }: { list: string[] }) {
  return (
    <ScrollView style={styles.listView}>
      {list.length > 0 ? (
        list.map((item, i) => {
          return (
            <View
              key={i}
              style={{
                ...styles.listItem,
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
  },
  listItem: {
    padding: 10,
    borderRadius: 4,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  listId: {
    backgroundColor: "#9f1329",
    borderRadius: 100,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
