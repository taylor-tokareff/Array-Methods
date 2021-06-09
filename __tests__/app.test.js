import { callback3000, truthy3000 } from '../utils/functions.js';


describe('array methods', () => {

  test('Takes an Array and callback of signature item => {} and creates a new Array with the return value of each called callback.', () => {

    const array = [1, 2, 3];
    const actual = callback3000(array, (num) => num + 1);
    expect(actual).toEqual([2, 3, 4]);

  });

  test('Takes an Array and callback of signature item => {} and creates a new Array with all items whose callback returned true or a truthy value.', () => {

    const array = ['tom', 'timmy', 7, 'larry', undefined, true, 'billy'];
    const parameters = (item) => {
      return item[0] === 't';
    };

    const actual = truthy3000(array, parameters);
    expect(actual).toEqual(['tom', 'timmy']);

  });








});
