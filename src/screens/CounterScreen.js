import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>{counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
