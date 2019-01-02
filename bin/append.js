#!/usr/bin/env node

'use strict';

var argparse = require('argparse');
var parser = new argparse.ArgumentParser();

parser.addArgument(
  ['--foo'],
  {
    action: 'append',
    defaultValue: ['1', '2']
  }
);

var args = parser.parseArgs();
console.log(args);

/* github.com/nodeca/argparse/pull/123

\argparse>node .\bin\append --foo 5 --foo 6
Namespace { foo: [ '1', '2', '5', '6' ] }

*/
