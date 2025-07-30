var animal = {
    name: "기린",
    color: "yellow",
};
var dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};
animal = dog; // ✅ OK
var book;
var programmingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs",
};
book = programmingBook; // ✅ OK
// programmingBook = book; // ❌ NO
// 초과 프로퍼티 검사 발동!
// let book2: Book = {
//     name: "한 입",
//     price: 33000,
//     skill: "Reactjs",
// }
var book3 = programmingBook;
console.log(book3);
