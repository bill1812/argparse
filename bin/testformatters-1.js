#!/usr/bin/env node

'use strict';

var /* a, */ group, parser, helptext;
var assert = require('assert');

function print() {
  return console.log.apply(console, arguments);
}
// print = function () {};

var argparse = require('argparse');

print('1. TEST argparse.ArgumentDefaultsHelpFormatter');

parser = new argparse.ArgumentParser({
  debug: true,
  formatterClass: argparse.ArgumentDefaultsHelpFormatter,
  description: 'description'
});

parser.addArgument(['--foo'], {
  help: 'foo help - oh and by the way, %(defaultValue)s'
});

parser.addArgument(['--bar'], {
  action: 'storeTrue',
  help: 'bar help'
});

parser.addArgument(['spam'], {
  help: 'spam help'
});

parser.addArgument(['badger'], {
  nargs: '?',
  defaultValue: 'wooden',
  help: 'badger help'
});

group = parser.addArgumentGroup({
  title: 'title',
  description: 'group description'
});

group.addArgument(['--baz'], {
  type: 'int',
  defaultValue: 42,
  help: 'baz help'
});

helptext = parser.formatHelp();
print(helptext);

// test selected clips
assert(helptext.match(/badger help \(default: wooden\)/));
assert(helptext.match(/foo help - oh and by the way, null/));
assert(helptext.match(/bar help \(default: false\)/));
assert(helptext.match(/title:\n {2}group description/)); // test indent
assert(helptext.match(/baz help \(default: 42\)/im));

/** \argparse>node .\bin\testformatters-1

1. TEST argparse.ArgumentDefaultsHelpFormatter
usage: testformatters-1 [-h] [--foo FOO] [--bar] [--baz BAZ] spam [badger]

description

Positional arguments:
  spam        spam help
  badger      badger help (default: wooden)

Optional arguments:
  -h, --help  Show this help message and exit.
  --foo FOO   foo help - oh and by the way, null
  --bar       bar help (default: false)

title:
  group description

  --baz BAZ   baz help (default: 42)

*/
