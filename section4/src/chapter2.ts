// 함수 타입 호환성

// 1. 반환값 타입이 호환이 되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// 안되는 이유는 넘버 리터럴타입은 넘버 타입의 서브타입이기 때문에 다운캐스팅 할 수 없다
// b = a;
// 2. 매개변수의 타입 호환이 되는가?
// 2-1 매개변수의 개수가 같을때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = () => 10;
let d: D = () => 10;

// c = d;
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // 결과 1: 허용안됨
// 매개변수가 같을때는 다운 캐스팅만 허용된다.
// animalFunc를 dogFunc로 대체 할 수 없다.

dogFunc = animalFunc; // 결과 2: 허용됨
// dogFunc에 animalFunc를 넣어도 모두 동작한다.

// 2-2 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = () => {};
let func2: Func2 = () => {};

func1 = func2; // 결과1: 호환됨
// Func2는 Func1의 타입을 대체가능
// func2 = func1; // 결과2: 호환안됨
// Func1은 Func2의 타입을 대체 불가능
