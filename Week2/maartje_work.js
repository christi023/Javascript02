// STEP 1 MAP, FILTER AND  =>
'use strict';
// 1.1 Rewrite the above doubleOddNumbers function using map and filter; don't forget to use =>.
const oddNumbers = [1, 2, 3, 4];

const newOddNumbers = oddNumbers
  .filter(number => {
    return number % 2 !== 0;
  })
  .map(number => {
    return number * 2;
  });

console.log('The double Odd Numbers are', newOddNumbers); // => [2, 6];

//  2nd example with
let numbers = [1, 2, 3, 4];
//let halves = numbers.map(x => x * 2); */
let numbers1 = numbers.filter(function(number) {
  return number % 2 !== 0;
});

/* 1.2 Write a program that computes how much Maartje has earned by completing these tasks, using map and filter.
For the 'summing part' you can try your luck with reduce; alternatively, you may use forEach or a for loop. 
 Underneath you see a very interesting small insight in Maartje's work: */

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];
//Note: the durations are specified in minutes.

// this is monday hours / duration
const monday_duration = monday.map(monday => monday.duration);
{
  console.log(monday_duration);
}
// this is tuesday hours / duration
const tuesday_duration = tuesday.map(tuesday => tuesday.duration);
{
  console.log(tuesday_duration);
}

const tasks = monday.concat(tuesday);
const rate = 20;
// const tasks = [...monday, ...tuesday]; //spreading the arrays ... to clone
// const x = monday.concat(tuesday);
const salary = tasks
  // Map the tasks to durations in hours

  .map(hours => hours.duration / 60)

  //Filter out everything that took less than two hours (i.e., remove from the collection)
  .filter(long => long >= 2)

  //Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.
  .map(duration => duration * rate)
  .map(euro => {
    return euro.toFixed(2);
  })

  //Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
  .reduce((total, wage) => {
    return total + wage;
    0;
  });

// const tasks = [...monday, ...tuesday]; //example
/*const rate = 20;
const tasksInHour = tasks
  .map(i => i.duration / 60)
  .filter(i => i >= 1)
  .map(i => i * rate)
  .reduce((total, value) => total + value);
  .toFixed(2);

console.log(`€ ${tasksInHour}`);*/

console.log("Maartje's salary for Monday and Tuesday is " + '€' + salary);
