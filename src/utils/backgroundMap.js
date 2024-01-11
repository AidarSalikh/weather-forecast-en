export const BG_MAP = new Map();

addMapping([1000], "sun"); //
addMapping([1003], "cloudSun"); //
addMapping([1135, 1147, 1006, 1009, 1030], "cloud"); //
addMapping(
  [1063, 1183, 1186, 1189, 1240, 1261, 1273, 1276, 1279, 1282],
  "rainy"
); //
addMapping(
  [1192, 1087, 1195, 1201, 1243, 1246, 1249, 1252, 1255, 1258, 1264],
  "thunder"
); //
addMapping(
  [
    1066, 1069, 1072, 1114, 1117, 1150, 1153, 1168, 1171, 1204, 1207, 1210,
    1213, 1216, 1219, 1222, 1225, 1198, 1237,
  ],
  "snow"
); //

function addMapping(values, icon) {
  values.forEach((value) => {
    BG_MAP.set(value, icon);
  });
}
