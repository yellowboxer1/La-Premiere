import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const SplashLaPremiere = () => {
  return (
    <LinearGradient
      style={styles.splashLaPremiere}
      locations={[0.48, 1]}
      colors={["#3b2050", "#7e2983"]}
    >
      <Text style={[styles.text, styles.textFlexBox]}>최고의 즐거움</Text>
      <Text style={[styles.laPremire, styles.textFlexBox]}>La première</Text>
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/icon-1.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  text: {
    top: 152,
    left: 75,
    fontSize: FontSize.size_17xl,
    letterSpacing: 0,
    lineHeight: 47,
    fontFamily: FontFamily.notoSansRegular,
  },
  laPremire: {
    top: 217,
    left: 45,
    fontSize: 50,
    letterSpacing: -1,
    lineHeight: 65,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansBold,
  },
  icon1: {
    top: 344,
    left: 90,
    width: 184,
    height: 229,
    position: "absolute",
  },
  splashLaPremiere: {
    width: 375,
    height: 811,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default SplashLaPremiere;
