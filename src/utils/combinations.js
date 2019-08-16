// taken from : https://gist.github.com/axelpale/3118596

/**
 * Copyright 2012 Akseli Palén.
 * Created 2012-07-15.
 * Licensed under the MIT license.
 *
 * <license>
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files
 * (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * </lisence>
 *
 * Implements functions to calculate combinations of elements in JS Arrays.
 *
 * Functions:
 *   k_combinations(set, k) -- Return all k-sized combinations in a set
 *   combinations(set) -- Return all combinations of the set
 */

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
