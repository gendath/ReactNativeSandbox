import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageView from "../components/ImageView";

const ImageScreen = () => {
  return (
    <View>
      <ImageView
        title="beach"
        imageSource={require("../../assets/beach.jpg")}
        imageScore={1}
      />
      <ImageView
        title="forest"
        imageSource={require("../../assets/forest.jpg")}
        imageScore={5}
      />
      <ImageView
        title="mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore={9}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageScreen;
