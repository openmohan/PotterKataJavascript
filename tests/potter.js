const test = require('ava');
const { calculateBestPrice } = require('../src/potter');

test.beforeEach(async () => {

});

test.afterEach(async () => {
});

test('test calculateCost one book- first book', (t) => {
  t.is(calculateBestPrice([1]), 8);
});

test('test calculateCost two book - first and second - with discount', (t) => {
  t.is(calculateBestPrice([1, 2]), 15.2);
});

test('test calculateCost 5 books - all combination - with discount', (t) => {
  t.is(calculateBestPrice([1, 2, 3, 4, 5]), 30);
});

test('test calculateCost 8 books {firstBook:2, secondBook: 2, thirdBook: 3 , fouthBook: 1, fifthBook: 1} - with discount', (t) => {
  t.is(calculateBestPrice([1, 1, 2, 2, 3, 3, 4, 5]), 51.2);
});

// todo: split the array to multiple arrays (baskets) for optimum discounts
