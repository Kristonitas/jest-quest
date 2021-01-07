const {
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
} = require("./day1");

const consoleSpy = require("./consoleSpy");

const console = consoleSpy();

// n random numbers from 0 to 100 (exclusive)
const randomN = (n) =>
  Array.from({ length: n }).map(() => (Math.random() * 100) | 0);

describe("1", () => {
  afterEach(() => {
    console.reset();
  });

  afterAll(() => {
    console.restore();
  });

  test("example0", () => {
    const a = (Math.random() * 100) | 0;
    const b = (Math.random() * 100) | 0;
    const c = (Math.random() * 100) | 0;
    const result = example0(a, b, c);

    // Solution
    const solution = (a, b, c) => {
      console.log(`a: ${a}, b: ${b}, c: ${c}`);
      return a + b * c;
    };

    expect(solution(a, b, c)).toEqual(result);

    // Specific case
    expect(example0(1, 2, 3)).toEqual(7);
    console.log(`a: 1, b: 2, c: 3`);
    expect(example0(1, 1, 1)).toEqual(2);
    console.log(`a: 1, b: 1, c: 1`);
  });

  test("example1", () => {
    const func = jest.fn();
    const result = example1(func);

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith("foo");
    expect(result).toBeUndefined();
  });

  test("example2", () => {
    const result = example2();
    const a = (Math.random() * 100) | 0;
    const b = (Math.random() * 100) | 0;

    // Solution
    const solution = (aa, bb) => aa + bb;

    expect(result(a, b)).toEqual(solution(a, b));

    // Specific case
    expect(result(5, 4)).toEqual(9);
    expect(result(2, 16)).toEqual(18);
  });

  test("example3", () => {
    const result = example3();

    // Solution
    let callCount = 0;
    const solution = () => {
      callCount++;
      console.log(callCount);
      return callCount;
    };

    for (let i = 1; i <= 100; i++) {
      const testedCount = result();
      const expectedCount = solution();
      expect(testedCount).toEqual(expectedCount);
    }
  });

  test("example4", () => {
    const callback = jest.fn();
    // From 2 to 10
    const argCount = (2 + Math.random() * 9) | 0;
    const args = randomN(argCount);

    const result = example4(callback);
    expect(typeof result).toEqual("function");

    expect(result(args)).toBeUndefined();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenLastCalledWith(args.reverse());

    // Specific case

    expect(result(1, 2, 3)).toBeUndefined();
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenLastCalledWith(3, 2, 1);
  });

  test("task0", () => {
    const args = randomN(3);
    const result = task0(...args);

    const solutionA = (a, b, c) => {
      let max = a;
      if (b > max) {
        max = b;
      }
      if (c > max) {
        max = c;
      }
      return max;
    };

    const solutionB = (a, b, c) => {
      return Math.max(a, b, c);
    };

    expect(result).toEqual(solutionA(...args));
    expect(result).toEqual(solutionB(...args));

    // Specific case
    expect(task0(1, 2, 3)).toEqual(3);
    expect(task0(9, 8, 7)).toEqual(9);
  });

  test("task1", () => {
    const argCount = (1 + Math.random() * 5) | 0;
    const args = randomN(argCount);
    const result = task1(...args);

    const solution = (...args) => {
      return Math.max(...args) - Math.min(...args);
    };

    expect(solution(...args)).toEqual(result);

    // Specific case
    expect(task1(5, 21, 13)).toEqual(16);
    expect(task1(10, 100, 12, 25)).toEqual(90);
  });

  test("task2", () => {
    const result = task2();
    const [arg] = randomN(1);
    const solution = (a) => a * 2;

    expect(typeof result).toEqual("function");

    expect(result(arg)).toEqual(solution(arg));

    // Specific case
    expect(result(2)).toEqual(4);
    expect(result(3)).toEqual(6);
    expect(result(4)).toEqual(8);
  });

  test("task2", () => {
    const result = task2();
    const [arg] = randomN(1);
    const solution = (a) => a * 2;

    expect(typeof result).toEqual("function");

    expect(result(arg)).toEqual(solution(arg));

    // Specific case
    expect(result(2)).toEqual(4);
    expect(result(3)).toEqual(6);
    expect(result(4)).toEqual(8);
  });

  test("task3", () => {
    const [a, b] = randomN(2);
    const result = task3(a);

    const solution = (x) => (y) => x + y;

    expect(typeof result).toEqual("function");

    expect(result(b)).toEqual(solution(a)(b));

    // Specific case
    const result0 = task3(5);
    expect(result0(10)).toEqual(15);
    const result1 = task3(-5);
    expect(result1(5)).toEqual(0);
  });

  test("task4", () => {
    const [a] = randomN(1);
    const callback = jest.fn();
    const result = task4(callback);

    expect(typeof result).toEqual("function");

    expect(result(a)).toBeUndefined();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenLastCalledWith(a * a);

    // Specific case
    expect(result(4)).toBeUndefined();
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenLastCalledWith(16);
    expect(result(3)).toBeUndefined();
    expect(callback).toHaveBeenCalledTimes(3);
    expect(callback).toHaveBeenLastCalledWith(9);
  });
});
