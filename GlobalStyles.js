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
  notoSansSemiBold: "NotoSans-SemiBold",
  robotoBold: "Roboto-Bold",
  notoSansMedium: "NotoSans-Medium",
  notoSansRegular: "NotoSans-Regular",
  notoSansExtraBold: "NotoSans-ExtraBold",
  notoSansBold: "NotoSans-Bold",
  nunitoSans12ptExtraBold: "NunitoSans12pt-ExtraBold",
  notoSansLight: "NotoSans-Light",
  robotoMedium: "Roboto-Medium",
};

/* font sizes */
export const FontSize = {
  size_smi: width * 13,
  size_3xl: width * 22,
  size_xs: width * 12,
  size_sm: width * 14,
  size_base: width * 16,
  size_17xl: width * 36,
  size_xl: width * 20,
};
export const Padding = {
  p_70xl: width * 89,
  p_7xs: width * 6,
};

/* Colors */
export const Color = {
  colorWhite: "#fff",
  colorGainsboro: "#dadada",
  colorGainsboro_100: "#d9d9d9",
  colorGray_100: "#282830",
  colorGray_200: "#1c1c1f",
  colorGray_300: "rgba(255, 255, 255, 0.6)",
  colorSlategray: "#7b7a8e",
  colorTomato: "#ff4438",
  colorLightsteelblue_100: "#aeaec6",
  colorLightsteelblue_200: "rgba(174, 174, 198, 0.7)",
  colorKhaki: "#e3de5c",
  colorDarkslategray: "#31313c",
  colorDimgray: "#565565",
  colorCrimson: "#ff4274",
};
/* border radiuses */
export const Border = {
  br_12xs_5: width * 1,
  br_11xs: width * 2,
  br_9xs: width * 4,
  br_3xs: width * 10,
  br_8xs: width * 5,
  br_4xs: width * 9,
};