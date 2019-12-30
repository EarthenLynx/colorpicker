// Define the checks for the colors
// By rules of the app: If the color is not hex, it must be rgb
export function hexCheck(color) {
  let regExpHex = /^#[0-9a-f]{3,6}$/i;
  return regExpHex.test(color);
}

// Convert rgb value to hex
export function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Convert hex value to rgb
export function hexToRgb(hex) {
  // Change the hex value into an integer
  let hexInt = parseInt(hex.slice(1, hex.length), 16);
  // Convert each of the hex into decimals, put these into an array
  let rgbArr = [(hexInt >> 16) & 255, (hexInt >> 8) & 255, hexInt & 255]
  return rgbArr;
  // Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb#5624139
  // Thanks at xameeramir for the explicit answer
}
