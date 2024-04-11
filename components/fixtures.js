import React, { useState, useEffect } from 'react';
import { Image } from "expo-image";
import { ProgressBar } from "react-native-paper";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../style/fixtureStyle'; 
import { getWinRate } from '../DB/asset'; 
import { useNavigation } from "@react-navigation/native";

const MatchInformation = ({ startDate }) => {
  const [favoriteTeam, setFavoriteTeam] = useState(null);
  const [nextMatch, setNextMatch] = useState(null);
  const [daysDiff, setDaysDiff] = useState(0);
  const [hourDiff, setHourDiff] = useState(0);
  const [minutesDiff, setMinutesDiff] = useState(0);
  const [secondDiff, setSecondDiff] = useState(0);
  const [homeTeam, setHomeTeam] = useState(null);
  const [awayTeam, setAwayTeam] = useState(null);
  const [HomeTeamResult, setHomeTeamResult] = useState(null);
  const [AwayTeamResult, setAwayTeamResult] = useState(null);
  const [homeOverallWinRate, setHomeOverallWinRate] = useState(null);
  const [awayOverallWinRate, setAwayOverallWinRate] = useState(null);

  const navigation = useNavigation();

  const dday = () => {
      navigation.navigate('Dday');
  };


  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const clubLogos = {
    "Arsenal": require("../assets/ARS.png"),
    "Liverpool": require("../assets/LIV.png"),
    "Aston Villa": require("../assets/AVL.png"),
    "Manchester City": require("../assets/MCI.png"),
    "Tottenham Hotspur": require("../assets/TOT.png"),
    "Manchester United": require("../assets/MUN.png"),
    "West Ham United": require("../assets/WHU.png"),
    "Brighton & Hove Albion": require("../assets/BHA.png"),
    "Wolverhampton Wanderers": require("../assets/WOL.png"),
    "Newcastle United": require("../assets/NEW.png"),
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

   
      // Find matchNumber 1 and extract its startDate
      const nextMatch = data.find(match => match.matchNumber === 1);
      if (!nextMatch) {
        console.error("Next match not found");
        return;
      }
    
      const startDateString = nextMatch.startDate;
      // Splitting the date string into its components
      const [dateString, timeString] = startDateString.split(', ');
      const [month, day, year] = dateString.split('/');
      const [time, meridiem] = timeString.split(' ');

      // Parsing the date components
      let hours = parseInt(time.split(':')[0]);
      const minutes = parseInt(time.split(':')[1]);

      // Adjusting hours for PM times
      if (meridiem === 'PM' && hours < 12) {
        hours += 12;
    }
    if (meridiem === 'AM' && hours === 12) {
      hours = 0; // Midnight
    }

    // Constructing the Date object
    const startDate = new Date(year, month - 1, day, hours, minutes);

    setHomeTeamResult(data1.recentFormGuide.home_team);
    setAwayTeamResult(data1.recentFormGuide.away_team);

    console.log(homeOverallWinRate);
    
    // 홈 팀과 어웨이 팀을 설정
    setHomeTeam(nextMatch.homeTeam);
    setAwayTeam(nextMatch.awayTeam);

    // Function to update the timer every second
    const updateTimer = () => {
      const currentTime = new Date();
      // Calculate time difference
      const timeDiff = startDate - currentTime;
      const secDiff = Math.floor((timeDiff % (1000 * 60)) / 1000);
      const minDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const hourDiff = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      // Update state with calculated differences
      setDaysDiff(dayDiff < 10 ? `0${dayDiff}` : dayDiff.toString());
      setHourDiff(hourDiff < 10 ? `0${hourDiff}` : hourDiff.toString());
      setMinutesDiff(minDiff < 10 ? `0${minDiff}` : minDiff.toString());
      setSecondDiff(secDiff < 10 ? `0${secDiff}` : secDiff.toString());
    };

    // Update the timer initially
    updateTimer();

    // Update the timer every second
    setInterval(updateTimer, 1000);
  } catch (error) {
    console.error('Error fetching next match:', error);
  }
};
  
