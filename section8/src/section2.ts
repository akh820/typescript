// 맵드 타입 (Mapped Type)
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type UserWithOptionalAge = Omit<User, keyof User> & {
  age?: number;
};

// type boolean = {
//   [key in keyof User]?: boolean;
// };

function fetchUser(): User {
  return {
    id: 1,
    name: "안계홍",
    age: 33,
  };
}

function updateUser(user: User) {
  // 내부 로직
}
// 나이만 수정하고 싶은데 다수정해야함
updateUser({
  id: 1,
  name: "안계홍",
  age: 25,
});
