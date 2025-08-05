class List<T> {
  constructor(public arr: T[]) {}
  push(data: T) {
    this.arr.push(data);
  }
  pop() {
    this.arr.pop();
  }
  print() {
    console.log(this.arr);
  }
}

const stringList = new List([1, 2, 3]);
const numberList = new List(["1", "2", "3"]);

stringList.pop();
stringList.push(4);
stringList.print();
numberList.pop();
numberList.push("4");
numberList.print();
