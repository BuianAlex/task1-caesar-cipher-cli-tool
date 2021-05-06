const { program } = require('commander');

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

options.shift = options.action === 'encode' ? shift : shift * -1;
module.exports = options;
