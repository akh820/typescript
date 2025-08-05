// keyOf 연산자
interface Person {
  name: string;
  age: number;
}
let person: Person = {
  name: "망계통",
  age: 33,
};
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}
type NewPerson = typeof person;
let newPerson: NewPerson = {
  name: "안계통",
  age: 31,
};
console.log(getPropertyKey(person, "name"));
console.log(getPropertyKey(person, "age"));
console.log(typeof newPerson);
