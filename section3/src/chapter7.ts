/*

*/

type Person = {
    name: string,
    age: number,
}
function typeNarrow(value : string | number | null | Date | Person){
    if(typeof value === "string"){
        console.log(value.toUpperCase());
    } else if(typeof value === "number"){
        console.log(value.toFixed());
    } else if(value instanceof Date){
        console.log(value.getTime());
    } else if(value && "name" in value){
        console.log(`${value.name}은 ${value.age} 살입니다.`)
    }
}

typeNarrow('abc');
typeNarrow(123);
typeNarrow(new Date());
typeNarrow({ name: "abc", age: 17});
