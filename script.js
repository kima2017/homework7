//1.

class Author {
	constructor(name, email, gender){
		this.name = name;
		this.email = email;
		this.gender = gender;
	}

	get name() {
		return this._name;
	}
	set name(value) {
		this._name = value;
	}

	get email() {
		return this._email;
	}
	set email(value) {
		this._email = value;
	}

	get gender() {
		return this._gender;
	}
	set gender(value) {
		this._gender = value;
	}

toString() {
        return `(${this.name}, ${this.email})`;
    }
}

let Author1 = new Author("johh", "test@mail.ru", "male");
let Author2 = new Author("anna", "tes@mail.ru", "female");

Author2.toString();

class Book {
	constructor(title, author, price, quantity){
		this.title = title;
		this.author = author;
		this.price = price;
		this.quantity = quantity;
	}
	get title() {
		return this._title;
	}
	set title(value) {
		this._title = value;
	}

	get author() {
		return this._author;
	}
	set author(value) {
		this._author = value;
	}

	get price() {
		return this._price;
	}
	set price(value) {
		this._price = value;
	}

	get quantity() {
		return this._quantity;
	}
	set quantity(value) {
		this._quantity = value;
	}
	getProfit () {
		return this.price * this.quantity;
}
toString () {
        return `(${this.title}, ${this.price})`;
    }
}

let Book1 = new Book("my life", "John", 50, 12);
let Book2 = new Book("my life", "John", 60, 15);

console.log(Book1.getProfit());
console.log(Book2.getProfit());
console.log(Book1.toString());

//2

class Account {
	constructori(id, name, balance) {
		this.id = id;
		this.name = name;
		this.balance = balance;
		this.amount = amount;
	}

	get id() {
		return this._id;
	}

	get name() {
		return this._name;
	}	
	set name(value) {
		this._name = value;
	}

	get balance() {
		return this._balance;
	}
	set balance(value) {
		this._balance  = value;
	}

	credit(amount) {
		if(amount <= 0 || isNaN(amount)) {
			throw new Error("Invalid amount, please enter a positive number");
		}
		this._balance += amount;
		return this.balance;
	}
	debit(amount) {
		if(amount > this.balance) return "Amount exceeded balance";
		this.balance -= amount;
		return amount;
	}
	transferTo(acc, amount) {
		if(amount > this.balance) return "Amount exceeded balance";
		acc.credit(this.debit(amount));
		return this.balance;
	}

	static identifyAccounts(accountFirst, accountSecond) {
		for(let k in accountFirst) {
			if(accountFirst[k] != accountSecond[k]) {
				return `${accountFirst.name} and ${accountSecond.name} are not the same.`;
			}
		}
		return `${accountFirst.name} and ${accountSecond.name} are the same.`;
	}

	toString() {
		return `id: ${this.id}, name: ${this.name}, balance: ${this.balance}`;
	}

//3 
class Person {
	constructor(firstName, lastName, gender, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.age = age;
	}
}
	get firstName() {
		return this._firstName;
	}
	set firstName(value) {
		this._firstName = value;
	}

	get lastName() {
		return this._lastName;
	}
	set lastName(value) {
		this._lastName = value;
	}

	get gender() {
		return this._gender;
	}
	set gender(value) {
		this._gender = value;
	}

	get age() {
		return this._age;
	}
	set age(value) {
		this._age = value;
	}

	toString() {
		return `I'm ${this.firstName} ${this.lastName}.\nI'm a ${this.age} year old ${this.gender}`;
	}

class Student extends Person {
	constructor(firstName, lastName, gender, age, program, year, fee) {
		super(firstName, lastName, gender, age);
		this.program = program;
		this.year = year;
		this.fee = fee
	}

	get program() {
		return this._program;
	}
	set program(value) {
		if(!Array.isArray(value)) this._program = [value];
		this._program = value;
	}

	get year() {
		return this._year;
	}

	set year(value) {
		this._year = value;
	}

	get fee() {
		return this._fee;
	}
	set fee(value) {
		this._fee = value;
	}

passExam(subject, grade) {
	if(grade >=50) {
		this.program.splice(this.program.indexOf(subject), 1);
	}
	if(!this.program.length) this.year++;
}
toString() {
		return `${super.toString()}\nIn ${this.year} I study ${this.program.join(", ")}.\nMy yearly fee is $${this.fee}`;
	}
}
class Teacher extends Person {
	constructor(firstName, lastName, gender, age, program, pay) {
		super(firstName, lastName, gender, age);
		this.program = program;
		this.pay = pay
	}

	get program() {
		return this._program;
	}
	set program(value) {
		this._program = value;
	}

	get pay() {
		return this._pay;
	}
	set pay(value) {
		this._pay = value;
	}

	toString() {
		return `${super.toString()}\nI teach ${this._program} and my monthly wage is $${this._pay}`;
	}	
}