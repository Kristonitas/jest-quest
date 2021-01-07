// A function can have a number of arguments and then return some sort of result
// Log numbers a, b, c
// Return sum of a and product (multiplication) of b and c (first, second and third arguments respectively)
const example0 = (a, b, c) => {
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
  return a + b * c;
};

// A function can also be an argument of a function (sometimes called a callback or a delegate)
// Call the passed function with argument "foo"
// P. S. if a function (example1 in this case) doesn't return anything, it is considered a void function (it returns undefined)
const example1 = (func) => {
  func("foo");
};

// A function can also be returned, like any other variable
// Return a function, that adds two numbers together
// This whole example can be written as const example2 = () => (a, b) => a + b
const example2 = () => {
  // Since this function behaves the same way every time, it can be called a pure function
  const sumFunc = (a, b) => {
    return a + b;
  };

  return sumFunc;
};

// A function can "remember" the environment it was called in (named closure, or function generators)
// Return a function which logs how many times it was called (and also returns it)
const example3 = () => {
  // This can also be called a state variable
  // The returned function now has a state (it doesn't behave the same way every time its called, so its not a pure function any more)
  let callCount = 0;
  const func = () => {
    callCount++;
    console.log(callCount);
    return callCount;
  };
  return func;
};

// A function can accept a indefinete (defined, but unspecified value) of arguments
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// It coverts the arguments from individual variables to a single array, which can be then spread out to individual arguments when calling a function
// Return a function, that calls the callback with reversed order of arguments
const example4 = (callback) => {
  const func = (...args) => {
    const reverseArgs = args.reverse();
    callback(...reverseArgs);
  };
  return func;
};

// In tasks, the arguments won't necessarily be written ahead of time

// Return the biggest number
// There are 3 arguments
const task0 = () => {};

// Reutrn the difference between the highest and the lowest integes
// There can be between 1 and 5 arguments
const task1 = () => {};

// Return a function, that multiplies the argumebt by 2;
const task2 = () => {};

// Return a function, that adds x (argument of task3) to the argument
const task3 = (x) => {};

// Return a function, that calls callback (argument of task4) with the argument squared
const task4 = (callback) => {};

module.exports = {
  example0,
  example1,
  example2,
  example3,
  example4,
  task0,
  task1,
  task2,
  task3,
  task4,
};
