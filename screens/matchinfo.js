import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { width, height, Color, FontFamily, FontSize } from "../GlobalStyles";
import DatePicker from '../components/datePicker';
import { useNavigation } from "@react-navigation/native";

const formatDate = (date) => {
  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const dayIndex = date.getDay();
  const dayName = dayNames[dayIndex];
  const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  return `${date.getFullYear()}년 ${months[date.getMonth()]} ${date.getDate()}일 (${dayName})`;
};

const formatDateForURL = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const MatchInfo1 = () => {
  const [DisplayedDate, setDisplayedDate] = useState(new Date());
  const [matchInfo, setMatchInfo] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [matches, setMatches] = useState([]);
  const [favoriteTeam, setFavoriteTeam] = useState(null);
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

  const navigation = useNavigation();

  const main = () => {
      navigation.navigate('MainScreen');
  };

  const favor = {
    "아스널 FC": "아스널",
    "리버풀 FC": "리버풀",
    "맨체스터 시티": "맨시티",
    "애스턴 빌라": "애스턴빌라",
    "토트넘 홋스퍼": "토트넘",
    "맨체스터 유나이티드": "맨유",
    "웨스트 햄": "웨스트햄",
    "브라이튼": "브라이튼",
    "울브스": "울버햄튼",
    "뉴캐슬": "뉴캐슬",
    "첼시 FC": "첼시",
    "풀럼": "풀럼",
    "AFC 본머스": "본머스",
    "크리스탈 팰리스": "팰리스",
    "브랜트퍼드": "브렌트퍼드",
    "에버턴": "에버턴",
    "노팅엄 포레스트": "노팅엄",
    "루턴타운": "루턴",
    "번리": "번리",
    "셰필드": "셰필드",
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get favorite team from AsyncStorage
        const selectedTeam = await AsyncStorage.getItem('selectedTeam');
        if (selectedTeam) {
          // 매핑된 축약 이름 가져오기
          const favoriteTeamAbbr = favor[selectedTeam];
          if (favoriteTeamAbbr) {
            // Set the state value using setFavoriteTeam
            setFavoriteTeam(favoriteTeamAbbr);
            // No need to fetch next match for the favorite team
            // await fetchNextMatch(favoriteTeamAbbr); // Remove this line
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [setFavoriteTeam]);


  const handleSetDate = (selectedDate) => {
    console.log("Selected Date:", selectedDate); // Add this line for debugging
    const dateObject = new Date(selectedDate); // Convert selectedDate to a Date object
    setDisplayedDate(dateObject); // Set the displayed date
    setDate(formatDateForURL(dateObject)); // Format the date for the URL
  }

  const clubLogos = {
    "아스널": require("../assets/ARS.png"),
    "리버풀": require("../assets/LIV.png"),
    "애스턴빌라": require("../assets/AVL.png"),
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
    "브렌트퍼드": require("../assets/BRE.png"),
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
  

  const clubMappings = {
    "아스널": "아스널",
    "리버풀": "리버풀",
    "맨시티": "맨시티",
    "애스턴빌라": "빌라",
    "토트넘": "토트넘",
    "맨유": "맨유",
    "웨스트햄": "웨스트햄",
    "브라이턴": "브라이턴",
    "울버햄튼": "울브스",
    "뉴캐슬": "뉴캐슬",
    "첼시": "첼시",
    "풀럼": "풀럼",
    "본머스": "본머스",
    "팰리스": "팰리스",
    "브렌트퍼드": "브랜트퍼드",
    "에버턴": "에버턴",
    "노팅엄": "노팅엄",
    "루턴": "루턴",
    "번리": "번리",
    "셰필드": "셰필드",
};

  // Add console log to verify data
  useEffect(() => {
    setLoading(true);
    const date = formatDateForURL(DisplayedDate);
    console.log("Fetching data for date:", date);
    fetch(`http://118.67.143.125:8000/match_info/${date}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        // If the response is not OK, return an empty object
        return {};
      }
    })
    .then(result => {
      // Update matches state with fetched data
      setMatchInfo(result);
      setMatches(result.matches || []); // Use an empty array if no matches are available
      setLoading(false);
    })
    .catch(error => {
      console.error('Error:', error);
      setMatchInfo({});
      setMatches([]); // Update matches state with an empty array
      setLoading(false);
    });
  }, [date]);


  return (
  <ScrollView style={{ height: height * 431 + matches.length * 106 }}>
      <View style={[styles.matchInfo1]}>
    <ScrollView>
    <View style={styles.datePickerContainer}>
    <View style={[styles.groupItem, styles.groupBg]} />
      <DatePicker setDate={handleSetDate} />
      </View>
      </ScrollView>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleWrapper, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.text}>경기 일정</Text>
        </View>
        <Pressable style = {styles.back1} onPress={main}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/vector-26822.png")}
        />
        </Pressable>
      </View>
      <Text style={styles.text1}>팔로우한 경기</Text>
      <Text style={styles.text2}>오늘 경기</Text>
      <Image
        style={[styles.heartIcon, styles.totIconLayout]}
        contentFit="cover"
        source={require("../assets/heart2.png")}
      />
      <View style={[styles.matchInfo1Inner, styles.groupItemLayout]}>
      </View>

      <View style={[styles.rectangleParent, styles.groupLayout]}>
      {loading ? (
  <Text style={styles.text3}>로딩 중...</Text>
) : matches.length > 0 ? (
  matches.map((match, index) => {
    const matchId = match.id || index; // Use index as fallback if id is missing

    // Determine if the home team or away team is the favorite team
    const isHomeTeamFavorite = match.home_team === favoriteTeam;
    const isAwayTeamFavorite = match.away_team === favoriteTeam;
    
    return (
      // Render the match only if neither home team nor away team is the favorite
      (isHomeTeamFavorite || isAwayTeamFavorite) ? (
        <View style={[styles.groupInner, styles.groupLayout]} key={matchId}>
          <View style={[styles.parent, styles.parentLayout]} key={`${matchId}_inner`}>
            <Text style={[styles.text4, styles.textTypo1]}>{match.home_team}</Text>
            <Text style={[styles.text5, styles.textTypo1]}>{match.away_team}</Text>
            <View style={[styles.tot, styles.totIconLayout]} key={`${matchId}_tot`}>
              <View style={[styles.tot, styles.totIconLayout]} />
              <Image
                style={[styles.totIcon, styles.totIconLayout]}
                contentFit="cover"
                source={getLogoPath(match.home_team)}
              />
            </View>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={getLogoPath(match.away_team)}
              key={`${matchId}_icon`}
            />
            <Text style={[styles.text6, styles.textTypo1]}>{match.match_time}</Text>
            {match.home_score !== 'N/A' && (
              <Text style={[styles.text7, styles.textTypo]} key={`${matchId}_home_score`}>{match.home_score}</Text>
            )}
            {match.away_score !== 'N/A' && (
              <Text style={[styles.text8, styles.textTypo]} key={`${matchId}_away_score`}>{match.away_score}</Text>
            )}
            <View style={[styles.vectorIcon, styles.parentLayout]} key={`${matchId}_vectorIcon`}>
            </View>
          </View>
        </View>
      ) :     
      <View style={[styles.groupInner, styles.groupLayout]} key={`${matchId}_no_match`}>
        <Text style={styles.text3}>예정된 경기가 없습니다</Text>
      </View>
    );
  })
) : (
  <View style={[styles.groupInner, styles.groupLayout]} key="no_matches">
    <Text style={styles.text3}>예정된 경기가 없습니다</Text>
  </View>
)}
</View>

<View style={[styles.rectangleGroup, styles.groupLayout]}>
  {loading ? (
    <Text style={styles.text3}>로딩 중...</Text>
  ) : matches.length > 0 ? (
    matches.map((match, index) => (
        <View style={[styles.parent, styles.parentLayout, { zIndex: 1, marginTop: index * height * 106 }]} key={`${match.match_id}_inner`}>
          <Text style={[styles.text4, styles.textTypo1, {zIndex : 300}]}>{match.home_team}</Text>
          <Text style={[styles.text5, styles.textTypo1]}>{match.away_team}</Text>
          <View style={[styles.tot, styles.totIconLayout]} key={`${match.match_id}_tot`}>
            <View style={[styles.tot, styles.totIconLayout]} />
            <Image
              style={[styles.totIcon, styles.totIconLayout]}
              resizeMode="cover"
              source={getLogoPath(match.home_team)}
            />
          </View>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={getLogoPath(match.away_team)}
            key={`${match.match_id}_icon`}
          />
          <Text style={[styles.text6, styles.textTypo1]}>{match.match_time}</Text>
          {match.home_score !== 'N/A' && (
            <Text style={[styles.text7, styles.textTypo]} key={`${match.match_id}_home_score`}>{match.home_score}</Text>
          )}
          {match.away_score !== 'N/A' && (
            <Text style={[styles.text8, styles.textTypo]} key={`${match.match_id}_away_score`}>{match.away_score}</Text>
          )}
          <View style={[styles.vectorIcon, styles.parentLayout]} key={`${match.match_id}_vectorIcon`}>
          </View>
        </View>
    ))
  ) : (
    <View style={[styles.groupInner, styles.groupLayout]} key="no_matches">
      <Text style={styles.text3}>예정된 경기가 없습니다</Text>
    </View>
  )}
</View>
  {loading ? (
    <Text style={styles.text3}>로딩 중...</Text>
  ) : matches.length > 0 ? (
    matches.map((match, index) => (
      <View style={[styles.back, { zIndex: -9999, marginTop: index * height * 106 }]} key={`${match.match_id}_groupinner`}>
        {/* Additional components */}
      </View>
    ))
  ) : null}
  </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  matchInfo1: {
    backgroundColor: Color.colorGray_100,
    width: "100%",
    minHeight: height * 1488 ,
    maxHeight: height * 1488, // Adjust as needed
    overflow: "auto",
  },
  scrollView: {
    overflow: 'scroll', // Enable scrolling behavior
    position: "absolute",
    zIndex: 5
    // Add any additional styles as needed
  },
  container: {
    flex:1,
    backgroundColor: "rgb(47, 54, 61)",
  },
  groupChildLayout: {
    width: width * 32,
    top: 0,
    height: height * 32,
    position: "absolute",
  },
  totIconLayout: {
    height: height * 24,
    position: "absolute",
  },
  groupItemLayout: {
    height: height * 77,
    width: width * 375,
    left: 0,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.colorDarkslategray,
    top: height * -110,
  },
  groupLayout: {
    height: height * 105,
    width: width * 375,
    left: 0,
    zIndex: 0,
    position: "absolute",
  },
  parentLayout: {
    height: height * 62,
    zIndex: 200,
    position: "absolute",
  },
  textTypo1: {
    height: height * 18,
    fontFamily: FontFamily.notoSansRegular,
    lineHeight: height * 17,
    letterSpacing: width * 0.2,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorWhite,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    width: width * 19,
    marginLeft: width * 55.5,
    height: height * 18,
    lineHeight: height * 17,
    letterSpacing: width * 0.2,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    left: 0,
  },
  back: {
    top: height * 428,
    backgroundColor: Color.colorDarkslategray,
    height: height * 105,
    width: width * 375,
    left: 0,
    zIndex: 0,
    position: "absolute",
  },
  rectangleWrapper: {
    left: width * 12,
  },
  text: {
    fontSize: FontSize.size_lg,
    letterSpacing: width * -0.4,
    lineHeight: height * 22,
    width: width * 80,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
  },
  wrapper: {
    marginLeft: width * -37.5,
    top: height * -5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    top: height * 0,
    left: width * 25,
    width: width * 7,
    height: height * 13,
    position: "absolute",
  },
  groupParent: {
    top: height * 72,
    height: height * 32,
    width: width * 375,
    left: 0,
    position: "absolute",
  },
  text1: {
    top: height * 228,
    left: width * 35,
    width: width * 120,
    lineHeight: height * 18,
    letterSpacing: width * -0.3,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text2: {
    top: height * 393,
    textAlign: "left",
    left: width * 15,
    width: width * 120,
    lineHeight: height * 18,
    letterSpacing: width * -0.3,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  heartIcon: {
    top: height * 223,
    width: width * 24,
    height: height * 24,
    left: width * 15,
  },
  groupItem: {
    height: height * 204,
    width: width * 375,
    left: 0,
    position: "absolute",
  },
  matchInfo1Inner: {
    top: height * 118,
  },
  groupInner: {
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    backgroundColor: Color.colorDarkslategray,
    top: 0,
  },
  text3: {
    marginLeft: width * -167.5,
    width: width * 223,
    height: height * 31,
    fontFamily: FontFamily.notoSansRegular,
    lineHeight: height * 17,
    letterSpacing: width * 0.2,
    fontSize: FontSize.size_mini,
    top: height * 45,
    textAlign: "left",
    color: Color.colorWhite,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  text4: {
    width: width * 108,
    marginLeft: width * -129.5,
    height: height * 15,
    top: height * 5,
  },
  text5: {
    top: height * 42,
    width: width * 108,
    marginLeft: width * -129.5,
    height: height * 15,
  },
  tot: {
    width: width * 24,
    height: height * 24,
    top: 0,
    left: 0,
  },
  totIcon: {
    left: width * 0,
    width: width * 24,
    top: 0,
  },
  icon: {
    top: height * 37,
    height: height * 24,
    width: width * 24,
    left: 0,
    position: "absolute",
  },
  text6: {
    marginLeft: width * 114.5,
    top: height * 22,
    width: width * 52,
    height: height * 15,
  },
  text7: {
    top: height * 5,
  },
  text8: {
    top: height * 42,
  },
  vectorIcon: {
    left: width * 245,
    width: width * 1,
    height: height * 61.5,
    backgroundColor: "#57575E",
    top: 0,
    zIndex : 999
  },
  parent: {
    marginLeft: width * -169.5,
    top: height * 21,
    width: width * 333,
    left: "50%",
    height: height * 62,
  },
  rectangleParent: {
    top: height * 265,
    zIndex : 20,
  },
  rectangleGroup: {
    top: height * 430,
    zIndex: 9999,
  },
  back1: {
    position: "absolute",
    width : width * 50,
    height : height * 50,
    color: Color.colorWhite,
    top : height * 0,
    left: width * 0,
},
  datePickerContainer: {
    marginVertical: width * 5, // Adjust margin as needed
    paddingHorizontal: height * 3, // Adjust padding as needed
    marginTop: height * 110,
    zIndex : 1
  },
});

export default MatchInfo1;
