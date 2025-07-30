type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = { // ✅
  name: "",
  color: "",
};

let union2: Union1 = { // ✅
  name: "",
  language: "",
};

let union3: Union1 = { // ✅
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = { // ❌
//   name: "",
// };

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};

//원시타입끼리 교집합 하면 대부분 never
let variable: string & number;