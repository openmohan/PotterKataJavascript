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

// todo: split the array to multiple arrays (baskets) for optimum discounts
test('test calculateCost 8 books - with discount', (t) => {
  t.is(calculateCost([1, 1, 2, 2, 3, 3, 4, 5]), 51.6);
});
