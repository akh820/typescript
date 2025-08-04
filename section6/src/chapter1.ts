class Employee {
  name: string = "";
  age: number = 0;
  position: string = "";

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("i'm working");
  }
}

//Class는 Type이기 때문에 객체 타입으로 정의도 가능
const employeeC: Employee = {
  name: "aak",
  age: 100,
  position: "top",
  work() {},
};

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const abc = new ExecutiveOfficer("a", 33, "bb", 154);
