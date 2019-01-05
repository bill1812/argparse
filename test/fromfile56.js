/*global describe, it, beforeEach, before, after*/

'use strict';

var assert = require('assert');
var path   = require('path');

var ArgumentParser = require('../lib/argparse').ArgumentParser;

var orig_cwd = process.cwd();

describe('from file', function () {
  var parser;
  var args;
  before(function () {
    orig_cwd = process.cwd();
    process.chdir(path.normalize('./test/fixtures'));
  });
  beforeEach(function () {
    parser = new ArgumentParser({ debug: true, fromfilePrefixChars: '@' });
    parser.addArgument(['-a']);
    parser.addArgument(['x']);
    parser.addArgument(['y'], { nargs: '+' });
    /* list what's inside of parser
    for (var property in parser) {
      if (parser.hasOwnProperty(property)) {
        console.log('property : ', property);
        console.log('value :    ', parser[property]);
      }
    }
    */
  });
  after(function () {
    process.chdir(orig_cwd);
  });
  /*
  it('test 1. reading arguments from a file', function () {
    args = parser.parseArgs(['X', 'Y']);
    console.log('    1. after args.a: ' + args.a);
    console.log('    1. after args.x: ' + args.x);
    console.log('    1. after args.y: ' + args.y + '\n');
    assert.deepEqual(args, { a: null, x: 'X', y: ['Y'] });
  });
  it('test 2. reading arguments from a file', function () {
    args = parser.parseArgs(['X', '-a', 'A', 'Y', 'Z']);
    console.log('    2. after args.a: ' + args.a);
    console.log('    2. after args.x: ' + args.x);
    console.log('    2. after args.y: ' + args.y + '\n');
    assert.deepEqual(args, { a: 'A',  x: 'X',  y: ['Y', 'Z'] });
  });
  it('test 3. reading arguments from a file', function () {
    args = parser.parseArgs(['@hello', 'X']);
    console.log('    3. after args.a: ' + args.a);
    console.log('    3. after args.x: ' + args.x);
    console.log('    3. after args.y: ' + args.y + '\n');
    assert.deepEqual(args, { a: null, x: 'hello world!', y: ['X'] });
  });
  it('test 4. reading arguments from a file', function () {
    args = parser.parseArgs(['X', '@hello']);
    console.log('    4. after args.a: ' + args.a);
    console.log('    4. after args.x: ' + args.x);
    console.log('    4. after args.y: ' + args.y + '\n');
    assert.deepEqual(args, { a: null, x: 'X', y: ['hello world!'] });
  });
*/
  /* original test
  it('test recursive reading arguments from files', function () {
    args = parser.parseArgs([ '-a', 'B', '@recursive', 'Y', 'Z' ]);
    assert.deepEqual(args, { a: 'A', x: 'hello world!', y: [ 'Y', 'Z' ] });
    args = parser.parseArgs([ 'X', '@recursive', 'Z', '-a', 'B' ]);
    assert.deepEqual(args, { a: 'B', x: 'X', y: [ 'hello world!', 'Z' ] });
  });
  *//*
  it('test 5.0 original recursive reading arguments from files', function () {
    args.a = undefined;
    args.x = undefined;
    args.y = undefined;
    console.log('    5.0 before args.a: ' + args.a);
    console.log('    5.0 before args.x: ' + args.x);
    console.log('    5.0 before args.y: ' + args.y + '\n');
    args = parser.parseArgs(['-a', 'B', '@recursive', 'Y', 'Z']);
    console.log('    5.0 after args.a: ' + args.a);
    console.log('    5.0 after args.x: ' + args.x);
    console.log('    5.0 after args.y: ' + args.y + '\n');
    assert.deepEqual(args, { a: 'A', x: 'hello world!', y: ['Y', 'Z'] });
  });
  */
  it(' test 5.1 recursive reading arguments from files(result shifted)', function () {
    /*
    args.a = undefined;
    args.x = undefined;
    args.y = undefined;
    console.log('    5.1 before args.a: ' + args.a);
    console.log('    5.1 before args.x: ' + args.x);
    console.log('    5.1 before args.y: ' + args.y + '\n');
    */
    args = parser.parseArgs(['-a', 'B', '@recursive', 'Y', 'Z']);
    console.log('    5.1 after args.a: ' + args.a);
    console.log('    5.1 after args.x: ' + args.x);
    console.log('    5.1 after args.y: ' + args.y + '\n');
    assert.deepEqual(args, { a: '\r', x: 'A\r', y: ['hello world!', 'Y', 'Z'] });
  });
  /*
  it('test 6.0 original recursive reading arguments from files', function () {
    args.a = undefined;
    args.x = undefined;
    args.y = undefined;
    console.log('    6.0 before args.a: ' + args.a);
    console.log('    6.0 before args.x: ' + args.x);
    console.log('    6.0 before args.y: ' + args.y + '\n');
    args = parser.parseArgs(['X', '@recursive', 'Z', '-a', 'B']);
    console.log('    6.0 after args.a: ' + args.a);
    console.log('    6.0 after args.x: ' + args.x);
    console.log('    6.0 after args.y: ' + args.y + '\n');
    assert.deepEqual(args, { a: 'B', x: 'X', y: ['hello world!', 'Z'] });
  });
  */

  it(' test 6.1 recursive reading arguments from files(result shifted)', function () {
    /*
    args.a = undefined;
    args.x = undefined;
    args.y = undefined;
    console.log('    6.1 before args.a: ' + args.a);
    console.log('    6.1 before args.x: ' + args.x);
    console.log('    6.1 before args.y: ' + args.y + '\n');
    */
    args = parser.parseArgs(['X', '@recursive', 'Z', '-a', 'B']);
    console.log('    6.1 after args.a: ' + args.a);
    console.log('    6.1 after args.x: ' + args.x);
    console.log('    6.1 after args.y: ' + args.y + '\n');
    assert.deepEqual(args, { a: 'B', x: 'X', y: ['A\r', 'hello world!', 'Z'] });
  });

/*
  it('test 7. reading arguments from an invalid file', function () {
    console.log('    7. before args.a: ' + args.a);
    console.log('    7. before args.x: ' + args.x);
    console.log('    7. before args.y: ' + args.y + '\n');
    args.a = undefined;
    args.x = undefined;
    args.y = undefined;
    assert.throws(
      function () {
        args = parser.parseArgs(['@invalid']);
      },
      /ENOENT[:,] no such file or directory/
    );
    console.log('    7. after args.a: ' + args.a);
    console.log('    7. after args.x: ' + args.x);
    console.log('    7. after args.y: ' + args.y + '\n');
  });
  it('test 8. reading arguments from an missing file', function () {
    console.log('    8. before args.a: ' + args.a);
    console.log('    8. before args.x: ' + args.x);
    console.log('    8. before args.y: ' + args.y + '\n');
    args.a = undefined;
    args.x = undefined;
    args.y = undefined;
    assert.throws(
      function () {
        args = parser.parseArgs(['@missing']);
      },
      /ENOENT[:,] no such file or directory/
    );
    console.log('    8. after args.a: ' + args.a);
    console.log('    8. after args.x: ' + args.x);
    console.log('    8. after args.y: ' + args.y + '\n');
  });
  it('test 9. custom convertArgLineToArgs function', function () {
    console.log('    9. before args.a: ' + args.a);
    console.log('    9. before args.x: ' + args.x);
    console.log('    9. before args.y: ' + args.y + '\n');
    parser.convertArgLineToArgs = function (argLine) {
      // split line into 'words'
      args = argLine.split(' ');
      args = args.map(function (arg) { return arg.trim(); });
      args = args.filter(function (arg) { return arg.length > 0; });
      return args;
    };
    console.log('    9. convert args.a: ' + args.a);
    console.log('    9. convert args.x: ' + args.x);
    console.log('    9. convert args.y: ' + args.y + '\n');
    args = parser.parseArgs(['X', '@hello']);
    console.log('    9. after args.a: ' + args.a);
    console.log('    9. after args.x: ' + args.x);
    console.log('    9. after args.y: ' + args.y + '\n');
    assert.deepEqual(args, { a: null, x: 'X', y: ['hello', 'world!'] });
  });
*/
});
