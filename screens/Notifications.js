import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Switch } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, width, height } from "../GlobalStyles";

const Notifications = () => {
  const [component9Value, setComponent9Value] = useState(undefined);
  const [component10Value, setComponent10Value] = useState(undefined);
  const [component11Value, setComponent11Value] = useState(undefined);
  const [component12Value, setComponent12Value] = useState(undefined);
  const [component13Value, setComponent13Value] = useState(undefined);
  const [component14Value, setComponent14Value] = useState(undefined);
  const [component15Value, setComponent15Value] = useState(undefined);
  const [component16Value, setComponent16Value] = useState(undefined);

  const navigation = useNavigation();

  const main = () => {
      navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.notification}>
      <Pressable style = {styles.back} onPress={main}>
      <Image
        style={styles.notificationChild}
        contentFit="cover"
        source={require("../assets/vector-26823.png")}
      />
      </Pressable>
        <Text style={styles.text}>알림 설정</Text>
      <View style={styles.component9Parent}>
        <Switch
          style={[styles.component9, styles.componentLayout]}
          value={component9Value}
          onValueChange={setComponent9Value}
        />
        <Switch
          style={[styles.component10, styles.componentLayout]}
          value={component10Value}
          onValueChange={setComponent10Value}
        />
        <Switch
          style={[styles.component11, styles.componentLayout]}
          value={component11Value}
          onValueChange={setComponent11Value}
        />
        <Switch
          style={[styles.component12, styles.componentLayout]}
          value={component12Value}
          onValueChange={setComponent12Value}
        />
        <Switch
          style={[styles.component13, styles.componentLayout]}
          value={component13Value}
          onValueChange={setComponent13Value}
        />
        <Switch
          style={[styles.component14, styles.componentLayout]}
          value={component14Value}
          onValueChange={setComponent14Value}
        />
        <Switch
          style={[styles.component15, styles.componentLayout]}
          value={component15Value}
          onValueChange={setComponent15Value}
        />
        <Switch
          style={[styles.component16, styles.componentLayout]}
          value={component16Value}
          onValueChange={setComponent16Value}
        />
      </View>
      <Image
        style={styles.notificationItem}
        contentFit="cover"
        source={require("../assets/vector-26951.png")}
      />
      <Image
        style={[styles.notificationInner, styles.notificationChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-2696.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.notificationChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-2696.png")}
      />
      <Image
        style={[styles.notificationChild1, styles.notificationChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-2696.png")}
      />
      <Image
        style={[styles.notificationChild2, styles.notificationChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-2696.png")}
      />
      <Image
        style={[styles.notificationChild3, styles.notificationChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-2696.png")}
      />
      <Image
        style={[styles.notificationChild4, styles.notificationChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-2696.png")}
      />
      <Image
        style={[styles.notificationChild5, styles.notificationChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-2696.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>
        경기 시작 전 알림 (5분)
      </Text>
      <Text style={[styles.text2, styles.textTypo]}>경기 시작</Text>
      <Text style={[styles.text3, styles.textTypo]}>하프타임 스코어</Text>
      <Text style={[styles.text4, styles.textTypo]}>후반 시작</Text>
      <Text style={[styles.text5, styles.textTypo]}>최종 결과</Text>
      <Text style={[styles.text6, styles.textTypo]}>골</Text>
      <Text style={[styles.text7, styles.textTypo]}>득점자</Text>
      <Text style={[styles.text8, styles.textTypo]}>퇴장</Text>
      <Image
        style={styles.redCardIcon}
        contentFit="cover"
        source={require("../assets/red-card.png")}
      />
      <Image
        style={[styles.scoreboardIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/scoreboard.png")}
      />
      <Image
        style={[styles.soccerBallIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/soccer-ball.png")}
      />
      <View style={[styles.soccerBallParent, styles.cleatsIconLayout]}>
        <Image
          style={styles.soccerBallIcon1}
          contentFit="cover"
          source={require("../assets/soccer-ball1.png")}
        />
        <Image
          style={[styles.cleatsIcon, styles.cleatsIconLayout]}
          contentFit="cover"
          source={require("../assets/cleats.png")}
        />
      </View>
      <Image
        style={[styles.soccerPlayerIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/soccer-player.png")}
      />
      <Image
        style={[styles.alarmIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/alarm.png")}
      />
      <Image
        style={[styles.whistleIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/whistle.png")}
      />
      <Image
        style={[styles.sportStopwatchIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/sport-stopwatch.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  componentLayout: {
    height: height * 23,
    width: width * 50,
    left: 0,
    position: "absolute",
  },
  notificationChildPosition: {
    left: width * 13,
    height: height * 1,
    width: width * 351,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGray_400,
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    lineHeight: height * 18.5,
    letterSpacing: width * -0.3,
    fontSize: FontSize.size_base,
    left: width * 65,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    left: width * 23,
    opacity: 0.9,
    height: height * 24,
    width: width * 24,
    position: "absolute",
  },
  cleatsIconLayout: {
    height: height * 27,
    position: "absolute",
  },
  notificationChild: {
    width: width * 7,
    height: height * 13,
    position: "absolute",
  },
  text: {
    top: height * 77,
    left: width * 137.5,
    width: width * 100,
    fontSize: FontSize.size_lg,
    letterSpacing: width * -0.4,
    lineHeight: height * 20,
    fontWeight: "600",
    fontFamily: FontFamily.notoSansSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  wrapper: {
    top: height * 80,
    right: width * 156,
    left: width * 156,
    width: width * 300,
    height: height * 16,
    position: "absolute",
  },
  component9: {
    top: 0,
  },
  component10: {
    top: height * 51,
  },
  component11: {
    top: height * 102,
  },
  component12: {
    top: height * 152,
  },
  component13: {
    top: height * 203,
  },
  component14: {
    top: height * 254,
  },
  component15: {
    top: height * 305,
  },
  component16: {
    top: height * 356,
  },
  back: {
    position: "absolute",
    width : width * 50,
    height : height * 50,
    top : height * 78,
    left: width * 24,
},
  component9Parent: {
    top: height * 134,
    left: width * 312,
    height: height * 379,
    width: width * 41,
    position: "absolute",
  },
  notificationItem: {
    top: height * 115,
    left: width * 12,
    height: height * 1,
    width: width * 351,
    position: "absolute",
  },
  notificationInner: {
    top: height * 170,
  },
  vectorIcon: {
    top: height * 224,
  },
  notificationChild1: {
    top: height * 273,
  },
  notificationChild2: {
    top: height * 324,
  },
  notificationChild3: {
    top: height * 376,
  },
  notificationChild4: {
    top: height * 425,
  },
  notificationChild5: {
    top: height * 478,
  },
  text1: {
    top: height * 137,
  },
  text2: {
    top: height * 188,
  },
  text3: {
    top: height * 239,
  },
  text4: {
    top: height * 290,
  },
  text5: {
    top: height * 341,
  },
  text6: {
    top: height * 392,
  },
  text7: {
    top: height * 443,
  },
  text8: {
    top: height * 494,
  },
  redCardIcon: {
    top: height * 490,
    left: width * 21,
    opacity: 0.9,
    height: height * 24,
    width: width * 24,
    position: "absolute",
  },
  scoreboardIcon: {
    top: height * 337,
  },
  soccerBallIcon: {
    top: height * 387,
  },
  soccerBallIcon1: {
    top: height * 13,
    width: width * 12,
    height: height * 12,
    left: width * 20,
    position: "absolute",
  },
  cleatsIcon: {
    width: width * 27,
    opacity: 0.9,
    top: 0,
    left: 0,
  },
  soccerBallParent: {
    top: height * 183,
    width: width * 32,
    left: width * 20,
  },
  soccerPlayerIcon: {
    top: height * 438,
  },
  alarmIcon: {
    top: height * 133,
  },
  whistleIcon: {
    top: height * 287,
  },
  sportStopwatchIcon: {
    top: height * 235,
  },
  notification: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: height * 812,
    overflow: "hidden",
  },
});

export default Notifications;
