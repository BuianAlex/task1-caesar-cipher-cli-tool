const { pipeline } = require('stream');

const streamTransform = require('./transform');
const streamIn = require('./streamIn');
const streamOut = require('./streamOut');

module.exports = (options) => {
  const { input, output, shift, action } = options;
  pipeline(
    streamIn(input),
    streamTransform.encoder(shift),
    streamOut(output),
    (err) => {
      if (err) {
        console.error('Unexpected error', err);
      } else {
        console.log(action + ' succeeded!');
      }
    }
  );
};