return (
  <View style={[styles.vectorParent]}>
    <View style={[styles.mainChild1, styles.mainChild1Position]}>
      <Text style={[styles.text]}>최근 경기</Text>
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={styles.textTypo3}>일</Text>
        <Text style={[styles.text2, styles.textTypo3]}>시</Text>
        <Text style={[styles.text2, styles.textTypo3]}>분</Text>
        <Text style={[styles.text2, styles.textTypo3]}>초</Text>
      </View>
      <Text style={[styles.text5, styles.textClr]}>
        {homeOverallWinRate ? `${(homeOverallWinRate * 100).toFixed(2).padStart(5, '0')}%` : '-'}
      </Text>
      <Text style={[styles.text6, styles.textClr1]}>
        {awayOverallWinRate ? `${(awayOverallWinRate * 100).toFixed(2).padStart(5, '0')}%` : '-'}
      </Text>
      <Image
        style={[styles.image538Icon, styles.iconPosition]}
        contentFit="cover"
        source={getLogoPath(homeTeam)}
      />
      <Image
        style={[styles.image539Icon, styles.iconPosition]}
        contentFit="cover"
        source={getLogoPath(awayTeam)}
      />
      {/* Home 5 */}
    {HomeTeamResult && (
      <View style={[styles.group, styles.groupParentPosition, { zIndex: 1 }]}>
        {HomeTeamResult.charAt(4) === "W" ? (
          <>
            <Text style={[styles.text9, styles.textPosition]}>승</Text>
            <View style={[styles.groupInner, styles.groupLayout]} />
          </>
        ) : HomeTeamResult.charAt(4) === "D" ? (
          <>
            <Text style={[styles.text7, styles.textPosition]}>무</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        ) : (
          <>
            <Text style={[styles.text7, styles.textPosition]}>패</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        )}
      </View>
    )}
      {/* Home 4 */}
      {HomeTeamResult && (    
      <View style={[styles.container, styles.groupParentPosition]}>
        {HomeTeamResult.charAt(3) === "W" ? (
          <>
            <Text style={[styles.text9, styles.textPosition]}>승</Text>
            <View style={[styles.groupInner, styles.groupLayout]} />
          </>
        ) : HomeTeamResult.charAt(3) === "D" ? (
          <>
            <Text style={[styles.text7, styles.textPosition]}>무</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        ) : (
          <>
            <Text style={[styles.text7, styles.textPosition]}>패</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        )}
      </View>
    )}
      {/* Home 3 */}   
      {HomeTeamResult && (           
      <View style={[styles.groupView, styles.groupParentPosition]}>
        {HomeTeamResult.charAt(2) === "W" ? (
          <>
            <Text style={[styles.text9, styles.textPosition]}>승</Text>
            <View style={[styles.groupInner, styles.groupLayout]} />
          </>
        ) : HomeTeamResult.charAt(2) === "D" ? (
          <>
            <Text style={[styles.text7, styles.textPosition]}>무</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        ) : (
          <>
            <Text style={[styles.text7, styles.textPosition]}>패</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        )}
      </View>
    )}
      {/* Home 2 */}   
      {HomeTeamResult && (          
      <View style={[styles.parent1, styles.groupParentPosition]}>
        {HomeTeamResult.charAt(1) === "W" ? (
          <>
            <Text style={[styles.text9, styles.textPosition]}>승</Text>
            <View style={[styles.groupInner, styles.groupLayout]} />
          </>
        ) : HomeTeamResult.charAt(1) === "D" ? (
          <>
            <Text style={[styles.text7, styles.textPosition]}>무</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        ) : (
          <>
            <Text style={[styles.text7, styles.textPosition]}>패</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        )}
      </View>
    )}
      {/* Home 1 */}   
      {HomeTeamResult && (    
      <View style={[styles.groupWrapper, styles.groupParentPosition]}>
        <View style={styles.parent2}>
        {HomeTeamResult.charAt(0) === "W" ? (
          <>
            <Text style={[styles.text9, styles.textPosition]}>승</Text>
            <View style={[styles.groupInner, styles.groupLayout]} />
          </>
        ) : HomeTeamResult.charAt(0) === "D" ? (
          <>
            <Text style={[styles.text7, styles.textPosition]}>무</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        ) : (
          <>
            <Text style={[styles.text7, styles.textPosition]}>패</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        )}
      </View>
      </View>
    )}
      {/* Away 1 */}   
      {AwayTeamResult && (        
      <View style={[styles.parent3, styles.groupParentPosition]}>
        {AwayTeamResult.charAt(0) === "W" ? (
          <>
            <Text style={[styles.text9, styles.textPosition]}>승</Text>
            <View style={[styles.groupInner, styles.groupLayout]} />
          </>
        ) : AwayTeamResult.charAt(0) === "D" ? (
          <>
            <Text style={[styles.text7, styles.textPosition]}>무</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        ) : (
          <>
            <Text style={[styles.text7, styles.textPosition]}>패</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        )}
      </View>
    )}
      {/* Away 2 */}   
      {AwayTeamResult && (         
      <View style={[styles.parent4, styles.groupParentPosition]}>
        {AwayTeamResult.charAt(1) === "W" ? (
          <>
            <Text style={[styles.text9, styles.textPosition]}>승</Text>
            <View style={[styles.groupInner, styles.groupLayout]} />
          </>
        ) : AwayTeamResult.charAt(1) === "D" ? (
          <>
            <Text style={[styles.text7, styles.textPosition]}>무</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        ) : (
          <>
            <Text style={[styles.text7, styles.textPosition]}>패</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        )}
      </View>
    )}
      {/* Away 3 */}   
      {AwayTeamResult && (         
      <View style={[styles.parent5, styles.groupParentPosition]}>
        {AwayTeamResult.charAt(2) === "W" ? (
          <>
            <Text style={[styles.text9, styles.textPosition]}>승</Text>
            <View style={[styles.groupInner, styles.groupLayout]} />
          </>
        ) : AwayTeamResult.charAt(2) === "D" ? (
          <>
            <Text style={[styles.text7, styles.textPosition]}>무</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        ) : (
          <>
            <Text style={[styles.text7, styles.textPosition]}>패</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        )}
      </View>
    )}
      {/* Away 4 */}   
      {AwayTeamResult && (          
      <View style={[styles.parent6, styles.groupParentPosition]}>
        {AwayTeamResult.charAt(3) === "W" ? (
          <>
            <Text style={[styles.text9, styles.textPosition]}>승</Text>
            <View style={[styles.groupInner, styles.groupLayout]} />
          </>
        ) : AwayTeamResult.charAt(3) === "D" ? (
          <>
            <Text style={[styles.text7, styles.textPosition]}>무</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        ) : (
          <>
            <Text style={[styles.text7, styles.textPosition]}>패</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        )}
      </View>
    )}
      {/* Away 5 */}   
      {AwayTeamResult && (        
      <View style={[styles.groupContainer, styles.groupParentPosition]}>
        <View style={styles.parent2}>
        {AwayTeamResult.charAt(4) === "W" ? (
          <>
            <Text style={[styles.text9, styles.textPosition]}>승</Text>
            <View style={[styles.groupInner, styles.groupLayout]} />
          </>
        ) : AwayTeamResult.charAt(4) === "D" ? (
          <>
            <Text style={[styles.text7, styles.textPosition]}>무</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        ) : (
          <>
            <Text style={[styles.text7, styles.textPosition]}>패</Text>
            <View style={[styles.groupChild, styles.groupLayout]} />
          </>
        )}
      </View>
      </View>
    )}
      <Image
        style={[styles.frameItem, styles.framePosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-901.png")}
      />
      <Image
        style={[styles.frameInner, styles.framePosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-901.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChild7Layout]}>
        {startDate && isToday(startDate) && (
          <>
            <View style={[styles.groupChild7, styles.groupChild7Layout]} />
            <Text style={[styles.text17, styles.textClr]}>오늘</Text>
          </>
        )}
      </View>
      <View style={[styles.frameView, styles.parentPosition]}>
      <Text style={styles.text18}>{daysDiff}</Text>
        <Text style={[styles.text19]}>{hourDiff}</Text>
        <Text style={[styles.text20]}>{minutesDiff}</Text>
        <Text style={[styles.text21]}>{secondDiff}</Text>
      </View>
      <View style={[styles.parent8, styles.parentPosition]}>
        <Text style={[styles.text22, styles.textTypo1]}>:</Text>
        <Text style={[styles.text23, styles.textTypo1]}>:</Text>
        <Text style={[styles.text23, styles.textTypo1]}>:</Text>
      </View>
      <View style={styles.frameChild1} />
      <TouchableOpacity onPress={dday}>
      <View style={styles.image505Icon}>
      </View></TouchableOpacity>
      <Text style={[styles.vs, styles.textClr]}>VS</Text>
      <View style={[styles.wrapper, styles.frameLayout]}>
        <ProgressBar
          style={[styles.progressbar, styles.frameLayout]}
          progress={awayOverallWinRate ? awayOverallWinRate : 0}
          color="#ED1B58"
        />
      </View>
      <View style={[styles.frame, styles.frameLayout]}>
        <ProgressBar
          style={[styles.progressbar1, styles.frameLayout]}
          progress={homeOverallWinRate ? homeOverallWinRate : 0}
          color="#0093FF"
        />
      </View>
    </View>
  </View>
);
}

export default MatchInformation