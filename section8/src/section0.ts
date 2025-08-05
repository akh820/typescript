type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];
const post: PostList[999] = {
  title: "제목",
  content: "내용",
  author: {
    id: 1,
    name: "안계홍",
  },
};
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
// number
type Tup1 = Tup[1];
// string
type Tup2 = Tup[2];
// boolean
type Tup3 = Tup[number];
// number | string | boolean
// function printAuthorInfo(author: PostList[number]) {
//   //   console.log(`${author.id} - ${author.name}`);
//   console.log(`${author}`);
// }
// printAuthorInfo(
//     title: "string",
//   content: "string",
//   author: {
//     id: 1,
//     name: "string",
//   }
// );
