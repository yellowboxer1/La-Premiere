import { StyleSheet } from 'react-native';
import { width, height, Color, FontSize, FontFamily, Border } from '../GlobalStyles';

export const styles = StyleSheet.create({
    container: {
        position: "absolute", 
        height: 200,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "flex-start"
    },
    iconLayout4: {
      height: height * 41,
      left: width * 2,
      width: width * 371,
      position: "absolute",
    },
    mainChildBg: {
      backgroundColor: Color.colorDarkslategray,
      left: width * 2,
      width: width * 371,
    },
    textPosition1: {
      marginLeft: width * -164.5,
      height: height * 17,
      width: width * 74,
      textAlign: "left",
      color: Color.colorWhite,
      fontFamily: FontFamily.notoSansSemiBold,
      fontWeight: "600",
      lineHeight: height * 18,
      fontSize: FontSize.size_base,
      left: "50%",
      position: "absolute",
    },
  
    textLayout2: {
      lineHeight: height * 16,
      fontSize: FontSize.size_xs,
    },
    mainChildLayout1: {
      height: height * 12,
      width: width * 7,
      position: "absolute",
    },
    rectangleLayout: {
      width: width * 26,
      top: height * 72,
      height: height * 26,
      position: "absolute",
    },
    instanceLayout: {
      maxHeight: "100%",
      maxWidth: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    iconLayout3: {
      height: width * 20,
      position: "absolute",
    },
    text4Layout: {
      width: width * 30,
      position: "absolute",
    },
    childLayout: {
      borderRadius: Border.br_9xs,
      position: "absolute",
    },
    image532Icon: {
      top: height * 25,
    },
    mainChild: {
      top: height * 67,
      height: height * 36,
      position: "absolute",
    },
    mainItem: {
      top: height * 104,
      height: height * 43,
      position: "absolute",
    },
    mainItemBg: {
      backgroundColor: Color.colorDarkslategray,
      width: width * 371,
      position: "absolute",
    },
    text: {
      width: width * 74,
      top: height * 40,
      height: height * 16,
      color: Color.colorWhite,
      fontFamily: FontFamily.notoSansSemiBold,
      fontWeight: "600",
      fontSize: FontSize.size_base,
      lineHeight: height * 18,
      marginLeft: width * -171.5,
    },
    text1: {
      fontWeight: '300',
      fontFamily: FontFamily.notoSansLight,
      color: Color.colorLightsteelblue_100,
      height: height * 16,
      textAlign: "left",
      left: width * 241,
      position: "absolute",
      width: width * 76,
      top: height * 38,
    },
    text2: {
      marginLeft: "27.5%",
      top: height * 77,
      width: width * 116,
      fontFamily: FontFamily.notoSansMedium,
      fontWeight: "500",
      lineHeight: height * 17,
      fontSize: FontSize.size_sm,
      height: height * 16,
      textAlign: "center",
      color: Color.colorWhite,
      alignItems: 'center',
      position: "absolute",
    },
    text4: {
      marginLeft: width * -16,
      top: height * 0,
      height: height * 16,
      textAlign: "center",
      fontFamily: FontFamily.notoSansMedium,
      fontWeight: "500",
      left: "52%",
      lineHeight: height * 16,
      fontSize: FontSize.size_xs,
      color: Color.colorWhite,
    },
    text5: {
      width : width * 38,
      fontSize: FontSize.size_smi,
      lineHeight: height * 16,
      top: height * 119,
      textAlign: "center",
      fontFamily: FontFamily.notoSansMedium,
      fontWeight: "500",
      color: Color.colorWhite,
      left: width * 164,
      opacity: 0.9,
      position: "absolute",
      zIndex: width * 5
    },
    sc1: {
        width : width * 38,
        fontSize: FontSize.size_smi,
        lineHeight: height * 16,
        top: height * 119,
        textAlign: "center",
        fontFamily: FontFamily.notoSansMedium,
        fontWeight: "500",
        color: Color.colorWhite,
        left: width * 150,
        opacity: 0.9,
        position: "absolute",
        zIndex: width * 5
      },
      sc2: {
        width : width * 38,
        fontSize: FontSize.size_smi,
        lineHeight: height * 16,
        top: height * 119,
        textAlign: "center",
        fontFamily: FontFamily.notoSansMedium,
        fontWeight: "500",
        color: Color.colorWhite,
        right: width * 155,
        opacity: 0.9,
        position: "absolute",
        zIndex: width * 5
      },
    shuTypo: {
      fontFamily: FontFamily.notoSansBold,
      top: height * 119,
      width: width * 60,
      textAlign: "right",
      lineHeight: height * 16,
      fontSize: FontSize.size_sm,
      height: height * 18,
      color: Color.colorWhite,
      left: width * 58,
      position: "absolute",
    },
    arsTypo: {
      fontFamily: FontFamily.notoSansBold,
      top: height * 119,
      width: width * 60,
      textAlign: "left",
      lineHeight: width * 16,
      fontSize: FontSize.size_sm,
      height: height * 18,
      color: Color.colorWhite,
      right: width * 58,
      position: "absolute",
    },
    nomatch: {
      fontFamily: FontFamily.notoSansBold,
      fontWeight: "700",
      top: height * 119,
      width: width * 207,
      textAlign: "center",
      lineHeight: height * 16,
      fontSize: FontSize.size_sm,
      height: height * 16,
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
      left: width * 128,
      width: width * 20,
      top: height * 117,
      height: height * 20,
    },
    image511Icon: {
      right: width * 128,
      width: width * 20,
      top: height * 117,
      height: height * 20,
    },
    mainChild6: {
      top: height * 114,
      right: width * 160,
      width: width * 55,
      height: height * 27,
      backgroundColor: Color.colorGray_200,
      zIndex: 2,
    },
    mainChild5: {
      top: height * 77,
      left: width * 261,
      backgroundColor: '#FF4438',
      width: width * 40,
      height: height * 18,
      borderRadius: width * 10,
      position: "absolute",
    },
    vectorIcon: {
      top: height * 42,
      left: width * 94,
    },
    groupItem: {
      height: height * 26,
      borderRadius: Border.br_8xs,
      top: height * 30,
      left: width * 2,
    },
    groupInner: {
      top: height * 39,
      height: height * 26,
      left: width * 2,
    },
    rectangleGroup: {
      height: height * 26,
      left: width * 15,
      width: width * 26,
      top: height * 72,
    },
    rectangleContainer: {
      right: width * 15,
      height: height * 26,
      width: width * 26,
      top: height * 72,
    },
    component8: {
      top: height * 35,
      right: width * 4,
      width: width * 41,
      height: height * 23,
      position: "absolute",
    },
    headerText: {
      marginLeft: width * -16,
      top: height * -1,
      height: height * 1,
      textAlign: "center",
      fontFamily: FontFamily.notoSansMedium,
      fontWeight: "500",
      left: "52%",
      lineHeight: height *  1,
      fontSize: FontSize.size_xs,
    },
    rec1: {
      backgroundColor: Color.colorDarkslategray,
      width: width * 371,
      top: height * 105,
      height: height * 46,
      left: width *2,
      borderBottomWidth: width * 2, // Set border width
      borderColor: '#1C1C1F', // Set border color
    },
    line: {
        position: "absolute",
        width: width * 1.5,
        height: height * 18,
        left: width * 183,
        top : height * 120,
        zIndex: 999
      },
  });

  export default styles;