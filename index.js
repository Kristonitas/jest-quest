const day0 = require("./src/day0");

console.log("day 0 examples");

["example0", "example1", "task0", "task1", "task2", "task3", "task4"].forEach(
  (functionName) => {
    console.log(`running "${functionName}"`);
    day0[functionName]();
  }
);
