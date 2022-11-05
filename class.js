class Car {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }
}
let myNewCar = new Car("black", "bmw", "x3");
let myNextCar = new Car("red", "tesla", "model3");
console.log(myNewCar);
console.log(myNextCar);
console.log(typeof Car);

let User = class {
  sayHello() {
    console.log("Hello!");
  }
};
new User().sayHello();

class Man {
  #gender; // приватное поле используется только внутри класса
  constructor() {
    this.#gender = "man";
  }
  getGender() {
    //getter(get) может выводить приватное поле
    return this.#gender;
  }
}
let newPerson = new Man();
console.log(newPerson.getGender());

class Pet {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
  set city(newCity) {
    this._city = newCity;
  }
  get city() {
    return this._city;
  }
}

const bobik = new Pet("Bobik", "Belgrade");
console.log(bobik.city);
bobik.city = "NoviSad";
console.log(bobik.city);

class Student {
  constructor(studentName, yearOfstart) {
    this.studentName = studentName;
    this.yearOfstart = yearOfstart;
  }
  greetings() {
    console.log(`Hi, happy to see you ${this.studentName}`);
  }
}

class ManualStudents extends Student {
  //extends расширяет класс
  constructor(studentName, yearOfstart, gender) {
    super(studentName, yearOfstart);
    this.gender = gender;
  }
}

let student = new ManualStudents("Petr Petrov", 2020, "male");
console.log(student);
console.log(student.greetings());
