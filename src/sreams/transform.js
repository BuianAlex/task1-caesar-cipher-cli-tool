const { Transform } = require('stream');

const caesar = require('../caesar');

const encoder = (shift) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      const bufString = chunk.toString();
      const caesarResult = caesar(bufString, shift);
      this.push(caesarResult);
      callback();
    },
  });
};

module.exports = { encoder };
