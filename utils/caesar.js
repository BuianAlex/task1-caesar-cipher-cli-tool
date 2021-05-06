module.exports = (string, shift) => {
  if (shift > 26 || shift < -26) {
    shift = shift % 26;
  }
  let result = [];
  for (let index = 0; index < string.length; index++) {
    let charCode = string.charCodeAt(index);
    if (charCode > 96 && charCode < 123) {
      charCode = charCode + shift;
      if (charCode > 122) {
        const newShift = charCode - 122;
        charCode = 96 + newShift;
      }
      if (charCode < 97) {
        charCode = charCode + 26;
      }
    }
    if (charCode > 64 && charCode < 91) {
      charCode = charCode + shift;
      if (charCode > 90) {
        const newShift = charCode - 90;
        charCode = 64 + newShift;
      }
      if (charCode < 64) {
        charCode = charCode + 26;
      }
    }
    result.push(charCode);
  }
  return String.fromCharCode(...result);
};
