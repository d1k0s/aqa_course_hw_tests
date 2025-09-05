class Employee {
  // Ваш код
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (value.length >= 2 && value.length <= 50 && /^[a-zA-Z\s]+$/.test(value)) {
      this._firstName = value;
    } else throw Error;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (value.length >= 2 && value.length <= 50 && /^[a-zA-Z\s]+$/.test(value)) {
      this._lastName = value;
    } else throw Error;
  }

  get profession() {
    return this._profession;
  }
  set profession(value) {
    if (value.trim().length !== 0 && /^[a-zA-Z\s]+$/.test(value)) {
      this._profession = value
    } else throw Error
  }

  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (value > 0 && value < 10000 && typeof value === 'number' ) {
      this.#salary = value;
    } else throw Error;
  }


  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const worker = new Employee("Valera", "Valerov", "IT", 228);
console.log(worker.salary);

class Company {
  // Ваш код
  #employees;
  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = [];
  }
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }

  get phone() {
    return this._phone;
  }
  set phone(value) {
    this._phone = value;
  } 

  get address() {
    return this._address;
  }
  set address(value) {
    this._address = value;
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else if (employee != {}) throw Error
  }

  getEmployees() {
    return this.#employees
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`
  }

  findEmployeeByName(firstName) {
    const findEmployee = this.#employees.find(el => el.firstName === firstName);
    if (findEmployee) return findEmployee;
    else throw Error;
  }

  removeEmployee(firstName) {
    const findEmployee = this.#employees.find(el => el.firstName === firstName);
    if (findEmployee) {
      this.#employees.splice(this.#getEmployeeIndex(firstName), 1)
    } else throw Error;
  }

  #getEmployeeIndex(firstName) {
    const findIndexByName = this.#employees.findIndex(el => el.firstName === firstName);
    if (findIndexByName) return findIndexByName
  }

  getTotalSalary() {
    return this.#employees.reduce((acc, el) => acc + el.salary, 0)
  }
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
company.removeEmployee('John');
console.log(company.getEmployees());



export { Employee, Company };
