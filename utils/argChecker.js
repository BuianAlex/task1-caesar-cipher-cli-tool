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

program
  .description('Caesar cipher tool')
  .requiredOption('-s, --shift <number>', 'shift - an integer', checkShift)
  .requiredOption(
    '-a, --action <encode or decode>',
    'action - encode/decode',
    checkAction
  )
  .option('-i, --input <path to file>', 'input file path')
  .option('-o, --output <path to file>', 'output file path');

program.parse();

const options = program.opts();

if (options.action !== 'encode' && options.action !== 'decode') {
  process.stderr.write(
    'error: Argument - action should be encode or decode.\n\n'
  );
  program.help({ error: true });
}

options.shift =
  options.action === 'encode' ? options.shift : options.shift * -1;
module.exports = options;
