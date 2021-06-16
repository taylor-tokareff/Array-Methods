import { callback3000, truthy3000, thingy3000, reducer3000, everynator3000 } from '../utils/functions.js';


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


  test('Takes an Array and callback of signature item => {} and returns the index of the first item whose callback returns true or a truthy value.', () => {

    const array = ['tom', 'timmy', 7, 'larry', undefined, true, 'billy'];
    const parameters = (item) => {
      return item.charAt(0) === 't';
    };

    const actual = thingy3000(array, parameters);
    expect(actual).toEqual(0);

  });

  test('Takes an Array and callback of signature (accumulator, item) => {} and an (optional) second initialValue parameter that is the initial value of the accumulator. After each function call, the return value is passed as the accumulator argument of the next function call.', () => {

    const array = [1, 2, 3];
    const initialValue = 0;
    const callback = (accumulator, item) => item * 2 + accumulator;

    const actual = reducer3000(array, callback, initialValue);
    const actual2 = array.reduce((acc, item) => {
      return item * 2 + acc;
    }, 0);
    expect(actual).toEqual(12);
    expect(actual2).toEqual(12);


  });

  test('Takes an Array and callback of signature item => {} and returns an overall true value if all callback return true or a truthy value', () => {

    const array = [6, 7, 8];
    const falseArray = [4, 7, 8];

    const truthy = everynator3000(array, num => num > 5);

    const falsy = everynator3000(falseArray, num => num > 5);

    expect(truthy).toBeTruthy();
    expect(falsy).toBeFalsy();
  });

});


