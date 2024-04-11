import { Text, StyleSheet } from 'react-native';
import { Image } from "expo-image";
import { LinearGradient } from 'expo-linear-gradient';
import { height,width, Color, FontSize, FontFamily } from '../GlobalStyles';

const SplashLaPremiere = () => {
  return (
    <LinearGradient
      style={[styles.splashLaPremiere]}
      locations={[0.48, 1]}
      colors={['#3b2050', '#7e2983']}
    >
      <Text style={[styles.text]}>최고의 즐거움</Text>
      <Text style={[styles.laPremire]}>La première</Text>
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require('../assets/icon-1.png')}
      />
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  text: {
    top: height * 152,
    textAlign: 'center',
    fontSize: FontSize.size_17xl,
    color: Color.colorWhite,
    letterSpacing: 0,
    lineHeight: height * 47,
    fontFamily: FontFamily.notoSansRegular,
  },
  laPremire: {
    top: '20%',
    textAlign: 'center',
    fontSize: width * 50,
    letterSpacing: width *  0,
    color: Color.colorWhite,
    lineHeight: height * 65,
    fontFamily: FontFamily.notoSansBold,
  },
  icon1: {
    top: height * 344,
    left: width * 90,
    width: width * 184,
    height: height * 233,
    position: "absolute",
  },
  splashLaPremiere: {
    width: width * 375,
    height: height * 811,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default SplashLaPremiere;
