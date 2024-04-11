import React, { useState, useEffect } from 'react';
import { Image } from "expo-image";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Appearance, Pressable} from "react-native";
import { width, height, Color, FontSize, FontFamily } from "../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import stats from "../DB/stats.json";

const FavorTeam = () => {
    const [favoriteTeam, setFavoriteTeam] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false); 
    const [topPlayers, setTopPlayers] = useState([]);
    const [topPlayers1, setTopPlayers1] = useState([]);
    const [topPlayers2, setTopPlayers2] = useState([]);

    
    const navigation = useNavigation();

    const main = () => {
        navigation.navigate('MainScreen');
    };


    const playerImages = {
      "요한 구드문드손":require("../assets/fame/GDS.png"),
      "파스칼 그로스": require("../assets/fame/GS.png"),
      "셰이 기븐": require("../assets/fame/GV.png"),
      "라이언 긱스": require("../assets/fame/GIG.png"),
      "후벵 네베스": require("../assets/fame/NBS.png"),
      "페드로 네투": require("../assets/fame/NT.png"),
      "마크 노블": require("../assets/fame/NB.png"),
      "올리버 노우드": require("../assets/fame/NWD.png"),
      "알피 다우티": require("../assets/fame/DT.png"),
      "케빈 데 브라위너": require("../assets/fame/DW.png"),
      "루이스 덩크": require("../assets/fame/DK.png"),
      "클린트 뎀프시": require("../assets/fame/DFS.png"),
      "브라이언 딘": require("../assets/fame/DE.png"),
      "프랭크 램파드": require("../assets/fame/LPD.png"),
      "웨인 루니": require("../assets/fame/RN.png"),
      "로멜로 루카쿠": require("../assets/fame/RCC.png"),
      "스티드 말브랑크": require("../assets/fame/MBR.png"),
      "칼튼 모리스": require("../assets/fame/MRS.png"),
      "닐 무페이": require("../assets/fame/MFE.png"),
      "조지 발독": require("../assets/fame/BD.png"),
      "가레스 배리": require("../assets/fame/BR.png"),
      "데니스 베르캄프": require("../assets/fame/BRC.png"),
      "레이튼 베인스": require("../assets/fame/BIS.png"),
      "벤 미": require("../assets/fame/BM.png"),
      "모하메드 살라": require("../assets/fame/SR.png"),
      "손흥민": require("../assets/fame/SON.png"),
      "놀베르토 솔라노": require("../assets/fame/SRN.png"),
      "도미닉 솔란케": require("../assets/fame/SRQ.png"),
      "앨런 시어러": require("../assets/fame/SS.png"),
      "다비드 실바": require("../assets/fame/SB.png"),
      "세르히오 아구에로": require("../assets/fame/AGE.png"),
      "아그본라허": require("../assets/fame/AGH.png"),
      "아담 스미스": require("../assets/fame/ADS.png"),
      "엘리야 아데바요": require("../assets/fame/ADB.png"),
      "미카일 안토니오": require("../assets/fame/ATN.png"),
      "티에리 앙리": require("../assets/fame/AR.png"),
      "애슐리 영": require("../assets/fame/EY.png"),
      "대런 앤더튼": require("../assets/fame/ET.png"),
      "올리 왓킨스": require("../assets/fame/WK.png"),
      "휴고 요리스": require("../assets/fame/YR.png"),
      "조엘 워드": require("../assets/fame/WD.png"),
      "요안 위사": require("../assets/fame/WS.png"),
      "칼럼 윌슨": require("../assets/fame/WIS.png"),
      "브라이언 음뵈모": require("../assets/fame/UBM.png"),
      "이반 토니": require("../assets/fame/IT.png"),
      "비탈리 자넬트": require("../assets/fame/JN.png"),
      "윌프리드 자하": require("../assets/fame/JH.png"),
      "스티븐 제라드": require("../assets/fame/GR.png"),
      "조슈아 킹": require("../assets/fame/JK.png"),
      "존 테리": require("../assets/fame/JT.png"),
      "토마스 카민스키": require("../assets/fame/KS.png"),
      "제이미 캐러거": require("../assets/fame/KRR.png"),
      "해리 케인": require("../assets/fame/KN.png"),
      "시무스 콜먼": require("../assets/fame/KM.png"),
      "크리스 우드": require("../assets/fame/CRSW.png"),
      "레이 팔러": require("../assets/fame/PR.png"),
      "라이언 프레이저": require("../assets/fame/PRJ.png"),
      "브레데 한겔란트": require("../assets/fame/HGR.png"),
      "엘링 홀란": require("../assets/fame/HR.png"),
      "라울 히메네스": require("../assets/fame/HMN.png"),
      "이안 완": require("../assets/fame/IW.png"),
      "브리얀 로이": require("../assets/fame/BRR.png"),
      "스티브 체틀": require("../assets/fame/SCC.png"),
    };

    function getPlayerImage(playerName) {
      if (playerImages.hasOwnProperty(playerName)) {
        return playerImages[playerName];
      } else {
        return null;
      }
    }

    const clubLogos = {
        "아스널 FC": require("../assets/ARS.png"),
        "리버풀 FC": require("../assets/LIV.png"),
        "애스턴 빌라": require("../assets/AVL.png"),
        "맨체스터 시티": require("../assets/MCI.png"),
        "토트넘 홋스퍼": require("../assets/TOT.png"),
        "맨체스터 유나이티드": require("../assets/MUN.png"),
        "웨스트 햄": require("../assets/WHU.png"),
        "브라이턴": require("../assets/BHA.png"),
        "울브스": require("../assets/WOL.png"),
        "뉴캐슬": require("../assets/NEW.png"),
        "첼시 FC": require("../assets/CHE.png"),
        "AFC 본머스": require("../assets/BOU.png"),
        "풀럼": require("../assets/FUL.png"),    
        "크리스탈 팰리스": require("../assets/CRY.png"),
        "브랜트퍼드": require("../assets/BRE.png"),
        "에버턴": require("../assets/EVE.png"),
        "노팅엄 포레스트": require("../assets/NFO.png"),
        "루턴타운": require("../assets/LUT.png"),
        "번리": require("../assets/BUR.png"),
        "셰필드": require("../assets/SHU.png"),
      };
    
    
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

      const stadium = {
        "아스널 FC": "Emirates Stadium, London",
        "리버풀 FC": "Anfield, Liverpool",
        "애스턴 빌라": "Villa Park, Birmingham",
        "맨체스터 시티": "Etihad Stadium, Manchester",
        "토트넘 홋스퍼": "Tottenham Hotspur Stadium, London",
        "맨체스터 유나이티드": "Old Trafford, Manchester",
        "웨스트 햄": "London Stadium, London",
        "브라이턴": "American Express Stadium, Falmer",
        "울브스": "Molineux Stadium, Wolverhampton",
        "뉴캐슬": "St. James' Park, Newcastle",
        "첼시 FC": "Stamford Bridge, London",
        "AFC 본머스": "Vitality Stadium, Bournemouth",
        "풀럼": "Craven Cottage, London",    
        "크리스탈 팰리스": "Selhurst Park, London",
        "브랜트퍼드": "Gtech Community Stadium, Brentford",
        "에버턴": "Goodison Park, Liverpool",
        "노팅엄 포레스트": "The City Ground, Nottingham",
        "루턴타운": "Kenilworth Road, Luton",
        "번리": "Turf Moor, Burnley",
        "셰필드": "Bramall Lane, Sheffield",
      };     
  
      useEffect(() => {
        // Fetch favorite team from AsyncStorage
        const fetchData = async () => {
          try {
            // Get favorite team from AsyncStorage
            const Team = await AsyncStorage.getItem('selectedTeam');
            if (Team) {
              // Set favorite team to state
              setFavoriteTeam(Team);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        // Call fetchData function
        fetchData();
      }, []);

      useEffect(() => {
        const findTopPlayersInAppearances = async () => {
          try {
            if (!favoriteTeam) return; // Check if favorite team is set
      
            const appearances = stats.filter(item => item.Category === "Appearances" && item.Team === favoriteTeam);
            const sortedAppearances = appearances.sort((a, b) => b.Value - a.Value);
            const topPlayers = sortedAppearances.slice(0, 3);
            setTopPlayers(topPlayers);
          } catch (error) {
            console.error('Error finding top players in appearances:', error);
          }
        };
        findTopPlayersInAppearances();
      }, [favoriteTeam]);
      
      useEffect(() => {
        const findTopPlayersInGoals = async () => {
          try {
            if (!favoriteTeam) return; // Check if favorite team is set
      
            const goals = stats.filter(item => item.Category === "Goals" && item.Team === favoriteTeam);
            const sortedGoals = goals.sort((a, b) => b.Value - a.Value);
            const topPlayers1 = sortedGoals.slice(0, 3);
            setTopPlayers1(topPlayers1);
          } catch (error) {
            console.error('Error finding top players in goals:', error);
          }
        };
        findTopPlayersInGoals();
      }, [favoriteTeam]);

      useEffect(() => {
        const findTopPlayersInAssist = async () => {
          try {
            if (!favoriteTeam) return; // Check if favorite team is set
      
            const Assist = stats.filter(item => item.Category === "Assist" && item.Team === favoriteTeam);
            const sortedAssist = Assist.sort((a, b) => b.Value - a.Value);
            const topPlayers2 = sortedAssist.slice(0, 3);
            setTopPlayers2(topPlayers2);
          } catch (error) {
            console.error('Error finding top players in Assist:', error);
          }
        };
        findTopPlayersInAssist();
      }, [favoriteTeam]);
    
      const handleHeartPress = async () => {
        try {
          // Remove any previously set favorite team
          await AsyncStorage.removeItem('selectedTeam');
      
          // Set the favorite status to true
          setIsFavorite(true);
        } catch (error) {
          console.error('Error handling heart press:', error);
        }
      };

  return (
    <ScrollView>
    <View style={styles.favor}>
      <Image
        style={[styles.favorChild, styles.favorChildLayout1]}
        contentFit="cover"
        source={require("../assets/group-1000003600.png")}
      />
      <Image
        style={styles.favorItem}
        contentFit="cover"
        source={require("../assets/group-1000003596.png")}
      />
      <Pressable style = {styles.back} onPress={main}>
      <Image
        style={styles.favorInner}
        contentFit="cover"
        source={require("../assets/vector-26823.png")}
      />
     </Pressable>
      <View style={[styles.frameView, styles.wrapperLayout]} />
        <Text style={[styles.text, styles.textClr]}>구단 정보</Text>
      <Text style={[styles.text1, styles.textTypo9]}>{favoriteTeam}</Text>
      <Text style={[styles.text2, styles.textTypo9]}>통산 득점</Text>
      <View style={[styles.tot, styles.totLayout]}>
        <View style={[styles.totChild, styles.totLayout]} />
        <Image
          style={[styles.totIcon, styles.totLayout]}
          contentFit="cover"
          source={getLogoPath(favoriteTeam)}
        />
      </View>
      <Text style={[styles.tottenhamHotspurStadiumContainer, styles.textClr]}>
      {stadium[favoriteTeam]}
      </Text>
      <TouchableOpacity onPress={handleHeartPress}>
      <Image
        style={styles.heartIcon}
        contentFit="cover"
        source={isFavorite ? require("../assets/heart1.png") : require("../assets/heart2.png")}
        />
     </TouchableOpacity>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={topPlayers.length > 0 ? getPlayerImage(topPlayers1[0].Player) : null}
      />
      <Text style={[styles.text3, styles.textTypo8]}>1</Text>
      <Text style={[styles.text4, styles.textTypo7]}>2</Text>
      <Text style={[styles.text5, styles.textLayout]}>{topPlayers1.length > 0 ? topPlayers1[1].Player : "No player found"}</Text>
      <Text style={[styles.text6, styles.textPosition3]}>{topPlayers.length > 0 ? topPlayers1[1].Value : "No value found"}</Text>
      <Text style={[styles.text7, styles.textPosition2]}>3</Text>
      <Text style={[styles.text8, styles.textPosition1]}>{topPlayers1.length > 0 ? topPlayers1[2].Player : "No player found"}</Text>
      <Text style={[styles.text9, styles.textPosition]}>{topPlayers.length > 0 ? topPlayers1[2].Value : "No value found"}</Text>
      <Text style={[styles.text10, styles.textTypo5]}>{topPlayers1.length > 0 ? topPlayers1[0].Player : "No player found"}</Text>
      <Text style={[styles.text11, styles.textTypo4]}>{topPlayers.length > 0 ? topPlayers1[0].Value : "No value found"}</Text>
      <Image
        style={[styles.vectorIcon, styles.favorChildLayout, zindex=999]}
        contentFit="cover"
        source={require("../assets/vector-2706.png")}
      />
      <Image
        style={[styles.groupIcon, styles.favorChildLayout1]}
        contentFit="cover"
        source={require("../assets/group-1000003600.png")}
      />
      <Text style={[styles.text12, styles.textTypo9]}>통산 도움</Text>
      <Text style={[styles.text13, styles.textTypo8]}>1</Text>
      <Text style={[styles.text14, styles.textTypo3]}>2</Text>
      <Text style={[styles.text15, styles.textTypo3]}>{topPlayers2.length > 0 ? topPlayers2[1].Player : "No player found"}</Text>
      <Text style={[styles.text16, styles.textTypo3]}>{topPlayers2.length > 0 ? topPlayers2[1].Value : "No value found"}</Text>
      <Text style={[styles.text17, styles.textTypo2]}>3</Text>
      <Text style={[styles.text18, styles.textTypo2]}>{topPlayers2.length > 0 ? topPlayers2[2].Player : "No player found"}</Text>
      <Text style={[styles.text19, styles.textTypo2]}>{topPlayers2.length > 0 ? topPlayers2[2].Value : "No value found"}</Text>
      <Text style={[styles.text20, styles.textTypo5]}>{topPlayers2.length > 0 ? topPlayers2[0].Player : "No player found"}</Text>
      <Text style={[styles.text21, styles.textTypo4]}>{topPlayers2.length > 0 ? topPlayers2[0].Value : "No value found"}</Text>
      <Image
        style={[styles.favorChild1, styles.favorChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-2706.png")}
      />
      <Image
        style={[styles.icon1, styles.iconLayout]}
        contentFit="cover"
        source={topPlayers.length > 0 ? getPlayerImage(topPlayers2[0].Player) : null}
      />
      <Image
        style={[styles.favorChild2, styles.favorChild2Position]}
        contentFit="cover"
        source={require("../assets/group-1000003600.png")}
      />
      <Text style={[styles.text22, styles.textTypo9]}>최다 출전</Text>
      <Text style={[styles.text23, styles.textTypo8]}>1</Text>
      <Text style={[styles.text24, styles.textTypo1]}>2</Text>
      <Text style={[styles.text25, styles.textTypo1]}>{topPlayers.length > 0 ? topPlayers[1].Player : "No player found"}</Text>
      <Text style={[styles.text26, styles.textTypo1]}>{topPlayers.length > 0 ? topPlayers[1].Value : "No value found"}</Text>
      <Text style={[styles.text27, styles.textTypo]}>3</Text>
      <Text style={[styles.text28, styles.textTypo]}>{topPlayers.length > 0 ? topPlayers[2].Player : "No player found"}</Text>
      <Text style={[styles.text29, styles.textTypo]}>{topPlayers.length > 0 ? topPlayers[2].Value : "No value found"}</Text>
      <Text style={[styles.text30, styles.textTypo5]}>{topPlayers.length > 0 ? topPlayers[0].Player : "No player found"}</Text>
      <Text style={[styles.text31, styles.textTypo4]}>{topPlayers.length > 0 ? topPlayers[0].Value : "No value found"}</Text>
      <Image
        style={[styles.favorChild3, styles.favorChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-2706.png")}
      />
      <Image
        style={[styles.image564Icon, styles.favorChild2Position]}
        contentFit="cover"
        source={topPlayers.length > 0 ? getPlayerImage(topPlayers[0].Player) : null}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  favorChildLayout1: {
    height: height * 230,
    width: width * 354,
    left: width * 10,
  },
  lineargradientLayout: {
    height: height * 392,
    position: "absolute",
  },
  wrapperLayout: {
    height: height * 16,
    position: "absolute",
  },
  textClr: {
    color: Color.colorWhite,
    position: "absolute",
  },
  textTypo9: {
    width: width * 217,
    color: Color.colorWhitesmoke_100,
    lineHeight: height * 26,
    letterSpacing: width * -0.2,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  totLayout: {
    height: height * 54,
    position: "absolute",
  },
  iconLayout: {
    height: height * 140,
    width: width * 136,
    left: width * 226,
  },
  textTypo8: {
    lineHeight: height * 16,
    letterSpacing: width * -0.1,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    left: width * 24,
    position: "absolute",
  },
  textTypo7: {
    top: height * 507,
    lineHeight: height * 18,
    letterSpacing: width * -0.1,
    fontSize: FontSize.size_mini,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textLayout: {
    width: width * 127,
    left: width * 48,
    textAlign: "left",
  },
  textPosition3: {
    left: width * 317,
    textAlign: "right",
  },
  textPosition2: {
    left: width * 25,
    textAlign: "center",
  },
  textPosition1: {
    left: width * 49,
    width: width * 127,
    textAlign: "left",
  },
  textPosition: {
    left: width * 317,
    textAlign: "right",
  },
  textTypo5: {
    left: width * 22,
    width: width * 217,
    color: Color.colorWhitesmoke_100,
    lineHeight: height * 27,
    letterSpacing: width * -0.2,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo4: {
    fontFamily: FontFamily.notoSansBlack,
    fontWeight: "600",
    lineHeight: height * 42,
    fontSize: FontSize.size_21xl,
    left: width * 22,
    width: width * 217,
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
    letterSpacing:width *  -0.4,
    position: "absolute",
  },
  textTypo3: {
    top: height * 809,
    lineHeight: height * 18,
    letterSpacing: width * -0.1,
    fontSize: FontSize.size_mini,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo2: {
    top: height * 853,
    lineHeight: height * 18,
    letterSpacing: width * -0.1,
    fontSize: FontSize.size_mini,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  favorChild2Position: {
    top: height * 950,
    position: "absolute",
  },
  textTypo1: {
    top: height * 1103,
    lineHeight: height * 18,
    letterSpacing: width * -0.1,
    fontSize: FontSize.size_mini,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo: {
    top: height * 1148,
    lineHeight: height * 18,
    letterSpacing: width * -0.1,
    fontSize: FontSize.size_mini,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  favorChild: {
    top: height * 354,
    position: "absolute",
  },
  favorItem: {
    top: height * 34,
    height: height * 259,
    width: width * 375,
    left: 0,
    position: "absolute",
  },
  lineargradient: {
    left: width * 20,
    backgroundColor: "transparent",
    top: 0,
    width: width * 375,
  },
  favorInner: {
    width: width * 7,
    height: height * 13,
  },
  frameView: {
    top: height * 193,
    right: width * 152,
    left: width * 160,
  },
  text: {
    top: height * 77.05,
    left: width * 139.5,
    fontSize: FontSize.size_lg,
    lineHeight: height * 20,
    textAlign: "center",
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    width: width * 96,
    letterSpacing: width * -0.4,
    color: Color.colorWhite,
  },
  wrapper: {
    top: height * 80,
    right: width * 156,
    left: width * 156,
  },
  text1: {
    top: height * 215,
    left: width * 79,
    textAlign: "center",
  },
  text2: {
    top: height * 315,
    textAlign: "left",
    left: width * 24,
  },
  totChild: {
    width: width * 52,
    height: height * 52,
    top: 0,
    left: 0,
  },
  totIcon: {
    left: width * 0,
    width: width * 54,
    top: 0,
  },
  tot: {
    top: height * 146,
    left: width * 161,
    width: width * 52,
    height: height * 52,
  },
  tottenhamHotspurStadiumContainer: {
    top: height * 250,
    left: width * 55,
    fontSize: FontSize.size_xs,
    lineHeight: height * 13,
    fontFamily: FontFamily.notoSansRegular,
    width: width * 265,
    textAlign: "center",
  },
  heartIcon: {
    top: height * 73,
    left: width * 333,
    width: width * 28,
    height: height * 28,
    position: "absolute",
  },
  icon: {
    top: height * 354,
    position: "absolute",
  },
  text3: {
    top: height * 367,
  },
  text4: {
    textAlign: "center",
    left: width * 24,
  },
  text5: {
    top: height * 507,
    lineHeight: height * 18,
    letterSpacing: width * -0.1,
    fontSize: FontSize.size_mini,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text6: {
    textAlign: "right",
    top: height * 507,
    lineHeight: height * 18,
    letterSpacing: width * -0.1,
    fontSize: FontSize.size_mini,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text7: {
    top: height * 552,
    lineHeight: height * 18,
    letterSpacing: width * -0.1,
    fontSize: FontSize.size_mini,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text8: {
    top: height * 552,
    lineHeight: height * 18,
    letterSpacing: width * -0.1,
    fontSize: FontSize.size_mini,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text9: {
    top: height * 552,
    lineHeight: height * 18,
    letterSpacing: width * -0.1,
    fontSize: FontSize.size_mini,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text10: {
    top: height * 390,
  },
  text11: {
    top: height * 432,
  },
  groupIcon: {
    top: height * 655,
    position: "absolute",
  },
  text12: {
    top: height * 616,
    textAlign: "left",
    left: width * 24,
  },
  text13: {
    top: height * 669,
  },
  text14: {
    textAlign: "center",
    left: width * 24,
  },
   back: {
     position: "absolute",
     width : width * 50,
     height : height * 50,
     top : height * 78,
     left: width * 24,
 },
  text15: {
    width: width * 127,
    left: width * 48,
    textAlign: "left",
  },
  text16: {
    left: width * 325,
    textAlign: "right",
  },
  text17: {
    left: width * 25,
    textAlign: "center",
  },
  text18: {
    left: width * 49,
    width: width * 127,
    textAlign: "left",
  },
  text19: {
    left: width * 326,
    textAlign: "right",
  },
  text20: {
    top: height * 693,
  },
  text21: {
    top: height * 735,
  },
  favorChild1: {
    top: height * 839,
  },
  icon1: {
    top: height * 653,
    position: "absolute",
  },
  favorChild2: {
    height: height * 230,
    width: width * 354,
    left: width * 10,
  },
  text22: {
    top: height * 911,
    textAlign: "left",
    left: width * 24,
  },
  text23: {
    top: height * 963,
  },
  text24: {
    textAlign: "center",
    left: width * 24,
  },
  text25: {
    width: width * 127,
    left: width * 48,
    textAlign: "left",
  },
  text26: {
    textAlign: "right",
    left: width * 317,
  },
  text27: {
    textAlign: "center",
    left: width * 24,
  },
  text28: {
    width: width * 127,
    left: width * 48,
    textAlign: "left",
  },
  text29: {
    textAlign: "right",
    left: width * 317,
  },
  text30: {
    top: height * 988,
  },
  text31: {
    top: height * 1030,
  },
  favorChild3: {
    top: height * 1134,
  },
  vectorIcon: {
    top: height * 538,
  },
  image564Icon: {
    height: height * 140,
    width: width * 136,
    left: width * 226,
  },
  favorChildLayout: {
    width: width * 326,
    maxHeight: "100%",
    left: width * 22,
    position: "absolute",
  },
  favor: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: height * 1200,
    overflow: "hidden",
  },
});

export default FavorTeam;
