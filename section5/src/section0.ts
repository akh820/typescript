interface Person {
  readonly name: string;
  age?: number;
  sayHi?(): void;
  sayHi?(a: number): void;
  sayHi?(a: number, b: number): void;
}

const person: Person = {
  name: "안계홍",
  age: 33,
};
