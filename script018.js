"use strict";

/*
7 kyu Find the stray number

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers) {
  const count = {};
  for (const el of numbers) {
    if (count[el]) count[el]++;
    else count[el] = 1;
  }
  return +Object.keys(count).find((e) => count[e] === 1);
}
