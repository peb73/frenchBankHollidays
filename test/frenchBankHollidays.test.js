var tbh = require('..');
var test = require('tap').test;

test('1 january', function (t) {
  var input = tbh.janvier1(2013);
  var expected = new Date(2013,0,1);
  t.equal(+input, +expected, "test 1st january 2013");
  t.end();
});