# Caesar cipher CLI tool

#### CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

### Config

    node 14.16.0
    npm: 6.14.11
    OS: Windows\Linux

### Instalation

    npm install

### CLI tool accept 5 options:

    -s, --shift: shift an integer number - required option
    -a, --action:  action type encode or decode - required option
    -i, --input: an input file
    -o, --output: an output file
    -h, --help: show all options

### Usage case:

1. Encoding _-a (--action)_ **encode** from file _-i (--input)_ **input.txt** to file _-o, (--output)_ **output.txt** with _-s (--shift)_ **7**

```
$ node index -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

Text in - input.txt

> `This is secret. Message about "_" symbol!`

Result in - output.txt

> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

2. Decoding _-a (--action)_ **decode**  
   _Decoding encoded initial string with the same -s(--shift) number produces the initial string._

```bash
$ node index --action decode --shift 7 --input encoded.txt --output plain.txt
```

encoded.txt

> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

plain.txt

> `This is secret. Message about "_" symbol!`

3. Encode or Decode text from command line to file when -i(--input) is not specified.

```bash
$ node index --action decode --shift 7  --output output.txt
```

4. Encode or Decode text from file to command line when -o(--output) is not specified.

```bash
$ node index --action encode -i input.txt --shift 7
```

5. Encode or Decode text in command line on the fly when -o(--output) and -i(--input) is not specified.

```bash
$ node index -a encode -s 77
```
