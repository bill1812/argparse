#!/usr/bin/env node

'use strict';

var ArgumentParser = require('../lib/argparse').ArgumentParser;
var parser = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Argparse examples: nargs'
});
parser.addArgument(
  ['-f', '--foo'],
  {
    help: 'foo bar',
    nargs: 1
  }
);
parser.addArgument(
  ['-b', '--bar'],
  {
    help: 'bar foo',
    nargs: '*'
  }
);

// parser.printHelp();
console.log('-----------');

var args = parser.parseArgs(); // ('--foo a --bar c d'.split(' '));
console.dir(args);
console.log('-----------');
// args = parser.parseArgs('--bar b c f --foo a'.split(' '));
// console.dir(args);

/* \argparse>node .\bin\nargs -h
-----------
usage: nargs [-h] [-v] [-f FOO] [-b [BAR [BAR ...]]]

Argparse examples: nargs

Optional arguments:
  -h, --help            Show this help message and exit.
  -v, --version         Show program's version number and exit.
  -f FOO, --foo FOO     foo bar
  -b [BAR [BAR ...]], --bar [BAR [BAR ...]]
                        bar foo

\argparse>node .\bin\nargs -f FOO -b [B [Li Bar La]]
-----------
Namespace { foo: [ 'FOO' ], bar: [ '[B', '[Li', 'Bar', 'La]]' ] }
-----------

\argparse>node .\bin\nargs -f FOO -b [B [Li [Bar La]]]
-----------
Namespace { foo: [ 'FOO' ], bar: [ '[B', '[Li', '[Bar', 'La]]]' ] }
-----------

*/
