let user: {
    id?: number,
    name: string,
    readonly apiKey?: string,
} = {
    id: 1,
    name: "이정환",
    apiKey: "aksdfj",
}

user.apiKey = "abc";