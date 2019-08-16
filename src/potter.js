const price = 8;

function calculateCost(books) {
  let totalCost = 0;
  for (let i = 0; i < books.length; i++) {
    totalCost += 1 * price;
  }

  return totalCost;
}

module.exports = {
  calculateCost,
};
