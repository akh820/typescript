// any 타입은 어떤 타입이든 허용한다
// 심지어 number 타입에 any타입을 할당하는것도 허용
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

let num: number = 10;
num = anyVar;

// unknown 타입의 값은 어떤 타입의 변수에도 저장할 수 없다

let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

//타입 정제로는 사용가능
// num = unknownVar; // 오류 !
// unknownVar * 2 // 오류!
if (typeof unknownVar === "number") {
	// 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
  unknownVar * 2;
}