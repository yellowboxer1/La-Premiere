import { Dimensions } from 'react-native';

const basicDimensions = {
  width: 375,
  height: 812,
};

export const height = ( // 높이 변환 작업
  Dimensions.get('screen').height *
  (1 / basicDimensions.height)
).toFixed(2);

export const width = ( // 가로 변환 작업
  Dimensions.get('screen').width *
  (1 / basicDimensions.width)
).toFixed(2);

/* fonts */
export const FontFamily = {
  notoSansBlack: "NotoSans-Black",
  notoSansSemiBold: "NotoSans-SemiBold",
  robotoBold: "Roboto-Bold",
  notoSansMedium: "NotoSans-Medium",
  notoSansRegular: "NotoSans-Regular",
  notoSansExtraBold: "NotoSans-ExtraBold",
  notoSansBold: "NotoSans-Bold",
  nunitoSans12ptExtraBold: "NunitoSans12pt-ExtraBold",
  notoSansLight: "NotoSans-Light",
  robotoMedium: "Roboto-Medium",
  robotoRegular: "Roboto-Regular"
};

/* font sizes */
export const FontSize = {
  size_xs: width * 12,
  size_smi: width * 13,
  size_sm: width * 14,
  size_mini: width * 15,
  size_base: width * 16,
  size_mid: width * 17,
  size_lg: width * 18,
  size_xl: width * 20,
  size_3xl: width * 22,
  size_11xl: width * 30,
  size_17xl: width * 36,
  size_21xl: width * 40,
};
export const Padding = {
  p_70xl: width * 89,
  p_7xs: width * 6,
};

/* Colors */
export const Color = {
  colorGray_400: "#909090",
  colorGray_100: "#282830",
  colorGray_500: "#282828",
  colorGray_200: "#1c1c1f",
  colorGray_300: "rgba(255, 255, 255, 0.6)",
  colorWhite: "#fff",
  colorGainsboro: "#dadada",
  colorKhaki: "#e3de5c",
  colorGainsboro_100: "#d9d9d9",
  colorSlategray_100: "#757f8b",
  colorSlategray_200: "#7b7a8e",
  colorSlategray: "#7b7a8e",
  colorTomato: "#ff4438",
  colorLightsteelblue_100: "#aeaec6",
  colorLightsteelblue_200: "rgba(174, 174, 198, 0.7)",
  colorDarkslategray: "#31313c",
  colorDimgray_100: "#57575e",
  colorDimgray_200: "#565565",
  colorDimgray: "#565565",
  colorCrimson: "#ff4274",
  colorWhitesmoke_100: "#f3f4f6",
  colorLightslategray: "#8d99a7",
  colorLightgray: "#d4d4d4",
};
/* border radiuses */
export const Border = {
  br_12xs_5: width * 1,
  br_11xs: width * 2,
  br_10xs: width * 3,
  br_9xs: width * 4,
  br_3xs: width * 10,
  br_8xs: width * 5,
  br_4xs: width * 9,
};

import { Text } from 'react-native';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;