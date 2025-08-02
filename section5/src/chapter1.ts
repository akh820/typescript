interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  isBark: boolean;
}
interface Cat extends Animal {
  isScratch: boolean;
}
interface Chicken extends Animal {
  isFly: boolean;
}
