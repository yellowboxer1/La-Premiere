import React, { useState, useEffect, useMemo} from "react";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import { useStatsData } from "../DB/stats";
import { Border, width, height, FontFamily, FontSize, Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";


const SeasonStats = () => {
    const statsData = useStatsData();
    const [playerName1, setPlayerName1] = useState(''); 
    const [playerStat1, setPlayerStat1] = useState(''); 
    const [playerName2, setPlayerName2] = useState(''); 
    const [playerStat2, setPlayerStat2] = useState(''); 
    const [playerGoals, setPlayerGoals] = useState(''); 
    const [playerAssists, setPlayerAssists] = useState('');   
    const navigation = useNavigation();

const main = () => {
    navigation.navigate('MainScreen');
};
    

    useEffect(() => {
        if (statsData) {
          setPlayerName1(statsData.playerName1 || ''); 
          setPlayerStat1(statsData.playerStat1 || ''); 
          setPlayerName2(statsData.playerName2 || '');
          setPlayerStat2(statsData.playerStat2 || '');
          setPlayerGoals(statsData.playerGoals || '');
          setPlayerAssists(statsData.playerAssists || '');
        }
      }, [statsData]);
    
    console.log(playerGoals)

      const clubLogos = useMemo(() => ({
        "Arsenal": require("../assets/ARS.png"),
        "Liverpool": require("../assets/LIV.png"),
        "Aston Villa": require("../assets/AVL.png"),
        "Man City": require("../assets/MCI.png"),
        "Tottenham Hotspur": require("../assets/TOT.png"),
        "Man Utd": require("../assets/MUN.png"),
        "West Ham": require("../assets/WHU.png"),
        "Brighton": require("../assets/BHA.png"),
        "Wolves": require("../assets/WOL.png"),
        "Newcastle": require("../assets/NEW.png"),
        "Chelsea": require("../assets/CHE.png"),
        "Bournemouth": require("../assets/BOU.png"),
        "Fulham": require("../assets/FUL.png"),    
        "Crystal Palace": require("../assets/CRY.png"),
        "Brentford": require("../assets/BRE.png"),
        "Everton": require("../assets/EVE.png"),
        "Nottingham Forest": require("../assets/NFO.png"),
        "Luton Town": require("../assets/LUT.png"),
        "Burnley": require("../assets/BUR.png"),
        "Sheffield United": require("../assets/SHU.png"),
      }), []);
    
      const StatsName = useMemo(() => ({
        "Erling Haaland": require("../assets/stats/Haaland1.png"),
        "Ollie Watkins": require("../assets/stats/Watkins1.png"),
        "Mohamed Salah": require("../assets/stats/Salah1.png"),
        "Dominic Solanke": require("../assets/stats/Solanke1.png"),
        "Jarrod Bowen": require("../assets/stats/Bowen1.png"),
        "Son Heung-Min": require("../assets/stats/Son1.png"),
        "Bukayo Saka": require("../assets/stats/Saka1.png"),
        "Alexander Isak": require("../assets/stats/Isak1.png"),
        "Cole Palmer": require("../assets/stats/Palmer1.png"),
        "Pascal Gross": require("../assets/stats/Gross1.png"),
        "Pascal Groß": require("../assets/stats/Gross1.png"),
        "Kieran Trippier": require("../assets/stats/Trippier1.png"),
        "Pedro Neto": require("../assets/stats/Neto1.png"),    
        "Julián Álvarez": require("../assets/stats/Álvarez1.png"),
        "Leon Bailey": require("../assets/stats/Bailey1.png"),
      }), []);

      const nameKR = useMemo(() => ({
        "Erling Haaland": "엘링 홀란",
        "Mohamed Salah": "모하메드 살라",
        "Dominic Solanke": "도미닉 솔랑케",
        "Ollie Watkins": "올리 왓킨스",
        "Jarrod Bowen": "재러드 보언",
        "Alexander Isak": "알렉산더 이사크",
        "Son Heung-Min": "손흥민",
        "Cole Palmer": "콜 파머",
        "Bukayo Saka": "부카요 사카",
        "Phil Foden": "필 포든",
        "Kieran Trippier": "키런 트리피어",
        "Pedro Neto": "페드로 네투",
        "Julián Álvarez": "훌리안 알바레스",
        "Leon Bailey": "레온 베일리",
        "Pascal Groß": "파스칼 그로스",
        "Pascal Gross": "파스칼 그로스"
    }), []);
    
      function getLogoPath(clubName) {
        // Check if the club name exists in the clubLogos object
        if (clubLogos.hasOwnProperty(clubName)) {
          // Return the corresponding logo path
          return clubLogos[clubName];
        } else {
          // Return null if no matching logo found
          return null;
        }
      }
  return (
    <ScrollView>
    <View style={styles.stats}>
      <View style={styles.statsChild} />
      <View style={styles.wrapper}>
        <Text style={styles.text1}>시즌 스텟</Text>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Pressable onPress={main}>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/vector-26822.png")}
        />
              </Pressable>
      </View>
      <Text style={[styles.text2, styles.textTypo9]}>최다 득점</Text>
      <Text style={styles.text3}>2023/24 시즌</Text>
      <Image
        style={[styles.image575Icon, styles.iconLayout1]}
        contentFit="cover"
        source={StatsName[playerName1]}
      />
      <Text style={[styles.text4, styles.textTypo8]}>{playerStat1}</Text>
      <View style={[styles.statsInner, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
      </View>
      <Text style={[styles.text5, styles.textTypo7]}>
        {playerGoals[0] ? playerGoals[0].playerStat : ''}
        </Text>
      <Text style={[styles.text6, styles.textFlexBox]}>
      {playerGoals[0] ? playerGoals[0].playerNm : ''}
        </Text>
        <Text style={[styles.text7, styles.textLayout]}>
        {playerGoals[0] ? nameKR[playerGoals[0].playerName] : ''}
        </Text>
      <Image
        style={[styles.image580Icon, styles.iconLayout]}
        contentFit="cover"
        source={getLogoPath(playerGoals[0]?.teamName)} 
      />
      <View style={[styles.groupView, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
      </View>
      <Text style={[styles.text8, styles.textTypo6]}>
      {playerGoals[1] ? playerGoals[1].playerStat : ''}
        </Text>
      <Text style={[styles.text9, styles.textTypo6]}>
      {playerGoals[1] ? playerGoals[1].playerNm : ''}
        </Text>
      <Text style={[styles.text10, styles.textTypo6]}>
      {playerGoals[1] ? nameKR[playerGoals[1].playerName] : ''}
        </Text>
      <Image
        style={[styles.image581Icon, styles.iconLayout]}
        contentFit="cover"
        source={getLogoPath(playerGoals[1]?.teamName)} 
      />
      <View style={[styles.statsInner1, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
      </View>
      <Text style={[styles.text11, styles.textTypo5]}>
      {playerGoals[2] ? playerGoals[2].playerStat : ''}
        </Text>
      <Text style={[styles.text12, styles.textTypo5]}>
      {playerGoals[2] ? playerGoals[2].playerNm : ''}
        </Text>
      <Text style={[styles.text13, styles.textTypo5]}>
      {playerGoals[2] ? nameKR[playerGoals[2].playerName] : ''}
        </Text>
      <Image
        style={[styles.image582Icon, styles.iconLayout]}
        contentFit="cover"
        source={getLogoPath(playerGoals[2]?.teamName)} 
      />
      <View style={[styles.statsInner2, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
      </View>
      <Text style={[styles.text14, styles.textTypo4]}>      
      {playerGoals[3] ? playerGoals[3].playerStat : ''}
        </Text>
      <Text style={[styles.text15, styles.textTypo4]}>
      {playerGoals[3] ? playerGoals[3].playerNm : ''}
        </Text>
      <Text style={[styles.text16, styles.textTypo4]}>
      {playerGoals[3] ? nameKR[playerGoals[3].playerName] : ''}
        </Text>
      <Image
        style={[styles.image583Icon, styles.iconLayout]}
        contentFit="cover"
        source={getLogoPath(playerGoals[3]?.teamName)} 
      />
      <Text style={[styles.text17, styles.textTypo9]}>최다 도움</Text>
      <Image
        style={[styles.image584Icon, styles.iconLayout1]}
        contentFit="cover"
        source={StatsName[playerName2]}
      />
      <Text style={[styles.text18, styles.textTypo8]}>{playerStat2}</Text>
      <View style={[styles.statsInner3, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
      </View>
      <Text style={[styles.text19, styles.textTypo3]}>
      {playerAssists[9] ? playerAssists[9].playerStat : ''}
        </Text>
      <Text style={[styles.text20, styles.textTypo3]}>
      {playerAssists[9] ? playerAssists[9].playerNm : ''}
        </Text>
      <Text style={[styles.text21, styles.textTypo3]}>
      {playerAssists[9] ? nameKR[playerAssists[9].playerName] : ''}
        </Text>
      <Image
        style={[styles.image585Icon, styles.iconLayout]}
        contentFit="cover"
        source={getLogoPath(playerAssists[9]?.teamName)} 
      />
      <View style={[styles.statsInner4, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
      </View>
      <Text style={[styles.text22, styles.textTypo2]}>
      {playerAssists[10] ? playerAssists[10].playerStat : ''}
        </Text>
      <Text style={[styles.text23, styles.textTypo2]}>
      {playerAssists[10] ? playerAssists[10].playerNm : ''}
        </Text>
      <Text style={[styles.text24, styles.textTypo2]}>
      {playerAssists[10] ? nameKR[playerAssists[10].playerName] : ''}
        </Text>
      <Image
        style={[styles.image586Icon, styles.iconLayout]}
        contentFit="cover"
        source={getLogoPath(playerAssists[10]?.teamName)} 
      />
      <View style={[styles.statsInner5, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
      </View>
      <Text style={[styles.text25, styles.textTypo1]}>
      {playerAssists[11] ? playerAssists[11].playerStat : ''}
        </Text>
      <Text style={[styles.text26, styles.textTypo1]}>
      {playerAssists[11] ? playerAssists[11].playerNm : ''}
        </Text>
      <Text style={[styles.text27, styles.textTypo1]}>
      {playerAssists[11] ? nameKR[playerAssists[11].playerName] : ''}
        </Text>
      <Image
        style={[styles.image587Icon, styles.iconLayout]}
        contentFit="cover"
        source={getLogoPath(playerAssists[11]?.teamName)} 
      />
      <View style={[styles.statsInner6, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
      </View>
      <Text style={[styles.text28, styles.textTypo]}>
      {playerAssists[12] ? playerAssists[12].playerStat : ''}
        </Text>
      <Text style={[styles.text29, styles.textTypo]}>
      {playerAssists[12] ? playerAssists[12].playerNm : ''}
        </Text>
      <Text style={[styles.text30, styles.textTypo]}>
      {playerAssists[12] ? nameKR[playerAssists[12].playerName] : ''}
        </Text>
      <Image
        style={[styles.image588Icon, styles.iconLayout]}
        contentFit="cover"
        source={getLogoPath(playerAssists[12]?.teamName)} 
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconSpaceBlock: {
    marginLeft: width * 6,
    height: height * 12,
  },
  groupChildLayout: {
    height: height * 32,
    width: width * 32,
    position: "absolute",
  },
  textTypo9: {
    fontFamily: FontFamily.notoSansBlack,
    fontWeight: "600",
    lineHeight: height * 24,
    fontSize: FontSize.size_3xl,
    left: width * 21,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  iconLayout1: {
    height: height * 203,
    width: width * 344,
    left: width * 13,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textTypo8: {
    lineHeight: height * 43,
    fontSize: FontSize.size_21xl,
    left: width * 32,
    fontFamily: FontFamily.notoSansBlack,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  groupInnerLayout: {
    height: height * 55,
    width: width * 344,
    position: "absolute",
  },
  textTypo7: {
    height: height * 29,
    alignItems: "center",
    display: "flex",
    color: Color.colorWhitesmoke_100,
    lineHeight: height * 21,
    letterSpacing: width * -0.2,
    fontSize: FontSize.size_mid,
    top: height * 460,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textFlexBox: {
    width: width * 17,
    justifyContent: "center",
    left: width * 31,
    textAlign: "center",
  },
  textLayout: {
    width: width * 136,
    left: width * 98,
    textAlign: "left",
  },
  iconLayout: {
    height: height * 18,
    left: width * 65,
    width: width * 18,
    position: "absolute",
  },
  textTypo6: {
    top: height * 516,
    height: height * 29,
    alignItems: "center",
    display: "flex",
    color: Color.colorWhitesmoke_100,
    lineHeight: height * 21,
    letterSpacing: width * -0.2,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo5: {
    top: height * 571,
    height: height * 29,
    alignItems: "center",
    display: "flex",
    color: Color.colorWhitesmoke_100,
    lineHeight: height * 21,
    letterSpacing: width * -0.2,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo4: {
    top: height * 626,
    height: height * 29,
    alignItems: "center",
    display: "flex",
    color: Color.colorWhitesmoke_100,
    lineHeight: height * 21,
    letterSpacing: width * -0.2,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo3: {
    top: height * 933,
    height: height * 29,
    alignItems: "center",
    display: "flex",
    color: Color.colorWhitesmoke_100,
    lineHeight: height * 21,
    letterSpacing: width * -0.2,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo2: {
    top: height * 989,
    height: height * 29,
    alignItems: "center",
    display: "flex",
    color: Color.colorWhitesmoke_100,
    lineHeight: height * 21,
    letterSpacing: width * -0.2,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo1: {
    top: height * 1044,
    height:height *  29,
    alignItems: "center",
    display: "flex",
    color: Color.colorWhitesmoke_100,
    lineHeight: height * 21,
    letterSpacing: width * -0.2,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo: {
    top: height * 1099,
    height: height * 29,
    alignItems: "center",
    display: "flex",
    color: Color.colorWhitesmoke_100,
    lineHeight: height * 21,
    letterSpacing: width * -0.2,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  statsChild: {
    height: height * 135,
    top: "0%",
    right: "0%",
    bottom: "88.34%",
    left: "0%",
    backgroundColor: Color.colorDarkslategray,
    position: "absolute",
    width: "100%",
  },
  text: {
    top: "0.95%",
    left: "3.47%",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_lg,
    letterSpacing: width * -0.4,
    lineHeight: height * 20,
    textAlign: "center",
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    left: 0,
    top: 0,
    width: width * 80,
    color: Color.colorWhite,
    position: "absolute",
  },
  wrapper: {
    marginLeft: width * -37.5,
    top: height *  80,
    height: height * 18,
    width: width * 80,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  groupItem: {
    top: height * 10,
    width: width * 7,
    height: height * 13,
    left: width * 12,
    position: "absolute",
  },
  rectangleParent: {
    top: height * 72,
    left: width * 12,
  },
  text2: {
    top: height * 218,
  },
  text3: {
    top: height * 170,
    fontSize: FontSize.size_xl,
    lineHeight: height * 22,
    fontFamily: FontFamily.notoSansRegular,
    left: width * 21,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  image575Icon: {
    top: height * 261,
  },
  text4: {
    top: height * 394,
  },
  groupInner: {
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderBottomWidth: width * 0.5,
    left: 0,
    top: 0,
    backgroundColor: Color.colorDarkslategray,
  },
  statsInner: {
    top: height * 444,
    left: width * 13,
    height: height * 55,
  },
  text5: {
    width: width * 29,
    textAlign: "right",
    left: width * 310,
  },
  text6: {
    height: height * 29,
    alignItems: "center",
    display: "flex",
    color: Color.colorWhitesmoke_100,
    lineHeight: height * 21,
    letterSpacing: width * -0.2,
    fontSize: FontSize.size_mid,
    top: height * 460,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text7: {
    height: height * 29,
    alignItems: "center",
    display: "flex",
    color: Color.colorWhitesmoke_100,
    lineHeight: height * 21,
    letterSpacing: width * -0.2,
    fontSize: FontSize.size_mid,
    top: height * 460,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  image580Icon: {
    top: height * 463,
  },
  groupView: {
    top: height * 500,
    left: width * 13,
    height: height * 55,
  },
  text8: {
    width: width * 28,
    textAlign: "right",
    left: width * 310,
  },
  text9: {
    width: width * 17,
    justifyContent: "center",
    left: width * 31,
    textAlign: "center",
  },
  text10: {
    width: width * 127,
    left: width * 98,
    textAlign: "left",
  },
  image581Icon: {
    top: height * 519,
  },
  statsInner1: {
    top: height * 556,
    left: width * 13,
    height: height * 55,
  },
  text11: {
    width: width * 28,
    textAlign: "right",
    left: width * 310,
  },
  text12: {
    width: width * 17,
    justifyContent: "center",
    left: width * 31,
    textAlign: "center",
  },
  text13: {
    width: width * 127,
    left: width * 98,
    textAlign: "left",
  },
  image582Icon: {
    top: height * 574,
  },
  statsInner2: {
    top: height * 612,
    left: width * 13,
    height: height * 55,
  },
  text14: {
    width: width * 28,
    textAlign: "right",
    left: width * 310,
  },
  text15: {
    width: width * 17,
    justifyContent: "center",
    left: width * 31,
    textAlign: "center",
  },
  text16: {
    width: width * 127,
    left: width * 98,
    textAlign: "left",
  },
  image583Icon: {
    top: height * 629,
  },
  text17: {
    top: height * 691,
  },
  image584Icon: {
    top: height * 734,
  },
  text18: {
    top: height * 867,
  },
  statsInner3: {
    top: height * 918,
    left:width *  13,
    height: height * 55,
  },
  text19: {
    width: width * 28,
    textAlign: "right",
    left: width * 310,
  },
  text20: {
    width: width * 17,
    justifyContent: "center",
    left: width * 31,
    textAlign: "center",
  },
  text21: {
    width: width * 127,
    left: width * 98,
    textAlign: "left",
  },
  image585Icon: {
    top: width * 962,
  },
  statsInner4: {
    top: height * 973,
    left: width * 13,
    height: height * 55,
  },
  text22: {
    width: width * 28,
    textAlign: "right",
    left: width * 310,
  },
  text23: {
    width: width * 17,
    justifyContent: "center",
    left: width * 31,
    textAlign: "center",
  },
  text24: {
    width: width * 127,
    left: width * 98,
    textAlign: "left",
  },
  image586Icon: {
    top: height * 992,
  },
  statsInner5: {
    top: height * 1028,
    left: width * 13,
    height: height * 55,
  },
  text25: {
    width: width * 28,
    textAlign: "right",
    left: width * 310,
  },
  text26: {
    width: width * 17,
    justifyContent: "center",
    left: width * 31,
    textAlign: "center",
  },
  text27: {
    width: width * 127,
    left: width * 98,
    textAlign: "left",
  },
  image587Icon: {
    top: height * 1047,
  },
  statsInner6: {
    top: height * 1083,
    left: width * 13,
    height: height * 55,
  },
  text28: {
    width: width * 28,
    textAlign: "right",
    left: width * 310,
  },
  text29: {
    width: width * 17,
    justifyContent: "center",
    left: width * 31,
    textAlign: "center",
  },
  text30: {
    width: width * 127,
    left: width * 98,
    textAlign: "left",
  },
  image588Icon: {
    top: height * 1102,
  },
  stats: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: height * 1158,
    overflow: "hidden",
    width: "100%",
  },
});

export default SeasonStats;
