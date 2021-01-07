Install

`$ npm i`

Test

`$ npm run test`

Check the output/logs of the tasks

`$ npm start`

The tasks will be named "day0.js", "day1.js"... Partial or full solution can be seen in the test files "day0.test.js", "day1.test.js"...

Expected output when finished (day0 example):

```
$ npm run test

> jest-quest@1.0.0 test jest-quest
> jest

 PASS  src/day0.test.js
    √ example0 (3 ms)
    √ example1 (5 ms)
    √ task0 (1 ms)
    √ task1 (1 ms)
    √ task2 (3 ms)
    √ task3
    √ task4 (7 ms)

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        1.295 s
Ran all test suites.
```

A specific test day can be checked

`$ npm run test -- day1`

Or even a specific task

`$ npm run test -- day1 --testNamePattern task4`
