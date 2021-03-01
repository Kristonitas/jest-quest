const example0 = () => {
  // Initiating an object
  const a = {};
  const b = new Object();
  const c = { foo: "bar" };

  // Object values can be assigned:
  c.foo = "hello world";
  b.a = "asd";

  // "bar" could be anything that you can assing to a value:
  const number = 321;
  const string = "house";
  const arary = [1, 2, 3];
  const object = {};
  const func = () => {
    console.log("wryyy");
  };

  const everything = {
    number: 321,
    string: "house",
    arary: [1, 2, 3],
    object: {}, // can be another object
    func: () => {
      console.log("wryyy");
    },
  };

  // object keys can be numbers or strings that are determined during the execution of an application
  const todayKey = new Date().toDateString(); // This cant be determined just from code (unlike {a: 123}, where "a" is a fixed key)
  const journal = {
    [todayKey]: "I wrote more stuff to jest-quest today",
  };

  const yesterday = new Date().setHours(new Date().getHours - 1).toDateString();
  journal[yesterday] = "Forget what I wrote";

  // Any array is just an object that has explicit rules for what keys are used and how it is initialised
  const array0 = [0, 1, 2, 3];
  // is roughly same as
  const obj0 = { 0: 0, 1: 1, 2: 2, 3: 3 };

  console.log(array0[1] == obj0[1]);
  console.log(array0["1"] == obj0["1"]);

  // Just like an object, array can be initialised with anything, even mixed types (discouraged usually)
  const array1 = [
    321,
    "house",
    [1, 2, 3],
    {},
    () => {
      console.log("wryyy");
    },
  ];

  // An array also has some utility properties:
  const array2 = [1, 2, 3];
  console.log(array2.length); // 3

  array2.push("foo");
  console.log(array2[3]); // "foo"

  // These utility functions are quite helpful sometimes

  array2.forEach((item) => {
    console.log(item); // 1; 2; 3; "foo"
  });
};

// A function that counts the number of letters in a string
// Example input: "namas", example output: {a: 2, n: 1, m: 1, s: 1}
const task0 = (text) => {};

// A function that returns only even numbers in an array
// Example input: [1, 2, 3, 4], example output:[2, 4]
const task1 = (numbers) => {};

// Flatten an array
// Example input: [[1, 2], 3, [[4], 5, 6]], example output: [1, 2, 3, 4, 5, 6]
const task2 = (arr) => {};
module.exports = {
  task0,
  task1,
};
