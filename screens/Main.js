import React, { useState, useEffect, useMemo} from "react";
import { width, height } from "../GlobalStyles";
import { Image } from "expo-image";
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Pressable, useWindowDimensions } from "react-native";
import RankData from "../DB/rank";
import MatchInfo from "../components/match";
import Fixture from "../components/fixtures";
import { useStatsData } from "../DB/stats";
import { styles } from '../style/Mainstyle'; 
import { useNavigation } from "@react-navigation/native";

const Main = React.memo(() => {
  const [clubData, setClubData] = useState(null);
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const statsData = useStatsData();
  const [playerName1, setPlayerName1] = useState(''); 
  const [playerStat1, setPlayerStat1] = useState(''); 
  const [playerName2, setPlayerName2] = useState(''); 
  const [playerStat2, setPlayerStat2] = useState(''); 
  const [teamName1, setTeamName1] = useState(''); 
  const [teamStat1, setTeamStat1] = useState('');   
  const [teamName2, setTeamName2] = useState(''); 
  const [teamStat2, setTeamStat2] = useState('');   
  
  const navigation = useNavigation();

  const RankInfo = () => {
      navigation.navigate('RankInfo');
  };

  const SeasonInfo = () => {
    navigation.navigate('SeasonInfo');
};

  useEffect(() => {
    if (statsData) {
      setPlayerName1(statsData.playerName1 || ''); // Perform null check and set default value
      setPlayerStat1(statsData.playerStat1 || ''); // Perform null check and set default value
      setPlayerName2(statsData.playerName2 || '');
      setPlayerStat2(statsData.playerStat2 || '');
      setTeamName1(statsData.teamName1 || '');
      setTeamStat1(statsData.teamStat1 || '');
      setTeamName2(statsData.teamName2 || '');
      setTeamStat2(statsData.teamStat2 || '');
    }
  }, [statsData]);


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

  const clubLogos = useMemo(() => ({
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
  }), []);

  const StatsName = useMemo(() => ({
    "Erling Haaland": require("../assets/stats/Haaland.png"),
    "Ollie Watkins": require("../assets/stats/Watkins.png"),
    "Mohamed Salah": require("../assets/stats/Salah.png"),
    "Dominic Solanke": require("../assets/stats/Solanke.png"),
    "Jarrod Bowen": require("../assets/stats/Bowen.png"),
    "Son Heung-Min": require("../assets/stats/Heung-Min.png"),
    "Bukayo Saka": require("../assets/stats/Saka.png"),
    "Alexander Isak": require("../assets/stats/Isak.png"),
    "Phil Foden": require("../assets/stats/Foden.png"),
    "Cole Palmer": require("../assets/stats/Palmer.png"),
    "Pascal Gross": require("../assets/stats/Gross.png"),
    "Pascal Groß": require("../assets/stats/Gross.png"),
    "Kieran Trippier": require("../assets/stats/Trippier.png"),
    "Pedro Neto": require("../assets/stats/Neto.png"),    
    "Julián Álvarez": require("../assets/stats/Álvarez.png"),
    "Leon Bailey": require("../assets/stats/Bailey.png"),
    "Arsenal": require("../assets/stats/Arsenal.png"),
    "Man City": require("../assets/stats/Man City.png"),
    "Aston Villa": require("../assets/stats/Aston Villa.png"),
    "Everton": require("../assets/stats/Everton.png"),
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
  <SafeAreaView style={{ flex: 1 }}>
  <ScrollView >
  <View style={[styles.main]}>
  <MatchInfo />
  <Fixture  />
    <View style={styles.main1}>
      <Image
        style={styles.image535Icon}
        contentFit="cover"
        source={require("../assets/image-535.png")}
      />
      <View style={[styles.groupItem1, styles.itemGroupLayout]} />
      <View style={[styles.groupInner1, styles.itemGroupLayout]} />
      <View style={[styles.groupItem, styles.itemGroupLayout]} />
      <View style={[styles.groupInner, styles.itemGroupLayout]} />
      {/* rank */}
      <View style={[styles.mainInner, styles.mainInnerLayout]} />

      <View style={styles.pom}>
        <View style={[styles.pomChild, styles.pomChildPosition]} />
        <View style={[styles.pomItem, styles.pomLayout]} />
        <View style={[styles.pomInner, styles.pomLayout]} />
        <View style={[styles.pomChild1, styles.pomChildPosition]} />
      </View>
      <Text style={[styles.rank, styles.wDLTypo]}>Rank</Text>
      <Text style={[styles.club, styles.wDLTypo]}>Club</Text>
      <Text style={[styles.wDL, styles.wDLTypo]}>W-D-L</Text>
      <Text style={[styles.point, styles.wDLTypo]}>Point</Text>
      <Pressable style={[styles.navi1]} onPress={RankInfo}>
    </Pressable>
      <Image
        style={[styles.mainChild4, styles.mainChildLayout1]}
        contentFit="cover"
        source={require("../assets/vector-2683.png")}
      />
      <Text style={[styles.text16, styles.textTypo7]}>순위</Text>

<TouchableOpacity onPress={RankInfo}>
    {/* 1위 데이터 표시 */}
    {clubData && (
      <>
        <View style={[styles.tableChild, styles.tableChildLayout]}>
        <Text style={[styles.text17, styles.textLayout1, { opacity: 0.9 }]}>{clubData[0].rank}</Text>
        <Text style={[styles.text20, styles.textLayout, { opacity: 0.9 }]}>{clubData[0].club}</Text>
        <Text style={[styles.w6d2l, styles.textTypo4, { opacity: 0.9 }]}>{clubData[0].win}승 {clubData[0].draws}무 {clubData[0].lose}패</Text>
        <Text style={[styles.text21, styles.textTypo4, { opacity: 0.9 }]}>{clubData[0].points}</Text>
        <Image
          style={[styles.image516Icon, styles.iconLayout2,  { width: width * 21, height: height * 21, opacity: 0.9 }]}
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
                </View>
      </>
    )}
</TouchableOpacity>

<TouchableOpacity style={[styles.tableItem, styles.tableChildLayout]} onPress={RankInfo}>
</TouchableOpacity>
    {/* 2위 데이터 표시 */}      
    {clubData && (
    <>
      <View style={[styles.tableItem, styles.tableChildLayout]}>
      <Text style={[styles.text18, styles.textTypo6, { opacity: 0.9 }]}>{clubData[1].rank}</Text>
      <Text style={[styles.text22, styles.textLayout, { opacity: 0.9 }]}>{clubData[1].club}</Text>
      <Text style={[styles.w5d3l, styles.textTypo6, { opacity: 0.9 }]}>{clubData[1].win}승 {clubData[1].draws}무 {clubData[1].lose}패</Text>
      <Text style={[styles.text23, styles.textTypo6, { opacity: 0.9 }]}>{clubData[1].points}</Text>
      <Image
        style={[styles.image517Icon, styles.iconLayout2,  { width: width * 21, height: height * 21, opacity: 0.9 }]}
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
      </View>
        </>
      )}

  <TouchableOpacity onPress={RankInfo}>
    {/* 3위 데이터 표시 */}            
    {clubData && (
    <>
      <View style={[styles.tableInner, styles.tableChildLayout]}>
      <Text style={[styles.text19, styles.textTypo5, { opacity: 0.9 }]}>{clubData[2].rank}</Text>
      <Text style={[styles.text24, styles.textLayout, { opacity: 0.9 }]}>{clubData[2].club}</Text>
      <Text style={[styles.w4d4l, styles.textTypo5, { opacity: 0.9 }]}>{clubData[2].win}승 {clubData[2].draws}무 {clubData[2].lose}패</Text>
      <Text style={[styles.text25, styles.textTypo5, { opacity: 0.9 }]}>{clubData[2].points}</Text>
      <Image
        style={[styles.image514Icon, styles.iconLayout2,  { width: width * 21, height: height * 21, opacity: 0.9 }]}
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
      </View>
        </>
      )}
  </TouchableOpacity>

  <TouchableOpacity onPress={RankInfo}>
    {/* 4위 데이터 표시 */}            
    {clubData && (
    <>
    <View style={[styles.rectangleView, styles.tableChildLayout]}>
    <Text style={[styles.text26, styles.textTypo3, { opacity: 0.9 }]}>{clubData[3].rank}</Text>
    <Text style={[styles.text27, styles.textLayout, { opacity: 0.9 }]}>{clubData[3].club}</Text>
    <Text style={[styles.w4d6l, styles.textTypo3, { opacity: 0.9 }]}>{clubData[3].win}승 {clubData[3].draws}무 {clubData[3].lose}패</Text>
    <Text style={[styles.text28, styles.textTypo3, { opacity: 0.9 }]}>{clubData[3].points}</Text>
    <Image
        style={[styles.image520Icon, styles.iconLayout2,  { width: width * 21, height: height * 21, opacity: 0.9 }]}
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
      </View>
        </>
      )}
  </TouchableOpacity>

  <TouchableOpacity onPress={RankInfo}>
    {/* 5위 데이터 표시 */}      
    {clubData && (
    <>
    <View style={[styles.tableChild1, styles.tableChildLayout]}>
    <Text style={[styles.text29, styles.textTypo2, { opacity: 0.9 }]}>{clubData[4].rank}</Text>
    <Text style={[styles.text30, styles.textLayout, { opacity: 0.9 }]}>{clubData[4].club}</Text>
    <Text style={[styles.w5d6l, styles.textTypo2, { opacity: 0.9 }]}>{clubData[4].win}승 {clubData[4].draws}무 {clubData[4].lose}패</Text>
    <Text style={[styles.text31, styles.textTypo2, { opacity: 0.9 }]}>{clubData[4].points}</Text>
    <Image
        style={[styles.image521Icon, styles.iconLayout2, { width: width * 21, height: height * 21,  opacity: 0.9 }]}
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
      </View>
        </>
      )}
  </TouchableOpacity>
      <Text style={[styles.jan2024, styles.fwTypo]}>2024. 02</Text>
      <Text style={[styles.dec23, styles.fw1Typo]}>2024. 01</Text>
      <Pressable onPress={SeasonInfo}>
      <Text style={[styles.text32, styles.textTypo7]}>시즌스텟</Text>
      <Image
        style={[styles.mainChild12, styles.mainChildLayout1]}
        contentFit="cover"
        source={require("../assets/vector-2683.png")}
      />
      </Pressable>
      {/* statData */}  

    {useStatsData && (
       <>
       <TouchableOpacity onPress={SeasonInfo}>
        <Image
          style={[styles.image523Icon, styles.iconLayout1]}
          contentFit="cover"
          source={StatsName[playerName2]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={SeasonInfo}>
      <Image
        style={[styles.image526Icon, styles.iconLayout1]}
        contentFit="cover"
        source={StatsName[playerName1]}
      />
        </TouchableOpacity>
        <TouchableOpacity onPress={SeasonInfo}>
        <Image
        style={[styles.image525Icon, styles.iconLayout]}
        contentFit="cover"
        source={StatsName[teamName1]}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={SeasonInfo}> 
      <Image
        style={[styles.image524Icon, styles.iconLayout]}
        contentFit="cover"
        source={StatsName[teamName2]}
      />
      </TouchableOpacity>
    </>
  )}

    {statsData && (
       <>
      <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild9, styles.groupChildLayout3]} />
        <View style={[styles.groupChild10, styles.groupChildLayout3]} />
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild9, styles.groupChildLayout3]} />
        <View style={[styles.groupChild10, styles.groupChildLayout3]} />
      </View>
      <Text style={[styles.goals, styles.goalsTypo]}>개인 득점</Text>
      <Text style={[styles.text33, styles.textTypo1]}>{playerStat1}</Text>
      <Text style={[styles.text34, styles.textTypo1]}>{playerStat2}</Text>
      <Text style={[styles.assists, styles.goalsTypo]}>개인 도움</Text>
      <View style={[styles.rectangleParent3, styles.rectangleParentPosition]}>
        <View style={[styles.groupChild9, styles.groupChildLayout3]} />
        <View style={[styles.groupChild10, styles.groupChildLayout3]} />
      </View>
      <View style={[styles.rectangleParent4, styles.rectangleParentPosition]}>
        <View style={[styles.groupChild9, styles.groupChildLayout3]} />
        <View style={[styles.groupChild10, styles.groupChildLayout3]} />
      </View>
      <Text style={[styles.goals1, styles.goals1Typo]}>팀 득점</Text>
      <Text style={[styles.text35, styles.textTypo]}>{teamStat1}</Text>
      <Text style={[styles.text36, styles.textTypo]}>{teamStat2}</Text>
      <Text style={[styles.cleanSheets, styles.goals1Typo]}>클린 시트</Text>
      </>
  )}
      <Text style={[styles.pom1, styles.textPosition1]}>이 달의 선수</Text>
      <Image
        style={[styles.mainChild13, styles.mainChildLayout1]}
        contentFit="cover"
        source={require("../assets/vector-2683.png")}
      />
      <Text style={[styles.text37, styles.fwTypo]}>R. 호일룬</Text>
      <Text style={[styles.text38, styles.fw1Typo]}>디오구 조타</Text>
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
        source={require("../assets/MUN.png")}
      />
      <Image
        style={[styles.image528Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/LIV.png")}
      />
      <Text style={[styles.df, styles.dfTypo]}>FW</Text>
      <Text style={[styles.nov23, styles.dfTypo]}>2023. 12</Text>
      <Text style={[styles.text39, styles.dfTypo]}>도미닉 솔랑케</Text>
      <Image
        style={[styles.image530Icon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/BOU.png")}
      />
      <Text style={[styles.df1, styles.df1Typo]}>DF</Text>
      <Text style={[styles.nov231, styles.df1Typo]}>2023. 11</Text>
      <Text style={[styles.text40, styles.df1Typo]}>해리 매과이어</Text>
      <Image
        style={[styles.image531Icon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/MUN.png")}
        />
        </View>
    </View>
  </ScrollView>
  </SafeAreaView>
      );
    });
    

export default Main;
