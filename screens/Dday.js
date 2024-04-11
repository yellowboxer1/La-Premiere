import React, { useState, useEffect } from 'react';
import { Image } from "expo-image";
import { Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ProgressBar } from "react-native-paper";
import { ScrollView } from "react-native";
import RankData from "../DB/rank";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getWinRate } from '../DB/asset'; 
import { useNavigation } from "@react-navigation/native";
import { styles } from '../style/DdayStyle'; 

const Dday = () => {
    const [favoriteTeam, setFavoriteTeam] = useState(null);
    const [homeTeam, setHomeTeam] = useState(null);
    const [awayTeam, setAwayTeam] = useState(null);
    const [stadium, setStadium] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [totalWin1, setTotalWin1] = useState(null);
    const [homeWin1, setHomeWin1] = useState(null);
    const [awayWin1, setAwayWin1] = useState(null);
    const [totalWin2, setTotalWin2] = useState(null);
    const [homeWin2, setHomeWin2] = useState(null);
    const [awayWin2, setAwayWin2] = useState(null);    
    const [recentMatches1, setRecentMatches1] = useState(null);
    const [recentMatches2, setRecentMatches2] = useState(null);
    const [recentMatches3, setRecentMatches3] = useState(null);
    const [recentMatches4, setRecentMatches4] = useState(null);
    const [recentMatches5, setRecentMatches5] = useState(null);
    const [played, setPlayed] = useState(null);
    const [draws, setDraws] = useState(null);
    const [homeOverallWinRate, setHomeOverallWinRate] = useState(null);
    const [awayOverallWinRate, setAwayOverallWinRate] = useState(null);
    const [homeTeamKR, setHomeTeamKR] = useState(null);
    const [awayTeamKR, setAwayTeamKR] = useState(null);
    const [clubData, setClubData] = useState(null);
  
    const isToday = (date) => {
      const today = new Date();
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    };

    const navigation = useNavigation();

    const main = () => {
        navigation.navigate('MainScreen');
    };

    const TeamKR = {
        "Arsenal": "아스널",
        "Liverpool": "리버풀",
        "Aston Villa": "애스턴 빌라",
        "Man City": "맨시티",
        "Manchester City": "맨시티",
        "Tottenham Hotspur": "토트넘",
        "Spurs": "토트넘",
        "Manchester United": "맨유",
        "Man Utd": "맨유",
        "West Ham": "웨스트햄",
        "West Ham United": "웨스트햄",
        "Brighton & Hove Albion": "브라이턴",
        "Brighton": "브라이턴",
        "Wolves": "울브스",
        "Wolverhampton Wanderers": "울브스",
        "Newcastle United": "뉴캐슬",
        "Newcastle": "뉴캐슬",
        "Chelsea": "첼시",
        "Bournemouth": "본머스",
        "Fulham": "풀럼",    
        "Crystal Palace": "팰리스",
        "Brentford": "브랜트퍼드",
        "Everton": "에버턴",
        "Nott'm Forest": "노팅엄",
        "Nottingham Forest": "노팅엄",
        "Luton Town": "루턴",
        "Luton": "루턴",
        "Burnley": "번리",
        "Sheffield United": "셰필드",
        "Sheffield Utd": "셰필드",  
      };
  
    const clubLogos = {
      "Arsenal": require("../assets/ARS.png"),
      "Liverpool": require("../assets/LIV.png"),
      "Aston Villa": require("../assets/AVL.png"),
      "Manchester City": require("../assets/MCI.png"),
      "Man City": require("../assets/MCI.png"),
      "Tottenham Hotspur": require("../assets/TOT.png"),
      "Spurs":  require("../assets/TOT.png"),
      "Manchester United": require("../assets/MUN.png"),
      "Man Utd": require("../assets/MUN.png"),
      "West Ham United": require("../assets/WHU.png"),
      "West Ham": require("../assets/WHU.png"),
      "Brighton & Hove Albion": require("../assets/BHA.png"),
      "Brighton": require("../assets/BHA.png"),
      "Wolverhampton Wanderers": require("../assets/WOL.png"),
      "Wolves": require("../assets/WOL.png"),
      "Newcastle United": require("../assets/NEW.png"),
      "Newcastle": require("../assets/NEW.png"),
      "Chelsea": require("../assets/CHE.png"),
      "Bournemouth": require("../assets/BOU.png"),
      "Fulham": require("../assets/FUL.png"),    
      "Crystal Palace": require("../assets/CRY.png"),
      "Brentford": require("../assets/BRE.png"),
      "Everton": require("../assets/EVE.png"),
      "Nottingham Forest": require("../assets/NFO.png"),
      "Nott'm Forest": require("../assets/NFO.png"),
      "Luton Town": require("../assets/LUT.png"),
      "Luton": require("../assets/LUT.png"),
      "Burnley": require("../assets/BUR.png"),
      "Sheffield United": require("../assets/SHU.png"),
      "Sheffield Utd": require("../assets/SHU.png"),
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
  

    useEffect(() => {
        if (homeTeam) {
          setHomeTeamKR(TeamKR[homeTeam]);
        }
        if (awayTeam) {
          setAwayTeamKR(TeamKR[awayTeam]);
        }
      }, [homeTeam, awayTeam]);
    
    useEffect(() => {
      // Fetch favorite team from AsyncStorage and fetch next match
      const fetchData = async () => {
        try {
          // Get favorite team from AsyncStorage
          const selectedTeam = await AsyncStorage.getItem('selectedTeam');
          if (selectedTeam) {
            setFavoriteTeam(selectedTeam);
            // Fetch next match for the favorite team
            await fetchNextMatch(selectedTeam); // 수정: await 추가
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
  
      fetchData();
    }, []);
  
    const fetchNextMatch = async (team) => {
      try {
        // Create URL based on favorite team
        const favor = {
          "아스널 FC": "1",
          "리버풀 FC": "10",
          "맨체스터 시티": "11",
          "애스턴 빌라": "2",
          "토트넘 홋스퍼": "21",
          "맨체스터 유나이티드": "12",
          "웨스트 햄": "25",
          "브라이턴": "131",
          "울브스": "38",
          "뉴캐슬": "23",
          "첼시 FC": "4",
          "풀럼": "34",
          "AFC 본머스": "127",
          "크리스탈 팰리스": "6",
          "브랜트퍼드": "130",
          "에버턴": "7",
          "노팅엄 포레스트": "15",
          "루턴타운": "163",
          "번리": "43",
          "셰필드": "18",
        };
        const teamId = favor[team];
        const url = `https://port-0-link-fi1xh2bltwsbji2.sel5.cloudtype.app/api/clubs/${teamId}`;
        const url1 = `https://port-0-api-fi1xh2bltwsbji2.sel5.cloudtype.app/favorData/${teamId}`;
  
        // Fetch data from URL
        const response = await fetch(url);
        const data = await response.json();
  
        // Fetch data from URL
        const response1 = await fetch(url1);
        const data1 = await response1.json();
  
        const { homeOverallWinRate, awayOverallWinRate } = await getWinRate(data1);
  
        setHomeOverallWinRate(homeOverallWinRate);
        setAwayOverallWinRate(awayOverallWinRate);
  
     
        const nextMatch = data.find(match => match.matchNumber === 1);
        if (!nextMatch) {
          console.error("Next match not found");
          return;
        }
        
        const startDateString = nextMatch.startDate;
        
        // Check if startDateString is not undefined
        if (startDateString) {
          const [datePart, ...timePart] = startDateString.split(', ');
          const [month, day, year] = datePart.split('/');
          const [time, meridiem] = timePart.join(' ').split(' '); // Splitting time and AM/PM
          let hour = parseInt(time, 10);
          
          // Adjust hour for PM
          if (meridiem === 'PM' && hour < 12) {
            hour += 12;
          }
          if (meridiem === 'AM' && hour === 12) {
            hour = 0; // Midnight
          }
          
          // Format hour as two digits
          const formattedHour = hour.toString().padStart(2, '0');
          const minutes = time.split(':')[1];
          
          // Constructing the Date object
          const startDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')} ${formattedHour}:${minutes}`;
          
          // Set startDate state
          setStartDate(startDate);
          
        } else {
          console.error("startDateString is undefined");
        }
        setTotalWin1(data1.headToHeadStats[Object.keys(data1.headToHeadStats)[0]]?.totalWins || null);
        setTotalWin2(data1.headToHeadStats[Object.keys(data1.headToHeadStats)[1]]?.totalWins || null);
        setHomeWin1(data1.headToHeadStats[Object.keys(data1.headToHeadStats)[0]]?.homeWins || null);
        setHomeWin2(data1.headToHeadStats[Object.keys(data1.headToHeadStats)[1]]?.homeWins || null);
        setAwayWin1(data1.headToHeadStats[Object.keys(data1.headToHeadStats)[0]]?.awayWins || null);
        setAwayWin2(data1.headToHeadStats[Object.keys(data1.headToHeadStats)[1]]?.awayWins || null);
        setRecentMatches1(data1.recentMatches[Object.keys(data1.recentMatches)[0]]);
        setRecentMatches2(data1.recentMatches[Object.keys(data1.recentMatches)[1]]);
        setRecentMatches3(data1.recentMatches[Object.keys(data1.recentMatches)[2]]);
        setRecentMatches4(data1.recentMatches[Object.keys(data1.recentMatches)[3]]);
        setRecentMatches5(data1.recentMatches[Object.keys(data1.recentMatches)[4]]);

      setPlayed(data1.middleSection.played);
      setDraws(data1.middleSection.draws);

      // 홈 팀과 어웨이 팀을 설정
      setHomeTeam(nextMatch.homeTeam);
      setAwayTeam(nextMatch.awayTeam);
      setStadium(nextMatch.stadium);

    } catch (error) {
      console.error('Error fetching next match:', error);
    }
  };

  return (
    <ScrollView>
    <View style={styles.match}>
      <View style={styles.playedParent}>
        <Text style={[styles.played, styles.awayTypo]}>Played</Text>
        <View style={styles.drawsParent}>
          <Text style={[styles.draws, styles.awayTypo]}>Draws</Text>
          <Text style={[styles.text, styles.textFlexBox]}>{draws}</Text>
        </View>
        <Text style={[styles.text1, styles.vsTypo]}>{played}</Text>
        <View style={[styles.totalWinsParent, styles.totalLayout]}>
          <Text style={[styles.totalWins, styles.awayTypo]}>Total Wins</Text>
          <Text style={[styles.text2, styles.textFlexBox]}>{totalWin1}</Text>
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          <Text style={[styles.text3, styles.textFlexBox]}>{homeWin1}</Text>
          <Text style={[styles.away, styles.awayTypo]}>Away</Text>
          <Text style={[styles.text4, styles.textFlexBox]}>{awayWin1}</Text>
        </View>
        <View style={[styles.totalWinsGroup, styles.totalLayout]}>
          <Text style={[styles.totalWins1, styles.textFlexBox]}>
            Total Wins
          </Text>
          <Text style={[styles.text5, styles.textTypo5]}>{totalWin2}</Text>
          <Text style={[styles.home1, styles.homeTypo]}>Home</Text>
          <Text style={[styles.text6, styles.textTypo5]}>{homeWin2}</Text>
          <Text style={[styles.away1, styles.textFlexBox]}>Away</Text>
          <Text style={[styles.text7, styles.textTypo5]}>{awayWin2}</Text>
        </View>
      </View>
      <View style={[styles.matchChild, styles.matchLayout]} />
      <View style={[styles.matchItem, styles.matchLayout]} />
      <View style={[styles.matchInner, styles.matchLayout]} />
      <View style={styles.image563ParentPosition}>
        <Image
          style={[styles.image563Icon, styles.image563IconLayout]}
          contentFit="cover"
          source={require("../assets/image-563.png")}
        />
        <LinearGradient
          style={[styles.lineargradient1, styles.image563ParentPosition]}
          locations={[0, 0.4, 0.86]}
          colors={["rgba(40, 40, 48, 0)", "rgba(40, 40, 48, 0.75)", "#282830"]}
        />
      </View>
      <View style={[styles.vectorParent, styles.parentLayout]}>
      <Pressable style = {styles.back} onPress={main}>
      <Image
          style={[styles.frameChild]}
          contentFit="cover"
          source={require("../assets/vector-26822.png")}
        />
        </Pressable>
        <View style={[styles.arsParent, styles.parentLayout]}>
          <View style={[styles.ars, styles.arsLayout]}>
            <View style={[styles.arsChild, styles.arsLayout]} />
            <Image
              style={[styles.arsIcon, styles.arsIconLayout1]}
              contentFit="cover"
              source={getLogoPath(awayTeam)}
            />
          </View>
          <Image
            style={[styles.mciIcon, styles.arsLayout]}
            contentFit="cover"
            source={getLogoPath(homeTeam)}
          />
          <Text style={[styles.text8, styles.textTypo4]}>
            {homeTeamKR}</Text>
          <Text style={[styles.text9, styles.text9Position]}>
            {awayTeamKR}
          </Text>
          <Text style={[styles.nd, styles.textTypo3]}>
          {homeTeamKR && clubData ? `${clubData.find(team => team.club === homeTeamKR)?.rank}위  l` : ''}
          </Text>
          <Text style={[styles.text10, styles.textTypo3]}>
          {homeTeamKR && clubData ? `${clubData.find(team => team.club === homeTeamKR)?.win}승 ${clubData.find(team => team.club === homeTeamKR)?.lose}패` : ''}
          </Text>
          <Text style={[styles.st, styles.textTypo3]}>
          {awayTeamKR && clubData ? `${clubData.find(team => team.club === awayTeamKR)?.rank}위  l` : ''}
          </Text>
          <Text style={[styles.text11, styles.textTypo3]}>
          {awayTeamKR && clubData ? `${clubData.find(team => team.club === awayTeamKR)?.win}승 ${clubData.find(team => team.club === awayTeamKR)?.lose}패` : ''}
          </Text>
          <View style={[styles.frameParent, styles.mciIcon1Position]}>
            <View style={[styles.wrapper, styles.text9Position]}>
              <Text style={[styles.text12, styles.textTypo2]}>경기 상세</Text>
            </View>
            <Text style={[styles.text13, styles.textTypo3]}>
              {startDate}
            </Text>
            <Text style={[styles.vs, styles.vsTypo]}>VS</Text>
          </View>
          <View
            style={[styles.frameItem, styles.framePosition]}
            contentFit="cover"
            source={require("../assets/vector-2693.png")}
          />
          <Image
            style={[styles.frameInner, styles.framePosition]}
            contentFit="cover"
            source={require("../assets/vector-2693.png")}
          />
        </View>
      </View>
      <Text style={[styles.text14, styles.textTypo2]}>사전 예측</Text>
      <Text style={[styles.etihadStadiumManchester, styles.textTypo3]}>
        {stadium}
      </Text>
      <Text style={[styles.text15, styles.textClr]}>최근 맞대결</Text>
      <View style={[styles.rectangleView, styles.image563IconLayout]} />
      <View style={styles.container}>
        <ProgressBar
          style={styles.progressbar}
          progress={homeOverallWinRate ? homeOverallWinRate : 0}
          color="#5481fe"
        />
      </View>
      <View style={styles.homeParent}>
        <Text style={styles.home2}>Home</Text>
        <Text style={[styles.away2, styles.away2Position]}>Away</Text>
        <Text style={[styles.text16, styles.textTypo1]}>
        {homeOverallWinRate ? `${(homeOverallWinRate * 100).toFixed(2).padStart(5, '0')}%` : ''}
        </Text>
        <View style={[styles.mciParent, styles.arsIconLayout]}>
          <Image
            style={[styles.mciIcon1, styles.arsIconLayout]}
            contentFit="cover"
            source={getLogoPath(recentMatches1 ? recentMatches1.away_team : '')}
          />
          <View style={[styles.ars1, styles.arsIconLayout]}>
            <View style={[styles.ars1, styles.arsIconLayout]} />
            <Image
              style={[styles.arsIcon1, styles.arsIconLayout]}
              contentFit="cover"
              source={getLogoPath(recentMatches1 ? recentMatches1.home_team : '')}
            />
          </View>
        </View>
        <View style={[styles.arsGroup, styles.arsIconLayout]}>
          <View style={[styles.ars1, styles.arsIconLayout]}>
            <View style={[styles.ars1, styles.arsIconLayout]} />
            <Image
              style={[styles.arsIcon1, styles.arsIconLayout]}
              contentFit="cover"
              source={getLogoPath(recentMatches2 ? recentMatches2.home_team : '')}
            />
          </View>
          <Image
            style={[styles.mciIcon1, styles.arsIconLayout]}
            contentFit="cover"
            source={getLogoPath(recentMatches2 ? recentMatches2.away_team : '')}
          />
        </View>
        <View style={[styles.mciGroup, styles.arsIconLayout]}>
          <Image
            style={[styles.mciIcon1, styles.arsIconLayout]}
            contentFit="cover"
            source={getLogoPath(recentMatches3 ? recentMatches3.away_team : '')}
          />
          <View style={[styles.ars1, styles.arsIconLayout]}>
            <View style={[styles.ars1, styles.arsIconLayout]} />
            <Image
              style={[styles.arsIcon1, styles.arsIconLayout]}
              contentFit="cover"
              source={getLogoPath(recentMatches3 ? recentMatches3.home_team : '')}
            />
          </View>
        </View>
        <View style={[styles.mciContainer, styles.arsIconLayout]}>
          <Image
            style={[styles.mciIcon1, styles.arsIconLayout]}
            contentFit="cover"
            source={getLogoPath(recentMatches5 ? recentMatches5.away_team : '')}
          />
          <View style={[styles.ars1, styles.arsIconLayout]}>
            <View style={[styles.ars1, styles.arsIconLayout]} />
            <Image
              style={[styles.arsIcon1, styles.arsIconLayout]}
              contentFit="cover"
              source={getLogoPath(recentMatches5 ? recentMatches5.home_team : '')}
            />
          </View>
        </View>
        <View style={[styles.arsContainer, styles.arsIconLayout]}>
          <View style={[styles.ars1, styles.arsIconLayout]}>
            <View style={[styles.ars1, styles.arsIconLayout]} />
            <Image
              style={[styles.arsIcon1, styles.arsIconLayout]}
              contentFit="cover"
              source={getLogoPath(recentMatches4 ? recentMatches4.home_team : '')}
            />
          </View>
          <Image
            style={[styles.mciIcon1, styles.arsIconLayout]}
            contentFit="cover"
            source={getLogoPath(recentMatches4 ? recentMatches4.away_team : '')}
          />
        </View>
        <Text style={[styles.text17, styles.textTypo1]}>
        {awayOverallWinRate ? `${(awayOverallWinRate * 100).toFixed(2).padStart(5, '0')}%` : ''}
        </Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-2695.png")}
      />
      <Image
        style={[styles.matchChild1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-2695.png")}
      />
      <View style={[styles.parent, styles.groupFrameLayout]}>
        <Text style={[styles.text18, styles.textPosition]}>{recentMatches1 ? TeamKR[recentMatches1.home_team] : ''}</Text>
        <Text style={[styles.text19, styles.textPosition]}>{recentMatches1 ? TeamKR[recentMatches1.away_team] : ''}</Text>
        <Text style={[styles.text20, styles.textTypo3]}>
          <Text style={[styles.text20, styles.textTypo3]}>{recentMatches1 ? recentMatches1.date : ''}</Text></Text>
        <View style={[styles.rectangleParent, styles.frameChild1Layout]}>
          <View style={[styles.frameChild1, styles.frameChild1Layout]} />
          <Image
            style={[styles.frameChild2, styles.arsIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector-2690.png")}
          />
          <Text style={[styles.text21, styles.textTypo]}>{recentMatches1 ? recentMatches1.home_score : ''}</Text>
          <Text style={[styles.text22, styles.textTypo]}>{recentMatches1 ? recentMatches1.away_score : ''}</Text>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.groupFrameLayout]}>
        <View style={[styles.rectangleParent, styles.frameChild1Layout]}>
          <View style={[styles.frameChild1, styles.frameChild1Layout]} />
          <Image
            style={[styles.frameChild2, styles.arsIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector-2690.png")}
          />
          <Text style={[styles.text21, styles.textTypo]}>{recentMatches2 ? recentMatches2.home_score : ''}</Text>
          <Text style={[styles.text22, styles.textTypo]}>{recentMatches2 ? recentMatches2.away_score : ''}</Text>
        </View>
        <Text style={[styles.text20, styles.textTypo3]}>{recentMatches2 ? recentMatches2.date : ''}</Text>
        <Text style={[styles.text19, styles.textPosition]}>{recentMatches2 ? TeamKR[recentMatches2.away_team] : ''}</Text>
        <Text style={[styles.text18, styles.textPosition]}>{recentMatches2 ? TeamKR[recentMatches2.home_team] : ''}</Text>
      </View>
      <View style={[styles.group, styles.groupFrameLayout]}>
        <Text style={[styles.text19, styles.textPosition]}>{recentMatches3 ? TeamKR[recentMatches3.away_team] : ''}</Text>
        <Text style={[styles.text20, styles.textTypo3]}>{recentMatches3 ? recentMatches3.date : ''}</Text>
        <Text style={[styles.text18, styles.textPosition]}>{recentMatches3 ? TeamKR[recentMatches3.home_team] : ''}</Text>
        <View style={[styles.rectangleParent, styles.frameChild1Layout]}>
          <View style={[styles.frameChild1, styles.frameChild1Layout]} />
          <Image
            style={[styles.frameChild2, styles.arsIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector-2690.png")}
          />
          <Text style={[styles.text21, styles.textTypo]}>{recentMatches3 ? recentMatches3.home_score : ''}</Text>
          <Text style={[styles.text22, styles.textTypo]}>{recentMatches3 ? recentMatches3.away_score : ''}</Text>
        </View>
      </View>
      <View style={[styles.frameView, styles.groupFrameLayout]}>
        <Text style={[styles.text19, styles.textPosition]}>{recentMatches5 ? TeamKR[recentMatches5.away_team] : ''}</Text>
        <Text style={[styles.text20, styles.textTypo3]}>{recentMatches5 ? recentMatches5.date : ''}</Text>
        <Text style={[styles.text18, styles.textPosition]}>{recentMatches5 ? TeamKR[recentMatches5.home_team] : ''}</Text>
        <View style={[styles.rectangleParent, styles.frameChild1Layout]}>
          <View style={[styles.frameChild1, styles.frameChild1Layout]} />
          <Image
            style={[styles.frameChild2, styles.arsIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector-2690.png")}
          />
          <Text style={[styles.text21, styles.textTypo]}>{recentMatches5 ? recentMatches5.home_score : ''}</Text>
          <Text style={[styles.text22, styles.textTypo]}>{recentMatches5 ? recentMatches5.away_score : ''}</Text>
        </View>
      </View>
      <View style={[styles.frameContainer, styles.groupFrameLayout]}>
        <View style={[styles.rectangleParent, styles.frameChild1Layout]}>
          <View style={[styles.frameChild1, styles.frameChild1Layout]} />
          <Image
            style={[styles.frameChild2, styles.arsIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector-2690.png")}
          />
          <Text style={[styles.text21, styles.textTypo]}>{recentMatches4 ? recentMatches4.home_score : ''}</Text>
          <Text style={[styles.text22, styles.textTypo]}>{recentMatches4 ? recentMatches4.away_score : ''}</Text>
        </View>
        <Text style={[styles.text20, styles.textTypo3]}>{recentMatches4 ? recentMatches4.date : ''}</Text>
        <Text style={[styles.text19, styles.textPosition]}>{recentMatches4 ? TeamKR[recentMatches4.away_team] : ''}</Text>
        <Text style={[styles.text18, styles.textPosition]}>{recentMatches4 ? TeamKR[recentMatches4.home_team] : ''}</Text>
      </View>
    </View>
    </ScrollView>
  );
};

export default Dday;