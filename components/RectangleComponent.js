import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const RectangleComponent = ({ style }) => {
  return <View style={[styles.rectangleView, style]} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: Color.colorGray_200,
    width: 390,
    height: 63,
  },
});

export default RectangleComponent;
