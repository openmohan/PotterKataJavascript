function kCombinations(set, k) {
  let i; let j; let combs; let head; let
    tailcombs;

  if (k > set.length || k <= 0) {
    return [];
  }

  // K-sized set has only one K-sized subset.
  if (k === set.length) {
    return [set];
  }

  // There is N 1-sized subsets in a N-sized set.
  if (k === 1) {
    combs = [];
    for (i = 0; i < set.length; i++) {
      combs.push([set[i]]);
    }
    return combs;
  }

  combs = [];
  for (i = 0; i < set.length - k + 1; i++) {
    // head is a list that includes only our current element.
    head = set.slice(i, i + 1);
    // We take smaller combinations from the subsequent elements
    tailcombs = kCombinations(set.slice(i + 1), k - 1);
    // For each (k-1)-combination we join it with the current
    // and store it to the set of k-combinations.
    for (j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]));
    }
  }
  return combs;
}

function combinations(set) {
  let k; let i; let KCombos;
  const combs = [];

  // Calculate all non-empty k-combinations
  for (k = 1; k <= set.length; k++) {
    KCombos = kCombinations(set, k);
    for (i = 0; i < KCombos.length; i++) {
      combs.push(KCombos[i]);
    }
  }
  return combs;
}

function differenceArray(a1, a2) {
  const a = []; const
    diff = [];

  for (let i = 0; i < a1.length; i++) {
    if (a[a1[i]]) {
      a[a1[i]]++;
    } else {
      a[a1[i]] = 1;
    }
  }

  for (let i = 0; i < a2.length; i++) {
    if (a[a2[i]] > 0) {
      a[a2[i]]--;
    }
  }

  for (let k = 0; k < a.length; k++) {
    if (a[k]) {
      diff.push(k);
    }
  }

  return diff;
}

module.exports = {
  combinations, differenceArray,
};
