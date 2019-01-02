#!/usr/bin/env node

'use strict';

var ArgumentParser = require('../lib/argparse').ArgumentParser;
var parser = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Argparse examples: prefix_chars',
  prefixChars: '-+'
});
parser.addArgument(['+f', '++foo']);
parser.addArgument(['++bar'], { action: 'storeTrue' });

// parser.printHelp();
console.log('-----------');

var args = parser.parseArgs(); // ([ '+f', '1' ]);
console.dir(args);
/*
args = parser.parseArgs([ '++bar' ]);
console.dir(args);
args = parser.parseArgs([ '++foo', '2', '++bar' ]);
console.dir(args);
*/
console.log('-----------');

/* \argparse>node .\bin\prefix_chars -h
-----------
usage: prefix_chars [-h] [-v] [+f FOO] [++bar]

Argparse examples: prefix_chars

Optional arguments:
  -h, --help         Show this help message and exit.
  -v, --version      Show program's version number and exit.
  +f FOO, ++foo FOO
  ++bar

\argparse>node .\bin\prefix_chars +f FOO
-----------
Namespace { foo: 'FOO', bar: false }
-----------

\argparse>node .\bin\prefix_chars +f FOO ++bar
-----------
Namespace { foo: 'FOO', bar: true }
-----------

\argparse>node .\bin\prefix_chars +f 100
-----------
Namespace { foo: '100', bar: false }
-----------

\argparse>node .\bin\prefix_chars +f '8964'
-----------
Namespace { foo: '\'8964\'', bar: false }
-----------
*/
