#!/usr/bin/env node

'use strict';

var ArgumentParser = require('../lib/argparse').ArgumentParser;
var parser = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Argparse examples: constant'
});

parser.addArgument(
  ['-a'],
  {
    action: 'storeConst',
    dest:   'answer',
    help:   'store constant',
    constant: 42
  }
);
parser.addArgument(
  ['--str'],
  {
    action: 'appendConst',
    dest:   'types',
    help:   'append constant "str" to types',
    constant: 'str'
  }
);
parser.addArgument(
  ['--int'],
  {
    action: 'appendConst',
    dest:   'types',
    help:   'append constant "int" to types',
    constant: 'int'
  }
);

parser.addArgument(
  ['--true'],
  {
    action: 'storeTrue',
    help: 'store true constant'
  }
);
parser.addArgument(
  ['--false'],
  {
    action: 'storeFalse',
    help: 'store false constant'
  }
);

// parser.printHelp();
console.log('-----------');

var args;
args = parser.parseArgs(); // ('-a --str --int --true'.split(' '));
console.dir(args);

/* \argparse>node .\bin\constants --help
-----------
usage: constants [-h] [-v] [-a] [--str] [--int] [--true] [--false]

Argparse examples: constant

Optional arguments:
  -h, --help     Show this help message and exit.
  -v, --version  Show program's version number and exit.
  -a             store constant
  --str          append constant "str" to types
  --int          append constant "int" to types
  --true         store true constant
  --false        store false constant

\argparse>node .\bin\constants -a --int --true
-----------
Namespace { answer: 42, types: [ 'int' ], true: true, false: true }

\argparse>node .\bin\constants -a --str --false
-----------
Namespace { answer: 42, types: [ 'str' ], true: false, false: false }

*/
