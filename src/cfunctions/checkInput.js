// Function uses regExp to check whether input is an actual color
const checkForColor = (color) => {
  let regExpCol = /^#[a-f0-9]/
  return regExpCol.test(color);
}

module.exports = checkForColor();
