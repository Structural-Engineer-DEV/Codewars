"use strict";
/*
7 kyu Correct the time-string
A new task for you!

You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
Examples
"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  
If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)
*/

function timeCorrect(timestring) {
  if (timestring == null) {
    //     console.log(null);
    return null;
  } else if (timestring.trim() === "") {
    //     console.log('');
    return "";
  } else if (timestring.length > 8) {
    //     console.log(null);
    return null;
  } else if (
    !/\d/.test(timestring[0]) ||
    !/\d/.test(timestring[1]) ||
    !/\d/.test(timestring[3]) ||
    !/\d/.test(timestring[4]) ||
    !/\d/.test(timestring[6]) ||
    !/\d/.test(timestring[7]) ||
    timestring[2] !== ":" ||
    timestring[5] !== ":"
  ) {
    //     console.log(null);
    return null;
  } else {
    // Split input into separate variables
    let [h, m, s] = timestring.split(":");
    let hours = Number(h);
    let minutes = Number(m);
    let seconds = Number(s);
    // console.log(hour, minutes, seconds);

    // check if 'seconds' variable is >= 60, if yes, then add 1 minute to the 'minutes variabele
    if (seconds >= 60) {
      minutes += 1;
      seconds -= 60;
    } else {
      minutes = minutes;
    }

    // check if 'minutes' variable is >= 60, if yes, then add 1 hour to the 'hour' variable
    if (minutes >= 60) {
      hours += 1;
      minutes -= 60;
    } else {
      minutes = minutes;
    }

    // check if 'hours' variable is >= 24, if yes, then add 1 hour to the
    if (hours >= 24 && hours < 48) {
      hours -= 24;
    } else if (hours >= 48 && hours < 72) {
      hours -= 48;
    } else if (hours >= 72 && hours < 96) {
      hours -= 72;
    }
    seconds = String(seconds).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    hours = String(hours).padStart(2, "0");

    // Rejoin new variables into correct output
    const newTimeString = [hours, minutes, seconds].join(":");
    //     console.log(newTimeString);
    return newTimeString;
  }
}
