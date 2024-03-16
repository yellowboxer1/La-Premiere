import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import RankData from "../DB/rank";
import MatchInfo from "../DB/match";

const Main = React.memo(() => {
  const [matchData, setMatchData] = useState(null);
  const [clubData, setClubData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clubData = await RankData();
        setClubData(clubData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure effect runs only once

  function getLogoPath(clubName) {
    switch (clubName) {
      case "아스널":
        return require("../assets/ARS.png");
      case "리버풀":
        return require("../assets/LIV.png");
      case "애스턴 빌라":
        return require("../assets/AVL.png");
      case "맨시티":
        return require("../assets/MCI.png");
      case "토트넘":
        return require("../assets/TOT.png");   
        case "맨유":
          return require("../assets/MUN.png");
        case "웨스트햄":
          return require("../assets/WHU.png");                
      default:
        return null; // Return null if no matching logo found
    }
  }

  return (
    <ScrollView>
    <View style={styles.main}>
    <MatchInfo matchData={setMatchData} />
      <Image
        style={styles.image535Icon}
        contentFit="cover"
        source={require("../assets/image-535.png")}
      />
      <Image
        style={[styles.image534Icon, styles.iconLayout4]}
        contentFit="cover"
        source={require("../assets/image-534.png")}
      />
      <Image
        style={[styles.image533Icon, styles.iconLayout4]}
        contentFit="cover"
        source={require("../assets/image-533.png")}
      />
      <View style={[styles.mainInner, styles.mainInnerLayout]} />
      <View style={[styles.table, styles.tablePosition]}>
        <View style={[styles.tableChild, styles.tableChildLayout]} />
        <View style={[styles.tableItem, styles.tableChildLayout]} />
        <View style={[styles.tableInner, styles.tableChildLayout]} />
        <View style={[styles.rectangleView, styles.tableChildLayout]} />
        <View style={[styles.tableChild1, styles.tableChildLayout]} />
      </View>
      <View style={[styles.mainChild1, styles.mainChild1Position]} />
      <View style={styles.pom}>
        <View style={[styles.pomChild, styles.pomChildPosition]} />
        <View style={[styles.pomItem, styles.pomLayout]} />
        <View style={[styles.pomInner, styles.pomLayout]} />
        <View style={[styles.pomChild1, styles.pomChildPosition]} />
      </View>
      <Image
        style={[styles.image505Icon, styles.mainChild1Position]}
        contentFit="cover"
        source={require("../assets/image-505.png")}
      />
      <Text style={[styles.text3, styles.textTypo8]}>최근경기</Text>
      <Text style={[styles.rank, styles.wDLTypo]}>Rank</Text>
      <Text style={[styles.club, styles.wDLTypo]}>Club</Text>
      <Text style={[styles.wDL, styles.wDLTypo]}>W-D-L</Text>
      <Text style={[styles.point, styles.wDLTypo]}>Point</Text>
      <Image
        style={[styles.mainChild4, styles.mainChildLayout1]}
        contentFit="cover"
        source={require("../assets/vector-2683.png")}
      />
      <Image
        style={[styles.image513Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/image-511.png")}
      />
      <Image
        style={[styles.image512Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/image-510.png")}
      />
      <View style={[styles.parent, styles.groupParentPosition]}>
        <Text style={[styles.text6, styles.textPosition]}>패</Text>
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
      <View style={[styles.group, styles.groupParentPosition]}>
        <Text style={[styles.text6, styles.textPosition]}>패</Text>
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
      <View style={[styles.container, styles.groupParentPosition]}>
        <Text style={[styles.text8, styles.textPosition]}>승</Text>
        <View style={[styles.groupChild1, styles.groupLayout]} />
      </View>
      <View style={[styles.groupView, styles.groupParentPosition]}>
        <Text style={[styles.text6, styles.textPosition]}>패</Text>
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
      <View style={[styles.mainInner1, styles.groupParentPosition]}>
        <View style={[styles.parent1, styles.plPosition]}>
          <Text style={[styles.text6, styles.textPosition]}>패</Text>
          <View style={[styles.groupItem, styles.groupLayout]} />
        </View>
      </View>
      <View style={[styles.parent2, styles.groupParentPosition]}>
        <Text style={[styles.text8, styles.textPosition]}>승</Text>
        <View style={[styles.groupChild1, styles.groupLayout]} />
      </View>
      <View style={[styles.parent3, styles.groupParentPosition]}>
        <Text style={[styles.text6, styles.textPosition]}>패</Text>
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
      <View style={[styles.parent4, styles.groupParentPosition]}>
        <Text style={[styles.text8, styles.textPosition]}>승</Text>
        <View style={[styles.groupChild1, styles.groupLayout]} />
      </View>
      <View style={[styles.parent5, styles.groupParentPosition]}>
        <Text style={[styles.text8, styles.textPosition]}>승</Text>
        <View style={[styles.groupChild1, styles.groupLayout]} />
      </View>
      <View style={[styles.mainInner2, styles.groupParentPosition]}>
        <View style={[styles.parent1, styles.plPosition]}>
          <Text style={[styles.text8, styles.textPosition]}>승</Text>
          <View style={[styles.groupChild1, styles.groupLayout]} />
        </View>
      </View>
      <Image
        style={[styles.ellipseIcon, styles.mainChild7Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-901.png")}
      />
      <Image
        style={[styles.mainChild7, styles.mainChild7Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-901.png")}
      />
      <Text style={[styles.text16, styles.textTypo7]}>순위</Text>
  {/* 1위 데이터 표시 */}
  {clubData && (
    <>
      <Text style={[styles.text17, styles.textLayout1, { opacity: 0.9 }]}>{clubData[0].rank}</Text>
      <Text style={[styles.text20, styles.textLayout, { opacity: 0.9 }]}>{clubData[0].club}</Text>
      <Text style={[styles.w6d2l, styles.textTypo4, { opacity: 0.9 }]}>{clubData[0].win}W {clubData[0].draws}D {clubData[0].lose}L</Text>
      <Text style={[styles.text21, styles.textTypo4, { opacity: 0.9 }]}>{clubData[0].points}</Text>
      <Image
        style={[styles.image516Icon, styles.iconLayout2,  { width: 18, height: 21, opacity: 0.9 }]}
        source={getLogoPath(clubData[0].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Image
        style={[styles.polygonIcon1, styles.mainChildLayout]}
        source={
          clubData && clubData[0]?.status === 'up'
            ? require("../assets/polygon-4.png")
            : clubData && clubData[0]?.status === 'down'
            ? require("../assets/polygon-5.png")
            : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
        }
      />
    </>
  )}
    {/* 2위 데이터 표시 */}      
    {clubData && (
    <>
      <Text style={[styles.text18, styles.textTypo6, { opacity: 0.9 }]}>{clubData[1].rank}</Text>
      <Text style={[styles.text22, styles.textLayout, { opacity: 0.9 }]}>{clubData[1].club}</Text>
      <Text style={[styles.w5d3l, styles.textTypo6, { opacity: 0.9 }]}>{clubData[1].win}W {clubData[1].draws}D {clubData[1].lose}L</Text>
      <Text style={[styles.text23, styles.textTypo6, { opacity: 0.9 }]}>{clubData[1].points}</Text>
      <Image
        style={[styles.image517Icon, styles.iconLayout2,  { width: 18, height: 21, opacity: 0.9 }]}
        source={getLogoPath(clubData[1].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Image
        style={[styles.polygonIcon2, styles.mainChildLayout]}
        source={
          clubData && clubData[1]?.status === 'up'
            ? require("../assets/polygon-4.png")
            : clubData && clubData[1]?.status === 'down'
            ? require("../assets/polygon-5.png")
            : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
        }
      />
    </>
  )}
    {/* 3위 데이터 표시 */}            
    {clubData && (
    <>
      <Text style={[styles.text19, styles.textTypo5, { opacity: 0.9 }]}>{clubData[2].rank}</Text>
      <Text style={[styles.text24, styles.textLayout, { opacity: 0.9 }]}>{clubData[2].club}</Text>
      <Text style={[styles.w4d4l, styles.textTypo5, { opacity: 0.9 }]}>{clubData[2].win}W {clubData[2].draws}D {clubData[2].lose}L</Text>
      <Text style={[styles.text25, styles.textTypo5, { opacity: 0.9 }]}>{clubData[2].points}</Text>
      <Image
        style={[styles.image514Icon, styles.iconLayout2,  { width: 18, height: 21, opacity: 0.9 }]}
        source={getLogoPath(clubData[2].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Image
        style={[styles.polygonIcon3, styles.mainChildLayout]}
        source={
          clubData && clubData[2]?.status === 'up'
            ? require("../assets/polygon-4.png")
            : clubData && clubData[2]?.status === 'down'
            ? require("../assets/polygon-5.png")
            : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
        }
      />
    </>
  )}
    {/* 4위 데이터 표시 */}            
    {clubData && (
    <>
    <Text style={[styles.text26, styles.textTypo3, { opacity: 0.9 }]}>{clubData[3].rank}</Text>
    <Text style={[styles.text27, styles.textLayout, { opacity: 0.9 }]}>{clubData[3].club}</Text>
    <Text style={[styles.w4d6l, styles.textTypo3, { opacity: 0.9 }]}>{clubData[3].win}W {clubData[3].draws}D {clubData[3].lose}L</Text>
    <Text style={[styles.text28, styles.textTypo3, { opacity: 0.9 }]}>{clubData[3].points}</Text>
    <Image
        style={[styles.image520Icon, styles.iconLayout2,  { width: 18, height: 21, opacity: 0.9 }]}
        source={getLogoPath(clubData[3].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
    <Image
        style={[styles.polygonIcon4, styles.mainChildLayout]}
        source={
          clubData && clubData[3]?.status === 'up'
            ? require("../assets/polygon-4.png")
            : clubData && clubData[3]?.status === 'down'
            ? require("../assets/polygon-5.png")
            : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
        }
      />
    </>
  )}
    {/* 5위 데이터 표시 */}      
    {clubData && (
    <>
    <Text style={[styles.text29, styles.textTypo2, { opacity: 0.9 }]}>{clubData[4].rank}</Text>
    <Text style={[styles.text30, styles.textLayout, { opacity: 0.9 }]}>{clubData[4].club}</Text>
    <Text style={[styles.w5d6l, styles.textTypo2, { opacity: 0.9 }]}>{clubData[4].win}W {clubData[4].draws}D {clubData[4].lose}L</Text>
    <Text style={[styles.text31, styles.textTypo2, { opacity: 0.9 }]}>{clubData[4].points}</Text>
    <Image
        style={[styles.image521Icon, styles.iconLayout2, { width: 18, height: 21,  opacity: 0.9 }]}
        source={getLogoPath(clubData[4].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Image
        style={[styles.polygonIcon5, styles.mainChildLayout]}
        source={
          clubData && clubData[4]?.status === 'up'
            ? require("../assets/polygon-4.png")
            : clubData && clubData[4]?.status === 'down'
            ? require("../assets/polygon-5.png")
            : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
          />
        </>
      )}
      <Text style={[styles.jan2024, styles.fwTypo]}>JAN 2024</Text>
      <Text style={[styles.jan2024, styles.fwTypo]}>JAN 2024</Text>
      <Text style={[styles.dec23, styles.fw1Typo]}>DEC 23</Text>
      <Text style={[styles.text32, styles.textTypo7]}>시즌스텟</Text>
      <Image
        style={[styles.mainChild12, styles.mainChildLayout1]}
        contentFit="cover"
        source={require("../assets/vector-2683.png")}
      />
      <Image
        style={[styles.image523Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-523.png")}
      />
      <Image
        style={[styles.image526Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-526.png")}
      />
      <Image
        style={[styles.image525Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-525.png")}
      />
      <Image
        style={[styles.image524Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-524.png")}
      />
      <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild9, styles.groupChildLayout3]} />
        <View style={[styles.groupChild10, styles.groupChildLayout3]} />
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild9, styles.groupChildLayout3]} />
        <View style={[styles.groupChild10, styles.groupChildLayout3]} />
      </View>
      <Text style={[styles.goals, styles.goalsTypo]}>Goals</Text>
      <Text style={[styles.text33, styles.textTypo1]}>18</Text>
      <Text style={[styles.text34, styles.textTypo1]}>10</Text>
      <Text style={[styles.assists, styles.goalsTypo]}>Assists</Text>
      <View style={[styles.rectangleParent3, styles.rectangleParentPosition]}>
        <View style={[styles.groupChild9, styles.groupChildLayout3]} />
        <View style={[styles.groupChild10, styles.groupChildLayout3]} />
      </View>
      <View style={[styles.rectangleParent4, styles.rectangleParentPosition]}>
        <View style={[styles.groupChild9, styles.groupChildLayout3]} />
        <View style={[styles.groupChild10, styles.groupChildLayout3]} />
      </View>
      <Text style={[styles.goals1, styles.goals1Typo]}>Goals</Text>
      <Text style={[styles.text35, styles.textTypo]}>68</Text>
      <Text style={[styles.text36, styles.textTypo]}>11</Text>
      <Text style={[styles.cleanSheets, styles.goals1Typo]}>Clean Sheets</Text>
      <Text style={[styles.pom1, styles.textPosition1]}>PoM</Text>
      <Image
        style={[styles.mainChild13, styles.mainChildLayout1]}
        contentFit="cover"
        source={require("../assets/vector-2683.png")}
      />
      <Text style={[styles.text37, styles.fwTypo]}>디오구 조타</Text>
      <Text style={[styles.text38, styles.fw1Typo]}>도미닉 솔랑케</Text>
      <Text style={[styles.fw, styles.fwTypo]}>FW</Text>
      <Text style={[styles.fw1, styles.fw1Typo]}>FW</Text>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-3-1.png")}
      />
      <Image
        style={[styles.image527Icon, styles.text4Layout]}
        contentFit="cover"
        source={require("../assets/image-527.png")}
      />
      <Image
        style={[styles.image528Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/image-528.png")}
      />
      <Text style={[styles.df, styles.dfTypo]}>DF</Text>
      <Text style={[styles.nov23, styles.dfTypo]}>NOV 23</Text>
      <Text style={[styles.text39, styles.dfTypo]}>해리 매과이어</Text>
      <Image
        style={[styles.image530Icon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/image-530.png")}
      />
      <Text style={[styles.df1, styles.df1Typo]}>DF</Text>
      <Text style={[styles.nov231, styles.df1Typo]}>NOV 23</Text>
      <Text style={[styles.text40, styles.df1Typo]}>해리 매과이어</Text>
      <Image
        style={[styles.image531Icon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/image-530.png")}
      />
      <View style={[styles.mainChild14, styles.mainChildPosition]} />
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupIcon, styles.instanceLayout]}
          contentFit="cover"
          source={require("../assets/group-10000035371.png")}
        />
        <Text style={[styles.pl, styles.plPosition]}>PL</Text>
      </View>
      <View style={[styles.vectorParent, styles.pomLayout]}>
        <Image
          style={[styles.groupChild17, styles.groupChildLayout2]}
          contentFit="cover"
          source={require("../assets/vector-2686.png")}
        />
        <Image
          style={[styles.groupChild18, styles.groupChildLayout2]}
          contentFit="cover"
          source={require("../assets/vector-2686.png")}
        />
        <Image
          style={styles.groupChild19}
          contentFit="cover"
          source={require("../assets/vector-2688.png")}
        />
        <Text style={[styles.news, styles.newsTypo]}>News</Text>
        <View style={styles.groupChild20} />
        <View style={styles.groupChild21} />
      </View>
      <View style={[styles.groupContainer, styles.groupPosition]}>
        <View style={[styles.statsWrapper, styles.statsPosition]}>
          <Text style={[styles.stats, styles.statsPosition]}>Stats</Text>
        </View>
        <View style={styles.rectangleParent5}>
          <View style={styles.groupChild22} />
          <View style={[styles.groupChild23, styles.groupChildLayout1]} />
          <View style={[styles.groupChild24, styles.groupChildLayout1]} />
        </View>
      </View>
      <View style={[styles.groupParent1, styles.groupPosition]}>
        <View style={[styles.moreWrapper, styles.morePosition]}>
          <Text style={[styles.more, styles.morePosition]}>More</Text>
        </View>
        <Image
          style={[styles.groupChild25, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-903.png")}
        />
        <Image
          style={[styles.groupChild26, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-903.png")}
        />
        <Image
          style={[styles.groupChild27, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-903.png")}
        />
      </View>
      <View style={[styles.mainChild15, styles.mainChildPosition]} />
    </View>
    </ScrollView>
    );
  });

const styles = StyleSheet.create({
  matchItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  iconLayout4: {
    height: 41,
    left: 2,
    width: 371,
    position: "absolute",
  },
  mainInnerLayout: {
    height: 38,
    position: "absolute",
  },
  tablePosition: {
    left: 2,
    width: 371,
  },
  tableChildLayout: {
    height: 53,
    left: 0,
    backgroundColor: Color.colorDarkslategray,
    width: 371,
    position: "absolute",
  },
  mainChild1Position: {
    top: 155,
    position: "absolute",
  },
  pomChildPosition: {
    left: 0,
    backgroundColor: Color.colorDarkslategray,
    width: 371,
  },
  pomLayout: {
    height: 44,
    position: "absolute",
  },
  mainChildLayout2: {
    width: 34,
    top: 218,
    backgroundColor: Color.colorDarkslategray,
    height: 40,
    position: "absolute",
  },
  textPosition1: {
    height: 16,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  textTypo8: {
    textAlign: "center",
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    left: "50%",
  },
  wDLTypo: {
    top: 353,
    textAlign: "center",
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    color: Color.colorLightsteelblue_100,
    lineHeight: 12,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  mainChildLayout1: {
    height: 12,
    width: 6,
    position: "absolute",
  },
  instanceLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text4Layout: {
    width: 30,
    position: "absolute",
  },
  iconLayout3: {
    height: 20,
    position: "absolute",
  },
  shuTypo: {
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    top: 121,
    width: 30,
    textAlign: "center",
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    height: 13,
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  iconPosition1: {
    top: 225,
    height: 20,
    position: "absolute",
  },
  groupParentPosition: {
    top: 261,
    width: 18,
    height: 18,
    left: "50%",
    position: "absolute",
  },
  textPosition: {
    marginLeft: -6,
    top: 3,
    textAlign: "center",
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    lineHeight: 12,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    borderWidth: 1,
    borderStyle: "solid",
    width: 18,
    height: 18,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  plPosition: {
    marginLeft: -9,
    left: "50%",
    position: "absolute",
  },
  mainChild7Layout: {
    height: 6,
    top: 260,
    width: 6,
    position: "absolute",
  },
  textTypo7: {
    marginLeft: -164.5,
    height: 17,
    width: 74,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    lineHeight: 17,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  textLayout1: {
    marginLeft: -160.5,
    width: 11,
    height: 16,
  },
  textTypo6: {
    top: 453,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    lineHeight: 17,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  textTypo5: {
    top: 508,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    lineHeight: 17,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  textLayout: {
    width: 100,
    marginLeft: -81.5,
    height: 16,
  },
  textTypo4: {
    top: 400,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    lineHeight: 17,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  mainChildLayout: {
    height: 9,
    width: 10,
    left: 47,
    position: "absolute",
  },
  fwTypo: {
    width: 98,
    height: 20,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    lineHeight: 17,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  fw1Typo: {
    top: 1263,
    width: 98,
    height: 20,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    lineHeight: 17,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  iconLayout2: {
    height: 30,
    position: "absolute",
  },
  textTypo3: {
    top: 560,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    lineHeight: 17,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  textTypo2: {
    top: 615,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    lineHeight: 17,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  iconLayout1: {
    height: 202,
    width: 174,
    top: 704,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconLayout: {
    width: 173,
    top: 919,
    height: 202,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 75,
    top: 831,
    width: 174,
    position: "absolute",
  },
  groupChildLayout3: {
    height: 55,
    width: 174,
    left: 0,
    backgroundColor: Color.colorDarkslategray,
    position: "absolute",
  },
  goalsTypo: {
    top: 843,
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 16,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.notoSansExtraBold,
    lineHeight: 36,
    fontSize: FontSize.size_17xl,
    top: 864,
    fontWeight: "800",
    textAlign: "left",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 1046,
    height: 75,
    width: 174,
    position: "absolute",
  },
  goals1Typo: {
    top: 1054,
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 16,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    top: 1075,
    fontFamily: FontFamily.notoSansExtraBold,
    lineHeight: 36,
    fontSize: FontSize.size_17xl,
    fontWeight: "800",
    textAlign: "left",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  dfTypo: {
    top: 1309,
    width: 98,
    height: 20,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  df1Typo: {
    top: 1353,
    width: 98,
    height: 20,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  mainChildPosition: {
    top: 1360,
    position: "absolute",
  },
  groupChildLayout2: {
    width: 14,
    left: 12,
    maxHeight: "100%",
    position: "absolute",
  },
  newsTypo: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.notoSansRegular,
    lineHeight: 14,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  groupPosition: {
    left: "50%",
    position: "absolute",
  },
  statsPosition: {
    marginLeft: -18,
    left: "50%",
    position: "absolute",
  },
  groupChildLayout1: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorGray_300,
    width: 6,
    position: "absolute",
  },
  morePosition: {
    marginLeft: -19,
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    width: 7,
    height: 7,
    left: 15,
    position: "absolute",
  },
  image535Icon: {
    top: 1135,
    height: 40,
    width: 371,
    left: 3,
    position: "absolute",
  },
  image534Icon: {
    top: 657,
  },
  image533Icon: {
    top: 300,
  },
  mainInner: {
    top: 341,
    backgroundColor: Color.colorGray_100,
    left: 2,
    width: 371,
  },
  tableChild: {
    top: 0,
  },
  tableItem: {
    top: 54,
  },
  tableInner: {
    top: 108,
  },
  rectangleView: {
    top: 162,
  },
  tableChild1: {
    top: 216,
  },
  table: {
    top: 380,
    height: 269,
    position: "absolute",
  },
  mainChild1: {
    borderRadius: Border.br_4xs,
    height: 136,
    backgroundColor: Color.colorDarkslategray,
    left: 2,
    width: 371,
  },
  pomChild: {
    height: 71,
    top: 0,
    position: "absolute",
  },
  pomItem: {
    top: 73,
    left: 0,
    backgroundColor: Color.colorDarkslategray,
    width: 371,
  },
  pomInner: {
    top: 119,
    left: 0,
    backgroundColor: Color.colorDarkslategray,
    width: 371,
  },
  pomChild1: {
    top: 165,
    height: 38,
    position: "absolute",
  },
  pom: {
    top: 1177,
    height: 203,
    width: 371,
    left: 3,
    position: "absolute",
  },
  image505Icon: {
    left: 25,
    width: 323,
    height: 99,
  },
  mainChild2: {
    left: 202,
  },
  mainChild3: {
    left: 106,
  },
  text3: {
    marginLeft: -44.5,
    top: 264,
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorLightsteelblue_100,
    position: "absolute",
  },
  rank: {
    marginLeft: -171.5,
  },
  club: {
    marginLeft: -92.5,
  },
  wDL: {
    marginLeft: 42.5,
  },
  point: {
    marginLeft: 133.5,
  },
  groupChild: {
    backgroundColor: Color.colorCrimson,
    borderRadius: Border.br_8xs,
    height: 32,
    width: 148,
    marginLeft: -74.2,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 406,
    display: "none",
    height: 32,
    width: 148,
    marginLeft: -74.2,
    left: "50%",
    position: "absolute",
  },
  mainChild4: {
    top: 314,
    left: 65,
  },
  image513Icon: {
    left: 214,
    width: 17,
  },
  image514Icon: {
    top: 505,
    left: 74,
    width: 24,
  },
  image512Icon: {
    left: 111,
    width: 20,
  },
  text6: {
    color: Color.colorLightsteelblue_200,
  },
  groupItem: {
    borderColor: Color.colorLightsteelblue_200,
  },
  parent: {
    marginLeft: -150.5,
    width: 18,
  },
  group: {
    marginLeft: -131.5,
    width: 18,
  },
  text8: {
    color: Color.colorLightsteelblue_100,
  },
  groupChild1: {
    borderColor: Color.colorLightsteelblue_100,
  },
  container: {
    marginLeft: -112.5,
    width: 18,
  },
  groupView: {
    marginLeft: -93.5,
    width: 18,
  },
  parent1: {
    width: 18,
    height: 18,
    top: 0,
  },
  mainInner1: {
    marginLeft: -74.5,
    width: 18,
  },
  parent2: {
    marginLeft: 26.5,
    width: 18,
  },
  parent3: {
    marginLeft: 45.5,
    width: 18,
  },
  parent4: {
    marginLeft: 64.5,
    width: 18,
  },
  parent5: {
    marginLeft: 83.5,
    width: 18,
  },
  mainInner2: {
    marginLeft: 102.5,
    width: 18,
  },
  ellipseIcon: {
    left: 212,
  },
  mainChild7: {
    left: 127,
  },
  text16: {
    top: 311,
  },
  text17: {
    top: 400,
    width: 11,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    lineHeight: 17,
    marginLeft: -160.5,
    left: "50%",
    position: "absolute",
  },
  text18: {
    width: 11,
    marginLeft: -160.5,
    height: 16,
  },
  text19: {
    width: 11,
    marginLeft: -160.5,
    height: 16,
  },
  text20: {
    top: 400,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    lineHeight: 17,
    fontSize: FontSize.size_base,
    left: "51.5%",
    position: "absolute",
  },
  w6d2l: {
    marginLeft: 21.5,
  },
  text21: {
    marginLeft: 139.5,
  },
  text22: {
    top: 453,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    lineHeight: 17,
    fontSize: FontSize.size_base,
    left: "51.5%",
    position: "absolute",
  },
  w5d3l: {
    marginLeft: 21.5,
  },
  text23: {
    marginLeft: 139.5,
  },
  text24: {
    top: 508,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    lineHeight: 17,
    fontSize: FontSize.size_base,
    left: "51.5%",
    position: "absolute",   
  },
  w4d4l: {
    marginLeft: 21.5,
  },
  text25: {
    marginLeft: 139.5,
  },
  polygonIcon1: {
    top: 402,
  },
  polygonIcon2: {
    top: 456,
  },
  polygonIcon3: {
    top: 512,
  },
  jan2024: {
    top: 1202,
    width: 98,
    marginLeft: -163.5,
  },
  dec23: {
    marginLeft: -162.5,
  },
  image516Icon: {
    top: 397,
    left: 74,
    width: 24,
  },
  image517Icon: {
    top: 451,
    left: 74,
    width: 24,
  },
  text26: {
    width: 11,
    marginLeft: -160.5,
    height: 16,
  },
  text27: {
    top: 560,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    lineHeight: 17,
    fontSize: FontSize.size_base,
    left: "51.5%",
    position: "absolute",
  },
  w4d6l: {
    marginLeft: 21.5,
  },
  text28: {
    marginLeft: 139.5,
  },
  polygonIcon4: {
    top: 562,
  },
  text29: {
    width: 11,
    marginLeft: -160.5,
    height: 16,
  },
  text30: {
    top: 615,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    lineHeight: 17,
    fontSize: FontSize.size_base,
    left: "51.5%",
    position: "absolute",
  },
  w5d6l: {
    marginLeft: 21.5,
  },
  text31: {
    marginLeft: 139.5,
  },
  polygonIcon5: {
    top: 618,
  },
  image520Icon: {
    top: 558,
    left: 74,
    width: 24,
  },
  image521Icon: {
    top: 611,
    left: 74,
    width: 24,
  },
  text32: {
    top: 668,
  },
  mainChild12: {
    top: 671,
    left: 93,
  },
  image523Icon: {
    left: 191,
  },
  image526Icon: {
    left: 9,
  },
  image525Icon: {
    left: 9,
  },
  image524Icon: {
    left: 192,
  },
  groupChild9: {
    top: 20,
    borderRadius: Border.br_3xs,
  },
  groupChild10: {
    top: 0,
  },
  rectangleParent1: {
    left: 9,
  },
  rectangleParent2: {
    left: 191,
  },
  goals: {
    marginLeft: -116.5,
  },
  text33: {
    marginLeft: -116.5,
  },
  text34: {
    marginLeft: 69.5,
  },
  assists: {
    marginLeft: 64.5,
  },
  rectangleParent3: {
    left: 9,
  },
  rectangleParent4: {
    left: 191,
  },
  goals1: {
    marginLeft: -116.5,
  },
  text35: {
    marginLeft: -116.5,
  },
  text36: {
    marginLeft: 68.5,
  },
  cleanSheets: {
    marginLeft: 41.5,
  },
  pom1: {
    top: 1146,
    width: 161,
    marginLeft: -163.5,
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    lineHeight: 16,
  },
  mainChild13: {
    top: 1148,
    left: 66,
  },
  text37: {
    marginLeft: -46.5,
    top: 1206,
  },
  text38: {
    marginLeft: -64.5,
  },
  fw: {
    marginLeft: 147.5,
    top: 1202,
    width: 98,
  },
  fw1: {
    marginLeft: 148.5,
  },
  icon: {
    top: 1175,
    left: 241,
    width: 106,
    height: 73,
    position: "absolute",
  },
  image527Icon: {
    top: 1196,
    left: 104,
    height: 30,
  },
  image528Icon: {
    top: 1258,
    left: 92,
    width: 18,
  },
  df: {
    marginLeft: 148.5,
  },
  nov23: {
    marginLeft: -162.5,
  },
  text39: {
    marginLeft: -64.5,
  },
  image530Icon: {
    top: 1306,
    left: 91,
    width: 20,
  },
  df1: {
    marginLeft: 147.5,
  },
  nov231: {
    marginLeft: -163.5,
  },
  text40: {
    marginLeft: -65.5,
  },
  image531Icon: {
    top: 1350,
    left: 90,
    width: 20,
  },
  mainChild14: {
    left: -3,
    width: 390,
    height: 63,
    backgroundColor: Color.colorGray_200,
  },
  groupIcon: {
    height: "59.53%",
    bottom: "40.47%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  pl: {
    top: 29,
    lineHeight: 14,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  groupParent: {
    height: "3.02%",
    width: "5.33%",
    top: "96.42%",
    right: "83.47%",
    bottom: "0.56%",
    left: "11.2%",
    position: "absolute",
  },
  groupChild17: {
    top: 12,
  },
  groupChild18: {
    top: 16,
  },
  groupChild19: {
    left: 12,
    top: 20,
    width: 10,
    maxHeight: "100%",
    position: "absolute",
  },
  news: {
    marginLeft: -19.5,
    top: 30,
    left: "50%",
    position: "absolute",
  },
  groupChild20: {
    borderWidth: 1.5,
    width: 22,
    borderColor: Color.colorGray_300,
    left: 8,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    height: 26,
    top: 0,
    position: "absolute",
  },
  groupChild21: {
    left: 11,
    borderRadius: Border.br_12xs_5,
    width: 16,
    height: 7,
    backgroundColor: Color.colorGray_300,
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    borderStyle: "solid",
    top: 3,
    position: "absolute",
  },
  vectorParent: {
    top: 1371,
    left: 119,
    width: 39,
  },
  stats: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.notoSansRegular,
    lineHeight: 14,
    textAlign: "left",
    fontSize: FontSize.size_base,
    top: 0,
  },
  statsWrapper: {
    width: 36,
    top: 29,
    height: 14,
  },
  groupChild22: {
    height: 16,
    borderRadius: Border.br_11xs,
    top: 10,
    backgroundColor: Color.colorGray_300,
    width: 6,
    left: 0,
    position: "absolute",
  },
  groupChild23: {
    left: 13,
    height: 26,
    top: 0,
  },
  groupChild24: {
    top: 15,
    left: 20,
    height: 11,
  },
  rectangleParent5: {
    left: 8,
    width: 20,
    height: 26,
    top: 0,
    position: "absolute",
  },
  groupContainer: {
    marginLeft: 27.5,
    top: 1372,
    width: 36,
    height: 43,
  },
  more: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.notoSansRegular,
    lineHeight: 14,
    textAlign: "left",
    fontSize: FontSize.size_base,
    top: 0,
  },
  moreWrapper: {
    top: 28,
    width: 38,
    height: 14,
  },
  groupChild25: {
    top: 0,
  },
  groupChild26: {
    top: 10,
    width: 7,
  },
  groupChild27: {
    top: 20,
  },
  groupParent1: {
    marginLeft: 120.5,
    top: 1373,
    height: 42,
    width: 38,
  },
  mainChild15: {
    backgroundColor: Color.colorKhaki,
    width: 85,
    height: 5,
    left: 3,
    top: 1360,
  },
  main: {
    flex: 1,
    height: 1423,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_200,
  },
});

export default Main;
