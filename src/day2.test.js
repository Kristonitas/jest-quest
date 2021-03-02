const { task0, task1, task2 } = require("./day2");
const faker = require("faker");

describe("2", () => {
  test("task0", () => {
    const solution = (text) => {
      const count = {};
      text.split("").forEach((letter) => {
        const currentCount = count[letter] || 0;
        count[letter] = currentCount + 1;
      });
      return count;
    };

    const text = faker.random.words(5);
    // 4 spaces between words
    expect(task0(text)[" "]).toEqual(4);
    expect(task0(text)).toEqual(solution(text));
  });

  test("task1", () => {
    const solution = (numbers) => {
      return numbers.filter((number) => number % 2 === 0);
    };

    const numbers = Array.from({ length: 100 }).map(
      () => (Math.random() * 100) | 0
    );

    expect(task1([12, 23])).toEqual([12]);
    expect(task1(numbers)).toEqual(solution(text));
  });

  test("task2", () => {
    const solution = (arr) => {
      const iterate = (node, accumulator) => {
        if (Array.isArray(node)) {
          node.forEach((item) => iterate(item, accumulator));
        } else {
          accumulator.push(node);
        }
        return accumulator;
      };

      return iterate(arr, []);
    };

    const generateNestedArray = () => {
      const iterate = (depth, i) => {
        if (Math.random() > depth / 5) {
          return Array.from({
            length: (Math.random() * 3 + 4 - depth) | 0,
          }).map(() => iterate(depth + 1, i));
        } else {
          return i.i++;
        }
      };

      const i = { i: 0 };
      return Array.from({
        length: 5,
      }).map(() => iterate(1, i));
    };

    const nestedArray = generateNestedArray();
    console.log(JSON.stringify(nestedArray, null, 2));

    expect(solution([[1], [2], 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(solution([[[1, 2, 3, 4, 5]]])).toEqual([1, 2, 3, 4, 5]);
    expect(task2(numbers)).toEqual(solution(text));
  });
});
