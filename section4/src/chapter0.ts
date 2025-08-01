//일반함수 정의
function func(a: number, b: number): number {
  return a + b;
}

//화살표 함수 정의
const add = (a: number, b: number): number => {
  return a + b;
};

function introduce(name = "안계홍", tall?: number) {
  console.log(`이름 : ${name}`);
  if (typeof tall === "number") {
    console.log(`키 : ${tall + 10}`);
  }
}

introduce();
introduce("", 155);

//rest 매개변수는 맨 마지막에 써야함
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((e) => (sum += e));
  return sum;
}

console.log(getSum(1, 2, 3, 4));
