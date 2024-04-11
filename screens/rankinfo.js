import React, { useState, useEffect} from "react";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import RankData from "../DB/rank";
import { width, height, Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const RankInfo = () => {

    const [clubData, setClubData] = useState(null);
    const navigation = useNavigation();

    const main = () => {
        navigation.navigate('MainScreen');
    };

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
      }, []);
    

    const clubLogos = {
        "아스널": require("../assets/ARS.png"),
        "리버풀": require("../assets/LIV.png"),
        "애스턴 빌라": require("../assets/AVL.png"),
        "맨시티": require("../assets/MCI.png"),
        "토트넘": require("../assets/TOT.png"),
        "맨유": require("../assets/MUN.png"),
        "웨스트햄": require("../assets/WHU.png"),
        "브라이턴": require("../assets/BHA.png"),
        "울버햄튼": require("../assets/WOL.png"),
        "뉴캐슬": require("../assets/NEW.png"),
        "첼시": require("../assets/CHE.png"),
        "본머스": require("../assets/BOU.png"),
        "풀럼": require("../assets/FUL.png"),    
        "팰리스": require("../assets/CRY.png"),
        "브랜트퍼드": require("../assets/BRE.png"),
        "에버턴": require("../assets/EVE.png"),
        "노팅엄": require("../assets/NFO.png"),
        "루턴": require("../assets/LUT.png"),
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
    
  return (
    <ScrollView>
    <View style={styles.rank}>
    {clubData && (
  <>
    <View style={[styles.th, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[19].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[19].win}승 {clubData[19].draws}무 {clubData[19].lose}패</Text>
      <Text style={styles.text1}>{clubData[19].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[19]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[19]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[19].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>20</Text>
      <Image
        style={styles.thItem}
        contentFit="cover"
        source={require("../assets/rectangle-red.png")}
      />
    </View>
  </>
)}
      {clubData && (
  <>
    <View style={[styles.th1, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[18].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[18].win}승 {clubData[18].draws}무 {clubData[18].lose}패</Text>
      <Text style={styles.text1}>{clubData[18].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[18]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[18]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[18].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>19</Text>
      <Image
        style={styles.thItem}
        contentFit="cover"
        source={require("../assets/rectangle-red.png")}
      />
    </View>
  </>
)}
      {clubData && (
  <>
    <View style={[styles.th2, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[17].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[17].win}승 {clubData[17].draws}무 {clubData[17].lose}패</Text>
      <Text style={styles.text1}>{clubData[17].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[17]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[17]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[17].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>18</Text>
      <Image
        style={styles.thItem}
        contentFit="cover"
        source={require("../assets/rectangle-red.png")}
      />
    </View>
  </>
)}
      {clubData && (
  <>
    <View style={[styles.th3, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[16].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[16].win}승 {clubData[16].draws}무 {clubData[16].lose}패</Text>
      <Text style={styles.text1}>{clubData[16].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[16]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[16]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[16].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>17</Text>
    </View>
  </>
)}
      {clubData && (
  <>
    <View style={[styles.th4, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[15].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[15].win}승 {clubData[15].draws}무 {clubData[15].lose}패</Text>
      <Text style={styles.text1}>{clubData[15].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[15]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[15]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[15].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>16</Text>
    </View>
  </>
)}
      {clubData && (
  <>
    <View style={[styles.th5, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[14].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[14].win}승 {clubData[14].draws}무 {clubData[14].lose}패</Text>
      <Text style={styles.text1}>{clubData[14].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[14]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[14]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[14].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>15</Text>
    </View>
  </>
)}
      {clubData && (
  <>
    <View style={[styles.th6, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[13].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[13].win}승 {clubData[13].draws}무 {clubData[13].lose}패</Text>
      <Text style={styles.text1}>{clubData[13].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[13]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[13]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[13].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>14</Text>
    </View>
  </>
)}
      {clubData && (
  <>
    <View style={[styles.th7, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[12].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[12].win}승 {clubData[12].draws}무 {clubData[12].lose}패</Text>
      <Text style={styles.text1}>{clubData[12].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[12]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[12]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[12].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>13</Text>
    </View>
  </>
)}
      {clubData && (
  <>
    <View style={[styles.th8, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[11].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[11].win}승 {clubData[11].draws}무 {clubData[11].lose}패</Text>
      <Text style={styles.text1}>{clubData[11].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[11]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[11]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[11].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>12</Text>
    </View>
  </>
)}
      {clubData && (
  <>
    <View style={[styles.th9, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[10].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[10].win}승 {clubData[10].draws}무 {clubData[10].lose}패</Text>
      <Text style={styles.text1}>{clubData[10].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[10]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[10]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[10].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>11</Text>
    </View>
  </>
)}
      {clubData && (
  <>
    <View style={[styles.th10, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[9].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[9].win}승 {clubData[9].draws}무 {clubData[9].lose}패</Text>
      <Text style={styles.text1}>{clubData[9].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[9]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[9]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[9].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>10</Text>
    </View>
  </>
)}
      {clubData && (
  <>
    <View style={[styles.th11, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[8].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[8].win}승 {clubData[8].draws}무 {clubData[8].lose}패</Text>
      <Text style={styles.text1}>{clubData[8].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[8]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[8]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[8].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>9</Text>
    </View>
  </>
)}
      {clubData && (
  <>
    <View style={[styles.th12, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[7].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[7].win}승 {clubData[7].draws}무 {clubData[7].lose}패</Text>
      <Text style={styles.text1}>{clubData[7].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[7]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[7]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[7].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>8</Text>
    </View>
  </>
)}
      {clubData && (
  <>
    <View style={[styles.th13, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[6].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[6].win}승 {clubData[6].draws}무 {clubData[6].lose}패</Text>
      <Text style={styles.text1}>{clubData[6].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[6]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[6]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[6].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>7</Text>
    </View>
  </>
)}
      {clubData && (
  <>
    <View style={[styles.th14, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[5].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[5].win}승 {clubData[5].draws}무 {clubData[5].lose}패</Text>
      <Text style={styles.text1}>{clubData[5].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[5]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[5]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[5].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>6</Text>
      <Image
        style={styles.thItem}
        contentFit="cover"
        source={require("../assets/rectangle-yellow.png")}
      />
    </View>
  </>
)}
      {clubData && (
  <>
    <View style={[styles.th15, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[4].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[4].win}승 {clubData[4].draws}무 {clubData[4].lose}패</Text>
      <Text style={styles.text1}>{clubData[4].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[5]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[5]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[4].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>5</Text>
      <Image
        style={styles.thItem}
        contentFit="cover"
        source={require("../assets/rectangle-yellow.png")}
      />
    </View>
  </>
)}
      {clubData && (
  <>
    <View style={[styles.th16, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[3].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[3].win}승 {clubData[3].draws}무 {clubData[3].lose}패</Text>
      <Text style={styles.text1}>{clubData[3].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[3]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[3]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[3].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>4</Text>
      <Image
        style={styles.thItem}
        contentFit="cover"
        source={require("../assets/rectangle-blue.png")}
      />
    </View>
  </>
)}
      {clubData && (
  <>
    <View style={[styles.rd, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[2].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[2].win}승 {clubData[2].draws}무 {clubData[2].lose}패</Text>
      <Text style={styles.text1}>{clubData[2].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[2]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[2]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[2].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>3</Text>
      <Image
        style={styles.thItem}
        contentFit="cover"
        source={require("../assets/rectangle-blue.png")}
      />
    </View>
  </>
)}
      {clubData && (
  <>
    <View style={[styles.nd, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[1].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[1].win}승 {clubData[1].draws}무 {clubData[1].lose}패</Text>
      <Text style={styles.text1}>{clubData[1].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[1]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[1]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[1].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>2</Text>
      <Image
        style={styles.thItem}
        contentFit="cover"
        source={require("../assets/rectangle-blue.png")}
      />
    </View>
  </>
)}

      {clubData && (
  <>
    <View style={[styles.st, styles.thPosition]}>
      <View style={[styles.thChild, styles.childPosition]} />
      <Image
        style={[styles.image533Icon,  { width: width * 24, height: height * 24}]}
        source={getLogoPath(clubData[0].club)} // Use source instead of {clubData[0].logo}
        contentFit="cover"
      />
      <Text style={[styles.text, styles.textFlexBox]}>{clubData[0].win}승 {clubData[0].draws}무 {clubData[0].lose}패</Text>
      <Text style={styles.text1}>{clubData[0].club}</Text>
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={
            clubData && clubData[0]?.status === 'up'
              ? require("../assets/polygon-4.png")
              : clubData && clubData[0]?.status === 'down'
              ? require("../assets/polygon-5.png")
              : require("../assets/Rectangle-1335.png") // "-" 인 경우에도 기본 이미지를 사용합니다
          }
      />
      <Text style={[styles.text2, styles.textFlexBox]}>{clubData[0].points}</Text>
      <Text style={[styles.text3, styles.textTypo]}>1</Text>
      <Image
        style={styles.thItem}
        contentFit="cover"
        source={require("../assets/rectangle-blue.png")}
      />
    </View>
  </>
)}

      <View style={[styles.rankChild, styles.childPosition]} />
      <View style={[styles.wrapper, styles.textFlexBox]}>
        <Text style={[styles.text80, styles.textTypo]}>시즌 순위</Text>
      </View>
      <Pressable onPress={main}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/vector-26822.png")}
        />
      </View>
      </Pressable>
      <View style={[styles.rankItem, styles.thPosition]} />
      <Text style={[styles.point, styles.wDLTypo]}>Point</Text>
      <Text style={[styles.rank1, styles.wDLTypo]}>Rank</Text>
      <Text style={[styles.club, styles.wDLTypo]}>Club</Text>
      <Text style={[styles.wDL, styles.wDLTypo]}>W-D-L</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  thPosition: {
    left: "0%",
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.colorDarkslategray,
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.colorWhite,
  },
  iconPosition: {
    height: height * 9,
    width: width * 10,
    left: width * 45,
    top: height * 22,
    position: "absolute",
  },
  groupChildLayout: {
    height: height * 50,
    width: width * 80,
    backgroundColor : Color.colorDarkslategray,
    position: "absolute",
  },
  wDLTypo: {
    color: Color.colorLightsteelblue_100,
    lineHeight: height * 12,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    position: "absolute",
  },
  thChild: {
    height: "100%",
    bottom: "0%",
  },
  shuIcon: {
    top: height * 14,
    left: width * 69,
    width: width * 24,
    height: height * 24,
    position: "absolute",
  },
  text: {
    width: width * 123,
    left: width * 191,
    display: "flex",
    lineHeight: height * 20,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    top: "30.19%",
    height: height * 20,
  },
  text1: {
    width: width * 85,
    left: width * 106,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    lineHeight: height * 20,
    fontSize: FontSize.size_base,
    top: "30.19%",
    height: height * 20,
    position: "absolute",
  },
  text2: {
    width: "7.47%",
    left: "87.47%",
    display: "flex",
    lineHeight: height * 20,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    top: "30.19%",
    height: height * 20,
  },
  text3: {
    height: height * 18,
    width: width * 22,
    top: "33.68%",
    left: width * 13,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    display: "flex",
    lineHeight: height * 18,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
  },
  thItem: {
    top: height * 1,
    width: width * 5,
    height: height * 51,
    left: 0,
    position: "absolute",
  },
  th: {
    top: height * 1219,
    height: height * 53,
    width: "100%",
  },
  th1: {
    top: height * 1164,
    height: height * 53,
    width: "100%",
  },
  th2: {
    top: height * 1109,
    height: height * 53,
    width: "100%",
  },
  th3: {
    top: height * 1054,
    height: height * 53,
    width: "100%",
  },
  th4: {
    top: height * 999,
    height: height * 53,
    width: "100%",
  },
  th5: {
    top: height * 944,
    height: height * 53,
    width: "100%",
  },
  th6: {
    top: height * 889,
    height: height * 53,
    width: "100%",
  },
  th7: {
    top: height * 834,
    height: height * 53,
    width: "100%",
  },
  polygonIcon: {
    borderRadius: 0,
  },
  th8: {
    top: height * 779,
    height: height * 53,
    width: "100%",
  },
  th9: {
    top: height * 724,
    height: height * 53,
    width: "100%",
  },
  th10: {
    top: height * 669,
    height: height * 53,
    width: "100%",
  },
  th11: {
    top: height * 614,
    height: height * 53,
    width: "100%",
  },
  th12: {
    top: height * 559,
    height: height * 53,
    width: "100%",
  },
  th13: {
    top: height * 504,
    height: height * 53,
    width: "100%",
  },
  th14: {
    top: height * 449,
    height: height * 53,
    width: "100%",
  },
  th15: {
    top: height * 394,
    height: height * 53,
    width: "100%",
  },
  th16: {
    top: height * 339,
    height: height * 53,
    width: "100%",
  },
  rd: {
    top: height * 284,
    bottom: "73.59%",
    height: height * 53,
    width: "100%",
  },
  nd: {
    top: height * 229,
    height: height * 53,
    width: "100%",
  },
  image533Icon: {
    height: "45.28%",
    width: "6.4%",
    top: "26.42%",
    right: "75.2%",
    bottom: "28.3%",
    left: "18.4%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  st: {
    top: height * 174,
    height: height * 53,
    width: "100%",
  },
  rankChild: {
    flex: 1,
    height: height * 135,
  },
  text80: {
    fontSize: FontSize.size_lg,
    letterSpacing: width * -0.4,
    lineHeight: height * 20,
    width: width * 150,
  },
  wrapper: {
    top: height * 80,
    right: width * 145,
    left: width * 150,
    flexDirection: "row",
  },
  groupChild: {
    top: 0,
    left: 0,
  },
  rectangleParent: {
    top: height * 66,
    left: width * 0,
  },
  rankItem: {
    height: height * 38.03,
    width: width * 375,
    top: height * 135,
    backgroundColor: Color.colorGray_100,
  },
  point: {
    left: "87.2%",
    top: height * 149,
    lineHeight: height * 12,
    fontSize: FontSize.size_xs,
  },
  rank1: {
    left: "3.73%",
    top: height * 149,
    lineHeight: height * 12,
    fontSize: FontSize.size_xs,
  },
  club: {
    left: "24.8%",
    top: height * 149,
    lineHeight: height * 12,
    fontSize: FontSize.size_xs,
  },
  wDL: {
    top: height * 149,
    left: "62.67%",
  },
  back: {
    position: "absolute",
    width : width * 50,
    height : height * 50,
    top : height * 0,
    left: width * 24,
    backgroundColor: Color.colorWhite
},
groupItem: {
    width: width * 7,
    height: height * 13,
    marginTop : height * 16,
    marginLeft : width * 24,
    position: "absolute",
  },
  rank: {
    flex: 1,
    height: height * 1276,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default RankInfo;
