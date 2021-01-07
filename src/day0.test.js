const {
  example0,
  example1,
  task0,
  task1,
  task2,
  task3,
  task4,
} = require("./day0");

const consoleSpy = require("./consoleSpy");

const console = consoleSpy();

describe("0", () => {
  afterEach(() => {
    console.reset();
  });

  afterAll(() => {
    console.restore();
  });

  test("example0", () => {
    example0();

    // Solution
    console.log("Hello World!");
  });

  test("example1", () => {
    example1();

    // Solution
    for (let i = 1; i <= 47; i++) {
      console.log(i);
    }
  });

  test("task0", () => {
    task0();

    // Solution
    console.log("a");
    console.log("b");
    console.log("c");
    console.log(1);
    console.log(2);
    console.log("3");
  });

  test("task1", () => {
    task1();

    // Solution
    console.log("something");
    console.error("error");
  });

  test("task2", () => {
    task2();

    // Solution
    for (let i = 1; i <= 50; i++) {
      console.log(i * 2);
    }
  });

  test("task3", () => {
    task3();

    // Solution
    let str = "";
    for (let i = 0; i < 26; i++) {
      str += (i + 10).toString(36);
    }
    console.log(str);
  });

  test("task4", () => {
    task4();

    // Solution
    for (let i = 1; i <= 100; i++) {
      let str = "";
      if (i % 3 === 0) {
        str += "Fizz";
      }
      if (i % 5 === 0) {
        str += "Buzz";
      }
      if (!str) {
        str = "" + i;
      }
      console.log(str);
    }
  });
});
