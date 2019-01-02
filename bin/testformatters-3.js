#!/usr/bin/env node

'use strict';

var /* a, */ group, parser, helptext;
var assert = require('assert');

function print() {
  return console.log.apply(console, arguments);
}
// print = function () {};

var argparse = require('argparse');

print('3. TEST argparse.RawTextHelpFormatter');

parser = new argparse.ArgumentParser({
  debug: true,
  prog: 'PROG',
  formatterClass: argparse.RawTextHelpFormatter,
  description: 'Keep the formatting\n' + '    exactly as it is written\n' + '\n' + 'here\n'
});

parser.addArgument(['--baz'], {
  help: '    baz help should also\n' + 'appear as given here'
});
/*
a = parser.addArgument(['--foo'], {
  help: '  foo help should also\n' + 'appear as given here'
});
*/
parser.addArgument(['spam'], {
  help: 'spam help'
});

group = parser.addArgumentGroup({
  title: 'title',
  description: '    This text\n' + '  should be indented\n' + '    exactly like it is here\n'
});

group.addArgument(['--bar'], {
  help: 'bar help'
});

helptext = parser.formatHelp();
print(helptext);
// test selected clips
assert(helptext.match(parser.description));
assert(helptext.match(/( {14})appear as given here/gm));

/** \argparse>node .\bin\testformatters-3

3. TEST argparse.RawTextHelpFormatter
usage: PROG [-h] [--baz BAZ] [--foo FOO] [--bar BAR] spam

Keep the formatting
    exactly as it is written

here

Positional arguments:
  spam        spam help

Optional arguments:
  -h, --help  Show this help message and exit.
  --baz BAZ       baz help should also
              appear as given here
  --foo FOO     foo help should also
              appear as given here

title:
      This text
    should be indented
      exactly like it is here

  --bar BAR   bar help

*/
