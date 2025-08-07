interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    child: {
      name: string;
    };
  };
}
function printAuthorInfo(value: Post["author"]["id"]) {
  console.log(`${value}`);
}
printAuthorInfo(1);

type returnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;
