// type alias, 타입 별칭은 고정된 타입을 정의해줄때
// 동일 스코프에 1개밖에 적용못함
// 컴파일시 전부 사라진다
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

//index 시그니쳐는 유연한 타입정의가 가능하도록 한다
type CountryCodes = {
  [key: string]: string | number;
  korea: number;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // (... 약 100개의 국가)
  Brazil : 'bz',
  korea : 400,
};