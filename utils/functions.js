export function callback3000(array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    newArray[i] = callback(array[i]);

  }
  return newArray;
}


// var i;
// for (i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }