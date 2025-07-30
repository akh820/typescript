let a = 10;
// number 로 타입 추론

let b = "hello";
// string 으로 타입 추론

let c = {
    id:1,
    name:"안계홍",
    profile: {
        nickname: "akh",
    },
    urls: ["https://akh.com"],
}

let { id, name, urls } = c;
let [one, two, three] = [1, "hello", true];

function func(){
    return "hello";
}

function func1(parameter = ""){
    return "hello";
}
