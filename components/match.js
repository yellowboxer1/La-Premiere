import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import { View, Text, Pressable, ActivityIndicator, FlatList, TouchableOpacity  } from "react-native";
import { Switch } from "react-native-paper";
import { styles } from '../style/MatchStyles'; // Import styles from MatchInfoStyles.js
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

const MatchInfo = () => {
  const [DisplayedDate, setDisplayedDate] = useState(new Date());
  const [matchInfo, setMatchInfo] = useState(null);
  const [component8Value, setComponent8Value] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const navigation = useNavigation();

  const MatchInfo1 = () => {
      navigation.navigate('MatchInfo1');
  };
  
  const handlePress1 = () => {
    const newDate = new Date(DisplayedDate);
    newDate.setDate(newDate.getDate() - 1);
    setDisplayedDate(newDate);
  };

  const handlePress2 = () => {
    const newDate = new Date(DisplayedDate);
    newDate.setDate(newDate.getDate() + 1);
    setDisplayedDate(newDate);
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
    fetch(`http://118.67.143.125:8000/match_info/${date}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(result => {
        setMatchInfo(result);
        setLoading(false);
      })
        .catch(error => {
          console.error('Error:', error);
          setMatchInfo({});
          setLoading(false);
        });
  }, [DisplayedDate]);

  return (
    <View style={styles.container}>
      <Text style={[styles.text2, { zIndex: 1 }]}>
        {formatDate(DisplayedDate)}
      </Text>
      {loading ? (
  <ActivityIndicator size="large" color="#0000ff" />
) : matchInfo && matchInfo.matches && matchInfo.matches.length > 0 ? (
  <FlatList
    data={matchInfo.matches}
    keyExtractor={(item, index) => index.toString()}
    horizontal
    contentContainerStyle={{ flexGrow: 1 }}
    renderItem={({ item, index }) => {
      const away_team1 = clubMappings[item.away_team];
      const home_team1 = clubMappings[item.home_team];

      return (
        <TouchableOpacity
        key={item.match_id}
        onPress={MatchInfo1} // MatchInfo1 스크린으로 이동하는 함수 호출
      >
          {index === 0 || matchInfo.matches[index - 1].match_id !== item.match_id ? (
            <View style={[styles.rec1, { zIndex: -1 }]}>
              <Text style={styles.headerText}>{item.match_id}</Text>
            </View>
          ) : null}
          <Image
            style={[styles.image510Icon, styles.iconLayout3]}
            source={getLogoPath(item.home_team)} // Use source instead of {clubData[0].logo}
            contentFit="cover"
          />
          <Text style={[styles.shuTypo, { opacity: 1.0 }]}>
            {home_team1}
          </Text>
          <Image
            style={[styles.image511Icon, styles.iconLayout3]}
            source={getLogoPath(item.away_team)} // Use source instead of {clubData[0].logo}
            contentFit="cover"
          />
          <Text style={[styles.arsTypo, { opacity: 1.0 }]}>
            {away_team1}
          </Text>
          {item.home_score !== "N/A" && component8Value ? ( // Check if home_score is not "N/A" and Switch is OFF
            <>
              <View style={[styles.mainChild6, styles.childLayout, { zIndex: 1 }]} />
              <Text style={styles.sc1}>{item.home_score}</Text>
              <Text style={styles.sc2}>{item.away_score}</Text>
              <Image
              style={[styles.line, { zIndex: 1 }]} // Adjust zIndex here
              source={require("../assets/line.png")}
            />
          </>
        ) : (
            <>
              <View style={[styles.mainChild6, styles.childLayout]} />
              <Text style={styles.text5}>{item.match_time}</Text>
            </>
          )}
            </TouchableOpacity>
      );
    }}
  />
) : (
        <View>
        <View style={[styles.rec1, { zIndex: -1 }]}>
        </View>
        <Text style={[styles.nomatch, { zIndex: 2 }]}>
          예정된 경기가 없습니다
        </Text>
      </View>
    )}
      <View style={[styles.groupItem, styles.mainItemBg]} />
      <View style={[styles.groupInner, styles.mainItemBg]} />
      <View style={[styles.mainChild, styles.mainChildBg]} />
      <TouchableOpacity style={[styles.navi1, styles.naviBg]} onPress={MatchInfo1}>
    </TouchableOpacity>
      <Text style={[styles.text, styles.textPosition1]}>경기 일정</Text>
      <Text style={[styles.text1, styles.textLayout2]}>스포일러 방지</Text>
      <Pressable style={[styles.rectangleGroup, styles.rectangleLayout]} onPress={handlePress1}>
        <View style={[styles.instanceChild, styles.childLayout]} />
        <Image
          style={[styles.instanceItem, styles.instanceLayout]}
          source={require("../assets/vector-26831.png")}
        />
      </Pressable>
      <Pressable style={[styles.rectangleContainer, styles.rectangleLayout]} onPress={handlePress2}>
        <View style={[styles.instanceChild, styles.childLayout]} />
        <Image
          style={[styles.instanceChild1, styles.instanceLayout]}
          source={require("../assets/vector-2684.png")}
        />
      </Pressable>

      {isToday(DisplayedDate) && (
        <View style={styles.mainChild5}>
          <Text style={[styles.text4, styles.text4Layout]}>오늘</Text>
        </View>
      )}
      <Image
        style={[styles.vectorIcon, styles.mainChildLayout1]}
        source={require("../assets/vector-2682.png")}
      />
      <Switch
        style={styles.component8}
        value={component8Value}
        onValueChange={setComponent8Value}
      />
    </View>
  );
};

export default MatchInfo;