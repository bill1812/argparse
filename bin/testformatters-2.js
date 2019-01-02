#!/usr/bin/env node

'use strict';

var a, group, parser, helptext;
var assert = require('assert');

function print() {
  return console.log.apply(console, arguments);
}
// print = function () {};

var argparse = require('argparse');

print('2. TEST argparse.RawDescriptionHelpFormatter');

parser = new argparse.ArgumentParser({
  debug: true,
  prog: 'PROG',
  formatterClass: argparse.RawDescriptionHelpFormatter,
  description: 'Keep the formatting\n' + '    exactly as it is written\n' + '\n' + 'here\n'
});

a = parser.addArgument(['--foo'], {
  help: '  foo help should not\n' + '    retain this odd formatting'
});

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
assert.equal(helptext.match(a.help), null);
assert(helptext.match(/foo help should not retain this odd formatting/));

/** \argparse>node .\bin\testformatters-2

class TestHelpRawDescription(HelpTestCase):
    """Test the RawTextHelpFormatter"""
....

2. TEST argparse.RawDescriptionHelpFormatter
usage: PROG [-h] [--foo FOO] [--bar BAR] spam

Keep the formatting
    exactly as it is written

here

Positional arguments:
  spam        spam help

Optional arguments:
  -h, --help  Show this help message and exit.
  --foo FOO   foo help should not retain this odd formatting

title:
      This text
    should be indented
      exactly like it is here

  --bar BAR   bar help

*/
