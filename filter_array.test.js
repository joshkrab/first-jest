const filterArray = require('./task_02');

describe(
  'We filter the array',
  () => {
    const testCases = [
      {
        in: [0, 1, 2, 3, 4],
        expected: [0, 2, 4]
      },
      {
        in: [true, false, true, false, true, false],
        expected: [true, true, true]
      },
    ];

    testCases.forEach(test => {
      it(
        'description',
        () => {
          const res = filterArray(test.in);
          // toEqual - for arrays and objects:
          expect(res).toEqual(test.expected);
        }
      )
    })
  }
)