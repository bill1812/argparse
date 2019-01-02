#!/usr/bin/env node

'use strict';

var ArgumentParser = require('../lib/argparse').ArgumentParser;
var parser = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Argparse examples: arguments'
});
parser.addArgument(
  ['-f', '--foo'],
  {
    help: 'foo bar'
  }
);
parser.addArgument(
  ['-b', '--bar'],
  {
    help: 'bar foo'
  }
);
parser.addArgument(
  '--baz',
  {
    help: 'baz bar'
  }
);

// parser.printHelp();
console.log('-----------');

var args;
args = parser.parseArgs(); // ('-f 1 -b2'.split(' '));

console.dir(args);
console.log('-----------');
/*
args = parser.parseArgs('-f=3 --bar=4'.split(' '));
console.dir(args);
console.log('-----------');
args = parser.parseArgs('--foo 5 --bar 6'.split(' '));
console.dir(args);
console.log('-----------');
args = parser.parseArgs('--baz 7 -f 8'.split(' '));
console.dir(args);
console.log('-----------');
*/

/* \argparse>node .\bin\arguments -h
-----------
usage: arguments [-h] [-v] [-f FOO] [-b BAR] [--baz BAZ]

Argparse examples: arguments

Optional arguments:
  -h, --help         Show this help message and exit.
  -v, --version      Show program's version number and exit.
  -f FOO, --foo FOO  foo bar
  -b BAR, --bar BAR  bar foo
  --baz BAZ          baz bar

\argparse>node .\bin\arguments -f 4 --bar 8 --baz 12
-----------
Namespace { foo: '4', bar: '8', baz: '12' }
-----------

\argparse>node .\bin\arguments -f 4 --bar 8
-----------
Namespace { foo: '4', bar: '8', baz: null }
-----------

\argparse>node .\bin\arguments -f 4 --baz 16
-----------
Namespace { foo: '4', bar: null, baz: '16' }
-----------

*/
