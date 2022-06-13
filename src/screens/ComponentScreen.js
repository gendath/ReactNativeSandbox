import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const ComponentScreen = () => {
  const greeting = "Hey Bitches!";
  return (
    <View>
      <Text style={styles.textStyle}>{greeting}</Text>
      <TextInput
        placeholder="Useless Placeholder"
        keyboardType="numeric"
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
  },
});

export default ComponentScreen;
