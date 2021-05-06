const { pipeline } = require('stream');
const fs = require('fs');
const { program } = require('commander');

const caesar = require('./utils/streamTransform');

program
  .description('Caesar cipher tool')
  .requiredOption('-s, --shift <number>', 'shift')
  .requiredOption('-a, --action <string>', 'action encode/decode')
  .option('-i, --input <string>', 'input file path')
  .option('-o, --output <string>', 'output file path');

program.parse();

const options = program.opts();

if (options.action !== 'encode' && options.action !== 'decode') {
  program.help({ error: true });
}

const shift = Number.parseInt(options.shift, 10);
if (Number.isNaN(shift)) {
  program.help({ error: true });
}
let steamIn = process.stdin;
let streamOut = process.stdout;

if (options.input !== undefined) {
  steamIn = fs.createReadStream(options.input);

  steamIn.on('error', (err) => {
    console.log('Input file error because of permissions or it is a directory');
  });
}
if (options.output !== undefined) {
  streamOut = fs.createWriteStream(options.output);

  streamOut.on('error', (err) => {
    console.log(
      'Output file error because of permissions or it is a directory'
    );
  });
}

console.log(options);
pipeline(steamIn, caesar.encoder(shift), streamOut, (err) => {
  if (err) {
    console.error('Pipeline failed', err);
  } else {
    console.log(options.action + ' succeeded');
  }
});

// process.stdin
//   .pipe(caesar.encoder)
//   .pipe(process.stdout)
//   .on('finish', () => console.log('Done'));
// process.stdin.on('readable', () => {
//   const chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(`data: ${chunk}`);
//   }
// });

// process.stdin.on('end', () => {
//   process.stdout.write('end');
// });

// process.stdin.on('data', (chunk) => {
//   buf.push(chunk);
// });
