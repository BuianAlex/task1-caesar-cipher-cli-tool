const fs = require('fs');
const { EOL } = require('os');

const { program } = require('commander');

const checkShift = (value) => {
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    throw new program.InvalidOptionArgumentError('Not a number.');
  }
  return parsedValue;
};

const checkAction = (value) => {
  if (value !== 'encode' && value !== 'decode') {
    throw new program.InvalidOptionArgumentError('Should be encode or decode.');
  }
  return value;
};

const validateFile = (pathFile) => {
  if (fs.existsSync(pathFile)) {
    const isFile = fs.statSync(pathFile).isFile();
    if (!isFile) {
      throw new program.InvalidOptionArgumentError(`Is not a file!`);
    }
    try {
      fs.accessSync(pathFile, fs.constants.R_OK | fs.constants.W_OK);
    } catch (err) {
      throw new program.InvalidOptionArgumentError(
        `Cannot access to the file!`
      );
    }
  } else {
    throw new program.InvalidOptionArgumentError(`File doesn't found!`);
  }
  return pathFile;
};

program
  .description('Caesar cipher tool')
  .requiredOption('-s, --shift <number>', 'shift - an integer', checkShift)
  .requiredOption(
    '-a, --action <encode/decode>',
    'action - encode/decode',
    checkAction
  )
  .option('-i, --input <path to file>', 'input file path', validateFile)
  .option('-o, --output <path to file>', 'output file path', validateFile);

program.parse();

const options = program.opts();

if (options.action !== 'encode' && options.action !== 'decode') {
  process.stderr.write(
    `error: Argument - action should be encode or decode.${EOL}`
  );
  program.help({ error: true });
}

options.shift =
  options.action === 'encode' ? options.shift : options.shift * -1;
module.exports = options;
