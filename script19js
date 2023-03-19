"use strict";

/*
6 kyu Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

// complete the function
function solution(string) {
  if (string === null) return string;
  if (string.match(/[A-Z]/g))
    return string.replace(/[A-Z]/g, function (matched) {
      return ` ${matched}`;
    });
  else return string;
}
