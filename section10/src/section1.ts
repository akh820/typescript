type StringNumberSwitch<T> = T extends number ? string : number;

let c: StringNumberSwitch<number | string>;
// string | number

type Exclude<U, T> = U extends T ? never : U;
type A = Exclude<number | string | boolean, string>;

type Extract<U, T> = U extends T ? U : never;
type B = Extract<number | string | boolean, string>;
