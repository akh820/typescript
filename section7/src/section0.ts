function generic<T>(value: T): T {
  console.log(typeof value);
  return value;
}

generic(true);
generic(10);
generic("string");

generic<number>(123);
generic(123 as number);
generic<[number, number, number]>([1, 2, 3]);
