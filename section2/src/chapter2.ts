let numArr: number[] = [1, 2, 3]
let strArr: string[] = ["hello", "im", "winterlood"];

//아래와 같은 방식으로도 타입정의 가능
let boolArr: Array<boolean> = [true, false, true];

//다양한 타입의 요소를 가질때
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 가질때
let doubleArr : number[][] = [
  [1, 2, 3], 
  [4, 5],
];

//tuple
let tup1: [number, number] = [1, 2];
//다양한 타입의 tuple
let tup2: [number, string, boolean] = [1, "hello", true];

//tuple은 결국 배열이기 때문에 배열 메서드를 조심해야한다.
let tup3: [number, number] = [1, 2];

tup1.push(1);
tup1.push(1);
tup1.push(1);
tup1.push(1);

//tuple 사용 예시
const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
//   [5, "조아무개"], // 오류 발생
];
