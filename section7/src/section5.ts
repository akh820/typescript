const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    // reject("오류났지롱");
  }, 500);
});

promise
  .then((response) => {
    console.log(response * 20);
  })
  .catch((err) => {
    console.log(err);
  });

interface Post {
  id: number;
  title: string;
  content: string;
}
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    });
  });
}

const postRequest = fetchPost();
postRequest.then((post) => {
  post.id;
});
