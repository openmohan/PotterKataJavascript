const test = require('ava');
const { calculateCost } = require('../src/potter');

test.beforeEach(async () => {

});

test.afterEach(async () => {
});

test('test calculateCost one book', (t) => {
  t.is(calculateCost([1]), 8);
});

test('test calculateCost two book - with discount', (t) => {
  t.is(calculateCost([1, 2]), 15.2);
});
