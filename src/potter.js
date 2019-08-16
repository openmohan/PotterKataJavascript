const price = 8;

const discount = [1, 0.95, 0.9, 0.8, 0.75];

const isBooksRemaining = (books) => {
    if (books.length <= 0) {
        return false;
    }
    if (Math.max(...books) === 0) {
        return false;
    }
    return true;
};

// transforms array to another format for easier processing
// eg: first book - 2, second book - 2, third book - 1 = [1,1,2,2,3] to [2,2,1]
function transform(arr) {
    const p = {};
    arr.forEach((a) => {
        if (!p[a]) {
            p[a] = 1;
        } else {
            p[a]++;
        }
    });

    const keys = Object.keys(p);

    const arrayNew = [];

    keys.forEach((key) => {
        arrayNew[key] = p[key];
    });

    for (let i = 0; i < arrayNew.length; i++) {
        if (!arrayNew[i]) {
            arrayNew[i] = 0;
        }
    }
    arrayNew.shift();
    return arrayNew;
}


function calculateCost(books) {
    let totalPrice = 0;
    const booksArray = transform(books);
    do {
        let count = 0;
        const min = Math.min.apply(null, books.filter(Boolean));

        booksArray.forEach((book, i) => {
            if (book > 0) {
                booksArray[i] -= min;
                count += 1;
            }
        });
        totalPrice += min * discount[count - 1] * price * count;
    } while (isBooksRemaining(booksArray));

    return totalPrice;
}

console.log(calculateCost([1, 2]));

module.exports = {
    calculateCost,
};
