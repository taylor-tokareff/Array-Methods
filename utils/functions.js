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
