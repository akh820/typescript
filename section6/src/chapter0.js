let studentA = {
  name: "안계홍",
  grade: "B-",
  age: 33,
  study() {
    console.log(`공부안함 ${this.grade}`);
  },
  introduce() {
    console.log(`안녕? 나는 ${this.name} 이고 나이는 ${this.age}야!`);
  },
};

class Student {
  name;
  grade;
  age;

  constructor(name = "안계홍", grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  study() {
    console.log(`공부안함 ${this.grade}`);
  }
  introduce() {
    console.log(`안녕? 나는 ${this.name} 이고 나이는 ${this.age}야!`);
  }
}
let studentB = new Student("a");

class StudentDeveloper extends Student {
  skills;

  constructor(skills) {
    super();
    this.skills = skills;
  }
  changeName() {
    this.name = this.skills;
  }
  mySkills() {
    console.log(`내 주력언어야~${this.skills}`);
  }
}
let studentC = new StudentDeveloper("TypeScript");
studentC.mySkills();
studentC.introduce();
