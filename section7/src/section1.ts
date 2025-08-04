// 여러개의 변수를 제네릭타입으로 받고싶을때
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

// 다양한 특정요소 배열 타입을 인수로 받는 제네릭 함수를 만들고 싶을때
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}
let num = returnFirstValue([0, 1, 2]);
let str = returnFirstValue([1, "hello", "mynameis"]);

// 특정 프로퍼티를 가지는 인수만 받고 싶을때
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength("123"); // ✅
getLength([1, 2, 3]); // ✅
getLength({ length: 1 }); // ✅
// getLength(undefined); // ❌
// getLength(null); // ❌
