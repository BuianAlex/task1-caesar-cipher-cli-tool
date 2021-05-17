const fs = require('fs');

module.exports = (filePath) => {
  if (filePath !== undefined) {
    return fs.createWriteStream(filePath, {
      flags: 'a',
    });
  }
  return process.stdout;
};
