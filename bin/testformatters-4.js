#!/usr/bin/env node

'use strict';

var /* a, group, */ parser, helptext;
var assert = require('assert');

function print() {
  return console.log.apply(console, arguments);
}
// print = function () {};

var argparse = require('argparse');

print('4. TEST metavar as a tuple');

parser = new argparse.ArgumentParser({
  prog: 'PROG'
});

parser.addArgument(['-w'], {
  help: 'w',
  nargs: '+',
  metavar: ['W1', 'W2']
});

parser.addArgument(['-x'], {
  help: 'x',
  nargs: '*',
  metavar: ['X1', 'X2']
});

parser.addArgument(['-y'], {
  help: 'y',
  nargs: 3,
  metavar: ['Y1', 'Y2', 'Y3']
});

parser.addArgument(['-z'], {
  help: 'z',
  nargs: '?',
  metavar: ['Z1']
});

helptext = parser.formatHelp();
print(helptext);
var ustring = 'PROG [-h] [-w W1 [W2 ...]] [-x [X1 [X2 ...]]] [-y Y1 Y2 Y3] [-z [Z1]]';
ustring = ustring.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
// print(ustring)
assert(helptext.match(new RegExp(ustring)));

/**
class TestHelpTupleMetavar(HelpTestCase):
    """Test specifying metavar as a tuple"""

\argparse>node .\bin\testformatters-4
4. TEST metavar as a tuple
usage: PROG [-h] [-w W1 [W2 ...]] [-x [X1 [X2 ...]]] [-y Y1 Y2 Y3] [-z [Z1]]

Optional arguments:
  -h, --help        Show this help message and exit.
  -w W1 [W2 ...]    w
  -x [X1 [X2 ...]]  x
  -y Y1 Y2 Y3       y
  -z [Z1]           z

*/
