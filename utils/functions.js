export function callback3000(array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray[i] = callback(array[i]);

  }
  return newArray;
}


export function truthy3000(array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if ((array[i] !== undefined) && callback(array[i]))
      newArray[newArray.length] = array[i];

  }
  return newArray;
}

export function thingy3000(array, callback) {


  for (let i = 0; i < array.length; i++) {
    if ((array[i] !== undefined) && callback(array[i])) return i;



  }
  return -1;
}

export function reducer3000(array, callback, initialValue) {

  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
}

export function everynator3000(arr, callback) {
  for (const item of arr) {
    if (item && !callback(item)) return false;
  }
  return true;
}
