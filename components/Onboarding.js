import * as React from "react";
import { Text, StyleSheet, TextInput, View, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { height, width, Color, FontSize, FontFamily } from "../GlobalStyles";
import { useState } from 'react';

const Onboarding = () => {
  const navigation = useNavigation();
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teamSelected, setTeamSelected] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleTeamSelection = async (team) => {
    if (!teamSelected) {
      setSelectedTeam(team);
      setTeamSelected(true);
      await saveSelectedTeamToLocalStorage(team);
      navigation.replace('Main');
    }
  };

  const saveSelectedTeamToLocalStorage = async (team) => {
    try {
      await AsyncStorage.setItem('selectedTeam', team);
      console.log("Selected team saved to local storage:", team);
    } catch (error) {
      console.error("Error saving selected team to local storage:", error);
    }
  };
 
  const scrollToTeam = (teamRef) => {
    if (teamRef) {
      const node = findNodeHandle(teamRef);
      UIManager.measureLayout(node, scrollViewRef.current.getInnerViewNode(), () => {
        scrollViewRef.current.scrollTo({ y: 0, x: 0, animated: true });
      });
    }
  };

  const filteredTeams = TEAMS.filter(team =>
    team.toLowerCase().includes(searchText.toLowerCase())
  );

    const firstHalfTeams = filteredTeams.slice(0, 10);
  const secondHalfTeams = filteredTeams.slice(10);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.onboarding}>
        <Text style={styles.text}>응원하는 팀을 선택해 주세요</Text>
        <View style={styles.frame}>
          <View
            style={styles.frameChild}
            multiline={false}
            secureTextEntry={false}
          />
        <TextInput 
            style={[styles.textinput, styles.searchTextInput]}
                    placeholder="검색"
                    placeholderTextColor="#CCCCCC"
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                    />
        <Image
          style={styles.lenzIcon}
          contentFit="cover"
          source={require("../assets/lenz.png")}
        />
      </View>
      <View style={[styles.frame1, styles.frameShadowBox]}>
      {filteredTeams.map((team, index) => (
            <Pressable
              key={index}
              style={styles.teamItem}
              onPress={() => {
                handleTeamSelection(team);
                scrollToTeam(teamRefs[index]);
              }}
            >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={{ uri: `../assets/${team.toLowerCase().replace(/\s/g, '').replace(/[^a-z0-9]/gi, '')}.png` }}
        />
              <Text style={styles.teamName}>{team}</Text>
            </Pressable>
          ))}
        
        <View style={[styles.frameItem, styles.frameShadowBox]} />
        <Pressable
          style={[styles.tor1, styles.tor1Layout]}
          onPress={() => handleTeamSelection("토트넘 훗스퍼")}          
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/tor1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.mau1, styles.tor1Layout]}
          onPress={() => handleTeamSelection("맨체스터 유나이티드")}         
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/mau1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.mci1, styles.tor1Layout]}
          onPress={() => handleTeamSelection("맨체스터 시티")}        
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/mci1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.che1, styles.che1Position]}
          onPress={() => handleTeamSelection("첼시 FC")} 
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/che1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.liv1, styles.che1Position]}
          onPress={() => handleTeamSelection("리버풀 FC")} 
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/liv1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.ars1, styles.che1Position]}
          onPress={() => handleTeamSelection("아스널 FC")} 
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/ars1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.avl1, styles.avl1Position]}
          onPress={() => handleTeamSelection("애스턴 빌라")} 
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/avl1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wes1, styles.avl1Position]}
          onPress={() => handleTeamSelection("웨스트 햄")} 
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/wes1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.new1, styles.avl1Position]}
          onPress={() => handleTeamSelection("뉴캐슬")} 
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/new1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.bha1, styles.bha1Position]}
          onPress={() => handleTeamSelection("브라이턴")} 
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/bha1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wol1, styles.bha1Position]}
          onPress={() => handleTeamSelection("울브스")} 
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/wol1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.ffc1, styles.bha1Position]}
          onPress={() => handleTeamSelection("풀럼")} 
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/ffc1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.eve1, styles.eve1Position]}
          onPress={() => handleTeamSelection("애버턴")} 
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/eve1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.cry1, styles.eve1Position]}
          onPress={() => handleTeamSelection("크리스탈 팰리스")} 
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/cry1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.bou1, styles.eve1Position]}
          onPress={() => handleTeamSelection("AFC 본머스")} 
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/bou1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.nfo1, styles.tor1Layout]}
          onPress={() => handleTeamSelection("노팅엄 포레스트")} 
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/nfo1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.bre1, styles.bre1Position]}
          onPress={() => handleTeamSelection("브랜트퍼드")} 
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/bre1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.bur1, styles.bre1Position]}
          onPress={() => handleTeamSelection("번리")} 
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/bur1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.shu1, styles.tor1Layout]}
          onPress={() => handleTeamSelection("셰필드")} 
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/shu1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.lut1, styles.tor1Layout]}
          onPress={() => handleTeamSelection("루턴타운")} 
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/lut1.png")}
          />
        </Pressable>
        <Text style={[styles.text1, styles.textFlexBox1]}>토트넘 훗스퍼</Text>
        <Text style={[styles.text2, styles.textTypo2]}>맨체스터{"\n"}유나이티드</Text>
        <Text style={[styles.fc, styles.textFlexBox1]}>맨체스터 시티</Text>
        <Text style={styles.fc1}>첼시 FC</Text>
        <Text style={[styles.fc2, styles.fc2Layout]}>리버풀 FC</Text>
        <Text style={[styles.fc3, styles.fc2Layout]}>아스널 FC</Text>
        <Text style={[styles.text3, styles.textLayout2]}>애스턴 빌라</Text>
        <Text style={[styles.text4, styles.textTypo]}>웨스트 햄</Text>
        <Text style={[styles.text5, styles.textLayout2]}>뉴캐슬</Text>
        <Text style={[styles.text6, styles.textLayout1]}>브라이튼</Text>
        <Text style={[styles.text7, styles.textFlexBox1]}>울브스</Text>
        <Text style={[styles.text8, styles.textLayout]}>풀럼</Text>
        <Text style={[styles.text9, styles.afcFlexBox]}>에버턴</Text>
        <Text style={[styles.text10, styles.textTypo2]}>크리스탈{"\n"}팰리스</Text>
        <Text style={[styles.afc, styles.afcFlexBox]}>AFC 본머스</Text>
        <Text style={[styles.text11, styles.textFlexBox]}>브랜트퍼드</Text>
        <Text style={[styles.text12, styles.textTypo]}>
          <Text style={styles.txt}>노팅엄{"\n"}포레스트</Text>
        </Text>
        <Text style={[styles.text13, styles.textFlexBox]}>번리</Text>
        <Text style={[styles.text14, styles.textLayout1]}>셰필드</Text>
        <Text style={[styles.text15, styles.textLayout1]}>루턴타운</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameShadowBox: {
    height: height * 1099,
    borderTopWidth: width * 1,
    borderColor: Color.colorGainsboro,
    shadowOpacity: width * 1,
    elevation: width * 4,
    shadowRadius: width * 4,
    shadowOffset: {
      width: 0,
      height: height * 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorDarkslategray,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    width: width * 375,
  },
  tor1Layout: {
    height: height * 96,
    width: width * 96,
    position: "absolute",
  },
  che1Position: {
    top: height * 177,
    height: height * 96,
    width: width * 96,
    position: "absolute",
  },
  avl1Position: {
    top: height * 332,
    height: height * 96,
    width: width * 96,
    position: "absolute",
  },
  bha1Position: {
    top: height * 487,
    height: height * 96,
    width: width * 96,
    position: "absolute",
  },
  eve1Position: {
    top: height * 642,
    height: height * 96,
    width: width * 96,
    position: "absolute",
  },
  bre1Position: {
    top: height * 797,
    height: height * 96,
    width: width * 96,
    position: "absolute",
  },
  textFlexBox1: {
    height: height * 30,
    justifyContent: "center",
    lineHeight: height * 16,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  textTypo2: {
    textAlign: "center",
    fontSize: FontSize.size_smi,
    lineHeight: height * 16,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  fc2Layout: {
    width: width * 100,
    top: height * 280,
    height: height * 30,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    lineHeight: height * 16,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  textLayout2: {
    top: height * 435,
    height: height * 30,
    justifyContent: "center",
    lineHeight: height * 16,
  },
  textTypo: {
    width: width * 100,
    left: width * 135,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  textLayout1: {
    width: width * 50,
    height: height * 30,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    lineHeight: height * 16,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  textLayout: {
    width: width * 50,
    left: width * 283,
  },
  afcFlexBox: {
    top: height * 746,
    height: height * 30,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    lineHeight: height * 16,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  textFlexBox: {
    top: height * 900,
    height: height * 30,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    lineHeight: height * 16,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  text: {
    marginLeft: width * -172.6,
    top: height * 42,
    left: "50%",
    fontSize: width * 22,
    letterSpacing: width * -0.9,
    lineHeight: height * 29,
    fontWeight: "600",
    fontFamily: FontFamily.notoSansSemiBold,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  frameChild: {
    borderRadius: width * 13,
    borderColor: "#f0f0f0",
    borderWidth: width * 2,
    borderStyle: "solid",
    left: 0,
    top: 0,
    height: height * 58,
    width: width * 346,
    position: "absolute",
  },
  textinput: {
    left: width * 52,
    fontSize: width * 18,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorWhite,    
    top: height * 15,
    position: "absolute",
    paddingHorizontal: height * 10, // Padding for the input box
    paddingLeft: 0, // Padding for the placeholder text
  },
  lenzIcon: {
    left: width * 14,
    width: width * 19,
    height: height * 18,
    top: height * 20,
    position: "absolute",
  },
  frame: {
    top: height * 85,
    left: width * 11,
    height: height * 58,
    width: width * 346,
    position: "absolute",
    overflow: "hidden",
  },
  frameItem: {
    top: 0,
    height: height * 1099,
    borderTopWidth: width * 1,
    borderColor: Color.colorGainsboro,
    shadowOpacity: width * 1,
    elevation: width * 4,
    shadowRadius: width * 4,
    shadowOffset: {
      width: 0,
      height: height * 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorDarkslategray,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  tor1: {
    top: height * 22,
    height: height * 96,
    width: width * 96,
    left: width * 16,
  },
  mau1: {
    left: width * 138,
    top: height * 22,
    height: height * 96,
    width: width * 96,
  },
  mci1: {
    left: width * 260,
    top: height * 22,
    height: height * 96,
    width: width * 96,
  },
  che1: {
    left: width * 16,
  },
  liv1: {
    left: width * 138,
  },
  ars1: {
    left: width * 260,
  },
  avl1: {
    left: width * 16,
  },
  wes1: {
    left: width * 138,
  },
  new1: {
    left: width * 260,
  },
  bha1: {
    left: width * 16,
  },
  wol1: {
    left: width * 138,
  },
  ffc1: {
    left: width * 260,
  },
  eve1: {
    left: width * 16,
  },
  cry1: {
    left: width * 138,
  },
  bou1: {
    left: width * 260,
  },
  nfo1: {
    top: height * 796,
    left: width * 138,
  },
  bre1: {
    left: width * 16,
  },
  bur1: {
    left: width * 260,
  },
  shu1: {
    top: height * 952,
    left: width * 16,
  },
  lut1: {
    top: height * 951,
    left: width * 138,
  },
  text1: {
    left: width * 16,
    width: width * 100,
    top: height * 125,
    justifyContent: "center",
    lineHeight: height * 16,
  },
  text112: {
    left: width * 16,
    width: width * 100,
    top: height * 100,
    justifyContent: "center",
    lineHeight: height * 16,
  },
  text2: {
    top: height * 118,
    lineHeight: height * 16,
    left: width * 157,
  },
  fc: {
    left: width * 259,
    width: width * 100,
    top: height * 125,
    justifyContent: "center",
    lineHeight: height * 16,
  },
  fc1: {
    left: width * 16,
    width: width * 100,
    top: height * 280,
    height: width * 30,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    lineHeight: height * 16,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  fc2: {
    left: width * 138,
  },
  fc3: {
    left: width * 257,
  },
  text3: {
    left: width * 16,
    width: width * 100,
    alignItems: "flex-end",
    display: "flex",
    top: height * 420,
    textAlign: "center",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  text4: {
    top: height * 435,
    height: height * 30,
    justifyContent: "center",
    lineHeight: height * 16,
  },
  text5: {
    left: width * 285,
    width: width * 50,
    alignItems: "flex-end",
    display: "flex",
    top: height * 420,
    textAlign: "center",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  text6: {
    left: width * 40,
    width: width * 50,
    top: height * 590,
  },
  text7: {
    left: width * 160,
    top: height * 590,
    width: width * 50,
  },
  text8: {
    top: height * 590,
    height: height * 30,
    justifyContent: "center",
    lineHeight: height * 16,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  text9: {
    left: width * 39,
    width: width * 50,
  },
  text10: {
    top: height * 740,
    left: width * 162,
    lineHeight: height * 18,
  },
  afc: {
    left: width * 268,
    width: width * 90,
  },
  text11: {
    left: width * 22,
    width: width * 80,
  },
  txt: {
    width: "100%",
  },
  text12: {
    top: height * 892,
    height: height * 42,
    lineHeight: height * 18,
  },
  text13: {
    width: width * 45,
    left: width * 286,
  },
  text14: {
    top: height * 1056,
    left: width * 40,
    width: width * 48,
  },
  text15: {
    top: height * 1055,
    left: width * 163,
  },
  frame1: {
    top: height * 165,
    overflow: "hidden",
  },
  onboarding: {
    backgroundColor: "#292931",
    height: height * 1263,
    overflow: "hidden",
    width: '100%',
  },
});

export default Onboarding;

const TEAMS = ["토트넘 훗스퍼", "맨체스터 유나이티드", "맨체스터 시티", "첼시 FC", "리버풀 FC", "아스널 FC", "애스턴 빌라", "웨스트 햄", "뉴캐슬", "브라이튼", "울브스", "풀럼", "에버턴", "크리스탈 팰리스", "AFC 본머스", "브랜트퍼드", "노팅엄 포레스트", "번리", "셰필드", "루턴타운"];