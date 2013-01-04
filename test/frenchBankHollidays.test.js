var tbh = require('..');
var test = require('tap').test;

test('1 january', function (t) {
  var input = tbh.janvier1(2013);
  var expected = new Date(2013,0,1);
  t.equal(+input, +expected, "test 1st january 2013");

  var input = tbh.janvier1(2014);
  var expected = new Date(2014,0,1);
  t.equal(+input, +expected, "test 1st january 2014");
  t.end();
});

test('1 may', function (t) {
  var input = tbh.mai1(2013);
  var expected = new Date(2013,4,1);
  t.equal(+input, +expected, "test 1st may 2013");

  var input = tbh.mai1(2014);
  var expected = new Date(2014,4,1);
  t.equal(+input, +expected, "test 1st may 2014");
  t.end();
});


test('8 may', function (t) {
  var input = tbh.mai8(2013);
  var expected = new Date(2013,4,8);
  t.equal(+input, +expected, "test 8th may 2013");

  var input = tbh.mai8(2014);
  var expected = new Date(2014,4,8);
  t.equal(+input, +expected, "test 8th may 2014");
  t.end();
});

test('14 jully', function (t) {
  var input = tbh.juillet14(2013);
  var expected = new Date(2013,6,14);
  t.equal(+input, +expected, "test 14th jully 2013");

  var input = tbh.juillet14(2014);
  var expected = new Date(2014,6,14);
  t.equal(+input, +expected, "test 14th jully 2014");
  t.end();
});

test('11 november', function (t) {
  var input = tbh.novembre11(2013);
  var expected = new Date(2013,10,11);
  t.equal(+input, +expected, "test 11th november 2013");

  var input = tbh.novembre11(2014);
  var expected = new Date(2014,10,11);
  t.equal(+input, +expected, "test 11th november 2014");
  t.end();
});

test('easter monday', function (t) {
  var input = tbh.lundiPaque(2013);
  var expected = new Date(2013,3,1);
  t.equal(+input, +expected, "test easter monday 2013");

  var input = tbh.lundiPaque(2014);
  var expected = new Date(2014,3,21);
  t.equal(+input, +expected, "test easter monday 2014");
  t.end();
});

test('ascension', function (t) {
  var input = tbh.ascension(2013);
  var expected = new Date(2013,4,9);
  t.equal(+input, +expected, "test ascension 2013");

  var input = tbh.ascension(2014);
  var expected = new Date(2014,4,29);
  t.equal(+input, +expected, "test ascension 2014");
  t.end();
});

test('pentecote', function (t) {
  var input = tbh.pentecote(2013);
  var expected = new Date(2013,4,20);
  t.equal(+input, +expected, "test pentecote 2013");

  var input = tbh.pentecote(2014);
  var expected = new Date(2014,5,9);
  t.equal(+input, +expected, "test pentecote 2014");
  t.end();
});

test('assumption', function (t) {
  var input = tbh.assomption(2013);
  var expected = new Date(2013,7,15);
  t.equal(+input, +expected, "test assumption 2013");

  var input = tbh.assomption(2014);
  var expected = new Date(2014,7,15);
  t.equal(+input, +expected, "test assumption 2014");
  t.end();
});

test('toussaint', function (t) {
  var input = tbh.toussaint(2013);
  var expected = new Date(2013,10,1);
  t.equal(+input, +expected, "test toussaint 2013");

  var input = tbh.toussaint(2014);
  var expected = new Date(2014,10,1);
  t.equal(+input, +expected, "test toussaint 2014");
  t.end();
});

test('chrismast', function (t) {
  var input = tbh.noel(2013);
  var expected = new Date(2013,11,25);
  t.equal(+input, +expected, "test chrismast 2013");

  var input = tbh.noel(2014);
  var expected = new Date(2014,11,25);
  t.equal(+input, +expected, "test chrismast 2014");
  t.end();
});