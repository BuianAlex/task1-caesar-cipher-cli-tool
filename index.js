const { pipeline } = require('stream');
const fs = require('fs');

const options = require('./utils/argChecker');
const caesar = require('./utils/streamTransform');

let steamIn = process.stdin;
let streamOut = process.stdout;

const fsErrorMsg = 'you have not permission or wrong path to file';

if (options.input !== undefined) {
  steamIn = fs.createReadStream(options.input);

  steamIn.on('error', (err) => {
    console.error('error: with input file ' + fsErrorMsg);
    process.exit(1);
  });
}

if (options.output !== undefined) {
  streamOut = fs.createWriteStream(options.output, {
    flags: 'a',
  });

  streamOut.on('error', (err) => {
    console.error('error: with output file ' + fsErrorMsg);
    process.exit(1);
  });
}

pipeline(steamIn, caesar.encoder(options.shift), streamOut, (err) => {
  if (err) {
    console.error('Unexpected error', err);
  } else {
    console.log(options.action + ' succeeded!');
  }
});
