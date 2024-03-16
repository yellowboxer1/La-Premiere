import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, Image, FlatList, Modal } from "react-native";
import { Switch } from "react-native-paper";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

// Fetch match info function
const fetchMatchInfo = async (date) => {
  try {
    const response = await fetch(`http://118.67.143.125:8000/match_info/${date}`);
    const matchResults = await response.json();
    return matchResults;
  } catch (error) {
    throw new Error(`Error fetching match info: ${error.message}`);
  }
};

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

  // Add console log to verify data
  useEffect(() => {
    fetchMatchInfo(formatDateForURL(DisplayedDate))
      .then((data) => {
        console.log("Fetched data:", data); // Log fetched data
        setMatchInfo(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Log any errors
      });
  }, [DisplayedDate]);

  return (
    <View style={styles.container}>
      <Text style={[styles.text2, { zIndex: 1 }]}>
        {formatDate(DisplayedDate)}
      </Text>
      <FlatList
        style={styles.flatList}
        horizontal={true}
        data={matchInfo && matchInfo.matches ? matchInfo.matches : []}
        renderItem={({ item }) => (
          <View style={[styles.mainItem]}>
            <View style={[styles.mainChildBg]}>    
              <Image
                style={[styles.image510Icon, styles.iconLayout3]}
                source={require("../assets/image-510.png")}
              />
              <Text style={[styles.shu, styles.shuTypo, { opacity: 0.9 }]}>
                {item.home_team}
              </Text>
              <Image
                style={[styles.image511Icon, styles.iconLayout3]}
                source={require("../assets/image-511.png")}
              />
              <Text style={[styles.ars, styles.shuTypo]}>
                {item.away_team}
              </Text>
              <View style={[styles.mainChild6, styles.childLayout]} />
              <Text style={styles.text5}>{item.match_time}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={[styles.nomatch, { zIndex: 2 }]}>
            예정된 경기가 없습니다
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
      />
      <View style={[styles.groupItem, styles.mainItemBg]} />
      <View style={[styles.groupInner, styles.mainItemBg]} />
      <View style={[styles.mainChild, styles.mainChildBg]} />
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
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: "#ccc",
  },
  flatList: {
    flexGrow: 1,
  },
  iconLayout4: {
    height: 41,
    left: 2,
    width: 371,
    position: "absolute",
  },
  mainChildBg: {
    backgroundColor: Color.colorDarkslategray,
    left: 2,
    width: 371,
  },
  textPosition1: {
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

  textLayout2: {
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  mainChildLayout1: {
    height: 12,
    width: 6,
    position: "absolute",
  },
  rectangleLayout: {
    width: 26,
    top: 72,
    height: 26,
    position: "absolute",
  },
  instanceLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout3: {
    height: 20,
    position: "absolute",
  },
  text4Layout: {
    width: 30,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  image532Icon: {
    top: 25,
  },
  mainChild: {
    top: 67,
    height: 36,
    position: "absolute",
  },
  mainItem: {
    top: 104,
    height: 43,
    position: "absolute",
  },
  mainItemBg: {
    backgroundColor: Color.colorDarkslategray,
    width: 371,
    position: "absolute",
  },
  text: {
    width: 74,
    top: 40,
    height: 16,
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    lineHeight: 18,
    marginLeft: -171.5,
  },
  text1: {
    marginLeft: 53.5,
    fontWeight: "300",
    fontFamily: FontFamily.notoSansLight,
    color: Color.colorLightsteelblue_100,
    height: 16,
    textAlign: "left",
    left: "50%",
    position: "absolute",
    width: 74,
    top: 36,
  },
  text2: {
    marginLeft: -78,
    top: 77,
    width: 140,
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    height: 16,
    textAlign: "left",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  text4: {
    marginLeft: -16,
    top: -1,
    height: 16,
    textAlign: "center",
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    left: "52%",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
  },
  text5: {
    marginLeft: -18.5,
    fontSize: FontSize.size_smi,
    lineHeight: 13,
    top: 121,
    textAlign: "center",
    fontFamily: FontFamily.notoSansMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  shuTypo: {
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    top: 100,
    width: 30,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    height: 16,
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  nomatch: {
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    top:121,
    width: 200,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    height: 16,
    color: Color.colorWhite,
    left: "21%",
    position: "absolute",
  },
  instanceChild: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
  instanceChild1: {
    right: "36.54%",
    left: "42.31%",
    bottom: "28.85%",
    top: "26.92%",
    width: "21.15%",
    height: "44.23%",
    maxWidth: "100%",
  },
  shu: {
    marginLeft: -96.5,
  },
  instanceItem: {
    right: "40.38%",
    left: "38.46%",
    bottom: "28.85%",
    top: "26.92%",
    width: "21.15%",
    height: "44.23%",
    maxWidth: "100%",
  },
  image510Icon: {
    left: 129,
    width: 20,
    top: 118,
    height: 20,
  },
  image511Icon: {
    left: 227,
    width: 17,
    top: 118,
    height: 20,
  },
  mainChild6: {
    top: 114,
    left: 159,
    width: 55,
    height: 27,
    backgroundColor: Color.colorGray_200,
  },
  ars: {
    marginLeft: 63.5,
  },
  mainChild5: {
    top: 77,
    left: 248,
    backgroundColor: '#FF4438',
    width: 40,
    height: 18,
    borderRadius: 10,
    position: "absolute",
  },
  vectorIcon: {
    top: 41,
    left: 94,
  },
  groupItem: {
    height: 26,
    borderRadius: Border.br_8xs,
    top: 30,
    left: 2,
  },
  groupInner: {
    top: 39,
    height: 26,
    left: 2,
  },
  rectangleGroup: {
    height: 26,
    left: 15,
    width: 26,
    top: 72,
  },
  rectangleContainer: {
    left: 322,
    height: 26,
    width: 26,
    top: 72,
  },
  component8: {
    top: 34,
    left: 321,
    width: 41,
    height: 23,
    position: "absolute",
  },
});

export default MatchInfo;
