import * as React from "react";
import { Pressable, Text, StyleSheet, TextInput, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.onboarding}>
      <Text style={styles.text}>응원하는 팀을 선택해 주세요</Text>
      <View style={styles.frame}>
        <TextInput
          style={styles.frameChild}
          multiline={false}
          secureTextEntry={false}
        />
        <TextInput style={styles.textinput} multiline={false} />
        <Image
          style={styles.lenzIcon}
          contentFit="cover"
          source={require("../assets/lenz.png")}
        />
      </View>
      <View style={[styles.frame1, styles.frameShadowBox]}>
        <View style={[styles.frameItem, styles.frameShadowBox]} />
        <Pressable
          style={[styles.tor1, styles.tor1Layout]}
          onPress={() => navigation.navigate("Main")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/tor1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.liv1, styles.liv1Position]}
          onPress={() => navigation.navigate("Main")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/liv1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.man1, styles.tor1Layout]}
          onPress={() => navigation.navigate("Main")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/man1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.che1, styles.liv1Position]}
          onPress={() => navigation.navigate("Main")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/che1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.mau11, styles.tor1Layout]}
          onPress={() => navigation.navigate("Main")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/mau1-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.new1, styles.new1Position]}
          onPress={() => navigation.navigate("Main")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/new1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.ffc1, styles.ffc1Position]}
          onPress={() => navigation.navigate("Main")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/ffc1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.ars11, styles.liv1Position]}
          onPress={() => navigation.navigate("Main")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/ars1-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.bri11, styles.ffc1Position]}
          onPress={() => navigation.navigate("Main")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/bri1-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wvh1, styles.ffc1Position]}
          onPress={() => navigation.navigate("Main")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/wvh1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.ast1, styles.new1Position]}
          onPress={() => navigation.navigate("Main")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/ast1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wes1, styles.new1Position]}
          onPress={() => navigation.navigate("Main")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/wes1.png")}
          />
        </Pressable>
        <Text style={[styles.text1, styles.fcTypo]}>토트넘 훗스퍼</Text>
        <Text style={[styles.text2, styles.textTypo2]}>맨체스터유나이티드</Text>
        <Text style={[styles.fc, styles.fcTypo]}>맨체스터 시티 FC</Text>
        <Text style={[styles.fc1, styles.fc1Typo]}>첼시 FC</Text>
        <Text style={[styles.fc2, styles.textTypo2]}>리버풀 FC</Text>
        <Text style={[styles.fc3, styles.fc1Typo]}>아스널 FC</Text>
        <Text style={[styles.text3, styles.textTypo1]}>애스턴 빌라</Text>
        <Text style={[styles.text4, styles.textTypo1]}>웨스트 햄</Text>
        <Text style={[styles.text5, styles.textTypo1]}>뉴캐슬</Text>
        <Text style={[styles.text6, styles.textTypo]}>브라이튼</Text>
        <Text style={[styles.text7, styles.textTypo2]}>울브스</Text>
        <Text style={[styles.text8, styles.textTypo]}>풀럼</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameShadowBox: {
    height: 647,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorDarkslategray,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    width: 375,
  },
  tor1Layout: {
    height: 88,
    width: 88,
    top: 30,
    position: "absolute",
  },
  liv1Position: {
    top: 189,
    height: 88,
    width: 88,
    position: "absolute",
  },
  new1Position: {
    top: 348,
    height: 88,
    width: 88,
    position: "absolute",
  },
  ffc1Position: {
    top: 507,
    height: 88,
    width: 88,
    position: "absolute",
  },
  fcTypo: {
    textAlign: "center",
    lineHeight: 13,
    fontSize: FontSize.size_smi,
    top: 127,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  textTypo2: {
    lineHeight: 21,
    textAlign: "center",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  fc1Typo: {
    top: 286,
    textAlign: "center",
    lineHeight: 13,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  textTypo1: {
    top: 450,
    textAlign: "center",
    lineHeight: 13,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  textTypo: {
    top: 606,
    textAlign: "center",
    lineHeight: 13,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  text: {
    marginLeft: -171.6,
    top: 42,
    left: "50%",
    fontSize: 22,
    letterSpacing: -0.9,
    lineHeight: 29,
    fontWeight: "600",
    fontFamily: FontFamily.notoSansSemiBold,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  frameChild: {
    borderRadius: 13,
    borderColor: "#f0f0f0",
    borderWidth: 2,
    borderStyle: "solid",
    left: 0,
    top: 0,
    height: 58,
    width: 346,
    position: "absolute",
  },
  textinput: {
    left: 52,
    fontSize: 18,
    fontFamily: FontFamily.notoSansRegular,
    top: 20,
    position: "absolute",
  },
  lenzIcon: {
    left: 14,
    width: 19,
    height: 18,
    top: 20,
    position: "absolute",
  },
  frame: {
    top: 85,
    left: 13,
    height: 58,
    width: 346,
    position: "absolute",
    overflow: "hidden",
  },
  frameItem: {
    top: 0,
    height: 647,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorDarkslategray,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  tor1: {
    left: 21,
  },
  liv1: {
    left: 143,
  },
  man1: {
    left: 265,
  },
  che1: {
    left: 21,
  },
  mau11: {
    left: 143,
  },
  new1: {
    left: 265,
  },
  ffc1: {
    left: 265,
  },
  ars11: {
    left: 265,
  },
  bri11: {
    left: 21,
  },
  wvh1: {
    left: 143,
  },
  ast1: {
    left: 21,
  },
  wes1: {
    left: 143,
  },
  text1: {
    left: 26,
  },
  text2: {
    top: 123,
    left: 156,
  },
  fc: {
    left: 262,
  },
  fc1: {
    left: 42,
  },
  fc2: {
    top: 283,
    left: 159,
  },
  fc3: {
    left: 281,
  },
  text3: {
    left: 32,
  },
  text4: {
    left: 160,
  },
  text5: {
    left: 290,
  },
  text6: {
    left: 38,
  },
  text7: {
    top: 603,
    left: 167,
  },
  text8: {
    left: 295,
  },
  frame1: {
    top: 165,
    overflow: "hidden",
  },
  onboarding: {
    backgroundColor: "#292931",
    height: 812,
    overflow: "hidden",
    width: 375,
  },
});

export default Onboarding;
