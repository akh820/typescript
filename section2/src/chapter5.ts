//enum 은 특정값을 고정적으로 사용하고싶을떄 사용?
//숫자형 enum가 문자형 enum이 있다.
//숫자형은 할당하지 않았을시 0부터 1씩증가, 중간에 할당했을시
//할당되지않은곳부터 0씩 증가하다가 할당된값으로 변하고 거기서부터다시 1씩증가한다
//숫자형은 자동증가되지 않고 각 멤버에 문자열 값을 직접할당

enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, // 0
  language: Language.korean,// "ko"
};
