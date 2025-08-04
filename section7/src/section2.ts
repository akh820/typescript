// map 직접구현
function map<T, U>(arr: T[], callback: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
console.log(map([1, 2, 3], (it) => (it * 2).toString()));

//forEach 직접구현
const arr2 = [1, 2, 3];
function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach([1, 2, 3], (it) => console.log(it));
