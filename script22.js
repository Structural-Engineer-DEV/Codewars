"use strict";

/*
6 kyu Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

const uniqueInOrder = function (iterable) {
  const output = [];
  const rest = [];
  if (Array.isArray(iterable)) {
    iterable.map((el, i, arr) => {
      if (arr[i] === arr[i - 1]) rest.push(el);
      else output.push(el);
    });
  } else {
    iterable.split("").map((el, i, arr) => {
      if (arr[i] === arr[i - 1]) rest.push(el);
      else output.push(el);
    });
  }
  return output;
};
