#!/usr/bin/env node

'use strict';

var ArgumentParser = require('../lib/argparse').ArgumentParser;
var parser = new ArgumentParser({
  version: '0.0.1',
  addHelp:true,
  description: 'Argparse example'
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
var args = parser.parseArgs();
console.dir(args);

/* http://nodeca.github.io/argparse/

\argparse>node .\bin\test -h
usage: test [-h] [-v] [-f FOO] [-b BAR] [--baz BAZ]

Argparse example

Optional arguments:
  -h, --help         Show this help message and exit.
  -v, --version      Show program's version number and exit.
  -f FOO, --foo FOO  foo bar
  -b BAR, --bar BAR  bar foo
  --baz BAZ          baz bar

***

\argparse>node .\bin\test.js -f=3 --bar=4 --baz 5
Namespace { foo: '3', bar: '4', baz: '5' }

*/
