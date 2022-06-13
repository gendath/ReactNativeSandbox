import { StyleSheet, Button, View, Text, FlatList } from "react-native";
import React, { useState } from "react";

export default function ColorScreen() {
  const [colors, setColors] = useState([]);

  console.log(colors);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />

      <FlatList
        keyExtractor={(obj) => {
          return obj;
        }}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 400, backgroundColor: item }}>
              <Text>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});
