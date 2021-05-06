const { pipeline } = require('stream');
const fs = require('fs');

const options = require('./utils/argChecker');
const caesar = require('./utils/streamTransform');

console.log(options);

let steamIn = process.stdin;
let streamOut = process.stdout;

if (options.input !== undefined) {
  steamIn = fs.createReadStream(options.input);

  steamIn.on('error', (err) => {
    console.error(
      'Input file error because of permissions or no such file or directory'
    );
    process.exit(1);
  });
}

if (options.output !== undefined) {
  streamOut = fs.createWriteStream(options.output, {
    flags: 'a',
  });

  streamOut.on('error', (err) => {
    console.error(
      'Output file error because of permissions or no such file or directory'
    );
    process.exit(1);
  });
}

pipeline(steamIn, caesar.encoder(options.shift), streamOut, (err) => {
  if (err) {
    // console.error('Pipeline failed', err);
  } else {
    console.log(options.action + ' succeeded');
  }
});

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});
