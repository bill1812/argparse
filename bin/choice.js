#!/usr/bin/env node

'use strict';

var ArgumentParser = require('../lib/argparse').ArgumentParser;
var parser = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Argparse examples: choice'
});

parser.addArgument(['foo'], { choices: 'abc' });

// parser.printHelp();
console.log('choice:\n' + '-----------');

var args = parser.parseArgs(); // ([ 'c' ]);
console.dir(args);

console.log('-----------');
// parser.parseArgs([ 'X' ]);
// console.dir(args);

/* \argparse>node .\bin\choice -h
choice:
-----------
usage: choice [-h] [-v] {a, b, c}

Argparse examples: choice

Positional arguments:
  {a, b, c}

Optional arguments:
  -h, --help     Show this help message and exit.
  -v, --version  Show program's version number and exit.

\argparse>node .\bin\choice a
choice:
-----------
Namespace { foo: 'a' }
-----------

\argparse>node .\bin\choice ab
choice:
-----------
Namespace { foo: 'ab' }
-----------

\argparse>node .\bin\choice ac
choice:
-----------
usage: choice [-h] [-v] {a, b, c}
choice: error: argument "foo": Invalid choice: ac (choose from [a, b, c])

\argparse>node .\bin\choice bc
choice:
-----------
Namespace { foo: 'bc' }
-----------

*/
