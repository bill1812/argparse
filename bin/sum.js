#!/usr/bin/env node

'use strict';

var ArgumentParser  = require('../lib/argparse').ArgumentParser;
var parser = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Process some integers.'
});

function sum(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}
function max(arr) {
  return Math.max.apply(Math, arr);
}

parser.addArgument(['integers'], {
  metavar:      'N',
  type:         'int',
  nargs:        '+',
  help:         'an integer for the accumulator'
});

parser.addArgument(['--sum'], {
  dest:         'accumulate',
  action:       'storeConst',
  constant:     sum,
  defaultValue: max,
  help:         'sum the integers (default: find the max)'
});

console.log('-----------');
var args = parser.parseArgs(); // ('--sum 1 2 -1'.split(' '));
console.dir(args);
console.log(args.accumulate(args.integers));
console.log('-----------');

/*
\argparse>node .\bin\sum -h
-----------
usage: sum [-h] [-v] [--sum] N [N ...]

Process some integers.

Positional arguments:
  N              an integer for the accumulator

Optional arguments:
  -h, --help     Show this help message and exit.
  -v, --version  Show program's version number and exit.
  --sum          sum the integers (default: find the max)

\argparse>node .\bin\sum 10 5 25
-----------
Namespace { integers: [ 10, 5, 25 ], accumulate: [Function: max] }
25
-----------

\argparse>node .\bin\sum --sum 17 6 23
-----------
Namespace { integers: [ 17, 6, 23 ], accumulate: [Function: sum] }
46
-----------

*/
