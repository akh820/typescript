type Person = {
    name: string;
    age: number;
};

// 타입스크립트는 아래와 같은 경우를 허락하지 않음
// let person: Person = {};
// person.name = "";
// person.age = 23;

let person = {} as Person;
person.name = "";
person.age = 23;

/*
타입 단언의 조건
A가 B의 슈퍼타입이거나
A가 B의 서브타입이어야 한다.
 */
let num1 = 10 as number;
let num2 = 10 as unknown;
// let num3 = 10 as string;

// const 단언
let num4 = 10 as const; // 10 Number Literal 타입으로 단언

let cat = {
    name: "야옹",
    color: "yellow",
} as const; // 사용시 프로퍼티 readonly를 갖도록 함

// non null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
};

const len: number = post.author!.length;