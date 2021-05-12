const ALPHABET_LENGTH = 26;
const CODE_LOWERCASE_MIN = 97;
const CODE_LOWERCASE_MAX = 122;
const CODE_UPPERCASE_MIN = 65;
const CODE_UPPERCASE_MAX = 90;

const charCodeCalc = (charCode, shift, literType) => {
  let newCharCode;
  let minCode;
  let maxCode;
  if (literType === 'LOWER') {
    minCode = CODE_LOWERCASE_MIN;
    maxCode = CODE_LOWERCASE_MAX;
  }
  if (literType === 'UPPER') {
    minCode = CODE_UPPERCASE_MIN;
    maxCode = CODE_UPPERCASE_MAX;
  }
  newCharCode = charCode + shift;
  if (newCharCode > maxCode) {
    const newShift = newCharCode - maxCode;
    newCharCode = minCode + newShift - 1;
  }
  if (newCharCode < minCode) {
    newCharCode = newCharCode + ALPHABET_LENGTH;
  }
  return newCharCode;
};

module.exports = (string, shift) => {
  if (shift > ALPHABET_LENGTH || shift < -ALPHABET_LENGTH) {
    shift = shift % ALPHABET_LENGTH;
  }
  let result = [];
  for (let index = 0; index < string.length; index++) {
    let charCode = string.charCodeAt(index);
    if (charCode >= CODE_LOWERCASE_MIN && charCode <= CODE_LOWERCASE_MAX) {
      charCode = charCodeCalc(charCode, shift, 'LOWER');
    }
    if (charCode >= CODE_UPPERCASE_MIN && charCode <= CODE_UPPERCASE_MAX) {
      charCode = charCodeCalc(charCode, shift, 'UPPER');
    }
    result.push(charCode);
  }
  return String.fromCharCode(...result);
};
