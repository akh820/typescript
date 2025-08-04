// 접근 제어자
class Employee {
  // 필드
  //   private name: string;    // ❌
  //   protected age: number;   // ❌
  //   public position: string; // ❌

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

const employee = new Employee("이정환", 27, "devloper");

// employee.name = "홍길동";
// employee.age = 30;
employee.position = "디자이너";

class yee {
  constructor(name: string, position: string) {}
}
const emp = new yee("김개발", "시니어 개발자");
// emp.name은 "김개발", emp.position은 "시니어 개발자"로 초기화됩니다.
