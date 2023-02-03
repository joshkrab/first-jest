const reverseString = require('./task_01');

// One test:
// test('Опис: перевіряєм реверс рядку', () => {
//   expect(reverseString('hello www')).toBe('www olleh');
// });

// Test case: suite - комплект
describe(
  'My test check',
  () => {
    const testCase = [
      {
        inString: 'hello',
        expected: 'olleh'
      },
      {
        inString: 'blin ha',
        expected: 'ah nilb'
      },
      {
        inString: 'Hello how are You?',
        expected: '?uoY era woh olleH'
      },
    ];

    testCase.forEach(test => {
      // it == test, just shorty
      it(
        `We have string: ${test.inString}, expected: ${test.expected}`,
        () => {
          const res = reverseString(test.inString);
          expect(res).toBe(test.expected)
        }
      )
    })
  }

)