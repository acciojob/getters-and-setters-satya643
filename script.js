// Person, Student, Teacher implementation

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // setter for name
  set name(newName) {
    this._name = newName;
  }

  // getter for age
  get age() {
    return this._age;
  }

  // setter for age
  set age(newAge) {
    this._age = newAge;
  }
}

class Student extends Person {
  study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this._name} is teaching`);
  }
}

// expose to global scope for tests
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
