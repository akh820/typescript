function sayHello(): void {
  console.log("hello");
}

let abc = sayHello;
console.log(abc);
console.log(abc());
