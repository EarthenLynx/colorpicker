/*
* Methods for RGB - Values
* Includes:
* 1) Convert rgb values to hex values. Accepts 3 vars
* 2) Convert rgb String into an array that can be worked with.
* 3) Convert Rgb Array into a String that's readable by the app.
*/

// 1) Convert rgb strings to hex string
export function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// 2) Convert rgb string to rgb arr
export function rgbStrToArr(rgbStr) {
  let rgbCols = rgbStr.slice(4, (rgbStr.length - 1));
  let rgbArr = rgbCols.split(',');
  let rgbArrNum = rgbArr.map(Number);
  return rgbArrNum;
}

// 3) Convert rgb arr to rgb string
export function rgbArrToStr(rgbArr) {
  let rgbCols = rgbArr.join(',');
  let rgbStr = 'rgb(' + rgbCols + ')';
  return rgbStr;
}

/*
* Methods for hex - colors
* 1) Logical check for whether color is hex
* 2) Convert hex color to rgb color
*/

// 1) Check if string has hex - format
export function hexCheck(color) {
  let regExpHex = /^#[0-9a-f]{3,6}$/i;
  return regExpHex.test(color);
}

// 2) Convert hex string to rgb string
// Adverbiation to: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb#5624139
export function hexToRgb(hex) {
  let hexInt = parseInt(hex.slice(1, hex.length), 16);
  let rgbArr = [(hexInt >> 16) & 255, (hexInt >> 8) & 255, hexInt & 255].join(',');
  let rgbStr = 'rgb(' + rgbArr + ')';
  return rgbStr;
}
