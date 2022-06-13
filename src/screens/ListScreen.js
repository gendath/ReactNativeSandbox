import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
const ListScreen = () => {
  const friends = [
    {
      name: "Friendo#1",
      age: 42,
    },
    {
      name: "Friendo#2",
      age: 34,
    },
    {
      name: "Friendo#3",
      age: 65,
    },
    {
      name: "Friendo#4",
      age: 12,
    },
    {
      name: "Friendo#5",
      age: 87,
    },
    {
      name: "Friendo#6",
      age: 99,
    },
    {
      name: "Friendo#7",
      age: 32,
    },
    {
      name: "Friendo#8",
      age: 33,
    },
    {
      name: "Friendo#9",
      age: 34,
    },
    {
      name: "Friendo#0",
      age: 123,
    },
  ];

  return (
    <View>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        keyExtractor={(obj) => {
          return obj.name;
        }}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
    borderWidth: 1,
  },
});
export default ListScreen;
