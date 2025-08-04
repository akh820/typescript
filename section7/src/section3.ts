// 제네릭 인터페이스
interface KeyPair<K, V> {
  key: K;
  value: V;
}
//generic 인터페이스를 사용할때는 반드시 할당할 타입을 꺽쇠함께 사용
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 3,
};

let keypair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

// 인덱스 시그니쳐
interface NumberMap<V> {
  [key: string]: V;
}

let numberMap1: NumberMap<number> = {
  key: -123,
  key2: 4234,
};

let numberMap2: NumberMap<boolean> = {
  key: true,
  key3: true,
};

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}
function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교`);
}

const developerUser: User<Developer> = {
  name: "안계홍",
  profile: {
    type: "developer",
    skill: "react",
  },
};

const studentUser: User<Student> = {
  name: "안계홍",
  profile: {
    type: "student",
    school: "아주대",
  },
};
