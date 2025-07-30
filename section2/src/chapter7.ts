// 보이드 타입 예시
function func2(): void {
  console.log("hello");
}

// never 타입 예시1
function func3(): never {
  while (true) {}
}

// never 타입 예시2
function func4(): never {
  throw new Error();
}
