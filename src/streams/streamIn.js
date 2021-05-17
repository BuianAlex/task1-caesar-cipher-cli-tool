const fs = require('fs');

module.exports = (filePath) => {
  if (filePath !== undefined) {
    return fs.createReadStream(filePath);
  }
  return process.stdin;
};
