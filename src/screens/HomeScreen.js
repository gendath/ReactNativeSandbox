import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View style={styles.view}>
      <Button
        style={styles.button}
        title="Go To Components Demo"
        onPress={() => {
          navigate("Components");
        }}
      />
      <Button
        style={styles.button}
        title="Go to List Demo"
        onPress={() => {
          navigate("List");
        }}
      />
      <Button
        style={styles.button}
        title="Go to Image Demo"
        onPress={() => {
          navigate("Images");
        }}
      />
      <Button
        style={styles.button}
        title="Go to Counter Demo"
        onPress={() => {
          navigate("Counter");
        }}
      />
      <Button
        style={styles.button}
        title="Go to Color Demo"
        onPress={() => {
          navigate("Colors");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  view: {
    marginVertical: 40,
  },
  button: {
    marginVertical: 20,
  },
});

export default HomeScreen;
