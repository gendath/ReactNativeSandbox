import React from "react";
import { Text, View, Image } from "react-native";

const ImageView = ({ title, imageSource, imageScore }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Score - {imageScore}</Text>
    </View>
  );
};

export default ImageView;
