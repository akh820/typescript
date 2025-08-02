type Person = {
  name: string;
};

// type Person = {
//   age: string;
// };

interface Human {
  name: string;
}

interface Human {
  age: number;
}

interface Dragon {
  name: string;
}

interface Dragon {
  // 충돌 허용 X
  //   name: number;
  age: number;
}
