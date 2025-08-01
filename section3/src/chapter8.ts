type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};
type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};
type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  switch (user.tag) {
    case "ADMIN":
      console.log(`${user.kickCount}는 3`);
      break;
    case "MEMBER":
      console.log(`${user.point}점수`);
      break;
    case "GUEST":
      console.log(`${user.visitCount}는 30회`);
      break;
  }
}
