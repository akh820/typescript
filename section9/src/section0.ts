interface Post {
  title: string;
  content: string;
  tags?: string;
}
type Partial<T> = {
  [key in keyof Post]?: Post[key];
};

let partialPost: Partial<Post> = {
  title: "string",
  content: "string",
  tags: "string",
};

type Required<T> = {
  [key in keyof Post]-?: Post[key];
};
let requiredPost: Required<Post> = {
  title: "string",
  content: "string",
  tags: "string",
};
type Readonly<T> = {
  readonly [key in keyof Post]: Post[key];
};
let readonlyPost: Readonly<Post> = {
  title: "string",
  content: "string",
  tags: "string",
};

// readonlyPost.title = "abc";
