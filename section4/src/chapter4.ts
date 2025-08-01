type Dog = {
  name: string;
  isBark: boolean; // 이게 변경된다면 잘동작안함
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function isAnimal(animal: Animal) {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안짖습니다.");
  } else if (isCat(animal)) {
    console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
  }
}
