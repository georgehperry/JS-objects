// ES6 Classes + Inheritence
var date = new Date();
var year = d.getFullYear();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  yob = () => year - this.age;
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}

const t1 = new Teacher("Mr. S", 50, "Dance");

// ------------------------------------------------------------------------ //
//ES5 Objects + Inheritence
function Person2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person2.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

function Employee(firstName, lastName, empID) {
  Person2.call(this, firstName, lastName);
  this.employeeID = employeeID;
}
Employee.prototype = Object.create(Person2.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getEmployeeInfo = function() {
  return [this.employeeID, this.firstName, this.lastName];
}

let e1 = new Employee("Adam", "Asif", 365);


// --------------------------------------------------------------------------------- //
//Object literals
let x = {
  firstName: 'hugo',
  weight: 85,
  height: 1.80,
  greeting: function() {
    return `Hello ${this.firstName}`
  }
};
x.lastName = 'prince';

Object.defineProperty(x, "age", {
    writable: true,
    enumerable: true,
    configurable: false,
    value: 39
});

let y = {
  firstName: 'kushri',
  weight: 65,
  height: 1.70
};

const bmi = (w, h) => w / (h * h);

const xBmi = bmi(x.weight, x.height);


// --------------------------------------------------------------------------------- //
//New Object/Constructor
function BmiData(w, h, z) {
  this.w = w;
  this.h = h;
  this.z = z;
  this.bmi = () => this.w / (this.h * this.h);
}

const salva = new BmiData(65, 1.49, {
  a: "yellow",
  b: "ox"
});

// --------------------------------------------------------------------------------- //
