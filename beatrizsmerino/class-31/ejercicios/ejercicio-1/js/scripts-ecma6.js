/**
 * @file scripts-ecma6
 * @description Exercise POO with Ecma 6
 * @author Beatriz Sopeña Merino <beatrizsmerino@gmail.com>
 * @copyright (2020)
 */




/**
 * @constant
 * @description Styles for console.log...
 * @type {Object}
 */
const consoleStyles = {
	"info": "padding: 0.2rem 0.5rem; background-color: #454545;",
	"person": "padding: 0.2rem 0.5rem; background-color: #5E7489;",
	"student": "padding: 0.2rem 0.5rem; background-color: #597A5F;",
	"professor": "padding: 0.2rem 0.5rem; background-color: #7A7959;"
};



/**
 * @class Person
 * @classdesc Create the Person class name, age and gender properties, and the method obtDetalles (), which shows the person's properties on the screen.
 * @param {String} name - Person name
 * @param {Number} age - Person age 
 * @param {String} gender - Person gender
 * @see Used in: {@link anonimFunctionAutoExecuted}
 */
class Person {
	constructor(name, age, gender) {
		this._name = name;
		this._age = age;
		this._gender = gender;
	}

	get name() {
		return this._name;
	}
	set name(name) {
		this._name = name;
	}

	get age() {
		return this._age;
	}
	set age(age) {
		this._age = age;
	}

	get gender() {
		return this._gender;
	}
	set gender(gender) {
		this._gender = gender;
	}

	details() {
		return console.log(`Nombre: ${this._name} \nEdad: ${this._age} \nGénero: ${this._gender}`);
	}

	static hello() {
		console.log("Hola!");
	}
}



/**
 * @class Student
 * @classdesc Create the Student class, which inherits from Persona, and includes the course and group properties and the register () method, which shows the result on the screen.
 * @param {String} name - Person name
 * @param {Number} age - Person age
 * @param {String} gender - Person gender
 * @param {String} course - Student course
 * @param {Number} group - Student group
 * @see Used in: {@link anonimFunctionAutoExecuted}
 */
class Student extends Person {
	constructor(name, age, gender, course, group) {
		super(name, age, gender);
		this._course = course;
		this._group = group;
	}
	register() {
		/* 
			this.details();
			Access the function details of the person class
			but if we had a function with the same name within this class
			access it and not the class Person.
			Its better use super.details();
		*/
		super.details();
		return console.log(`Curso: ${this._course} \nGrupo: ${this._group}`);
	}

	static hello() {
		super.hello();
		return console.log("Buenos dias profesor!!");
	}
}



/**
 * @class Professor
 * @classdesc Create the Teacher class, which inherits from Persona, and includes the subject and level properties and the assign () method, which shows the result on the screen.
 * @param {String} name - Person name
 * @param {Number} age - Person age
 * @param {String} gender - Person gender
 * @param {String} subject - Professor subject
 * @param {Number} level - Professor level
 * @see Used in: {@link anonimFunctionAutoExecuted}
 */
class Professor extends Person {
	constructor(name, age, gender, subject, level) {
		super(name, age, gender);
		this._subject = subject;
		this._level = level;
	}

	assing() {
		super.details();
		return console.log(`Asignatura: ${this._subject} \nNivel: ${this._level}`);
	};

	static hello() {
		super.hello();
		return console.log("Buenos dias alumnos!!");
	}
}



/**
 * @function anonimFunctionAutoExecuted
 * @description Create the objects and test cases necessary to verify the correct operation of the class hierarchy.
 */
(function () {

	/**
	* @function testPerson
	*/
	(function () {

		/* 
		 * class === function
		 */
		console.log("typeof Person", typeof Person);

		/* 
		 * Instace of class person
		 */
		console.group("%cPerson", consoleStyles.person);
			/* 
			 * Check function static
			 */
			Person.hello();


			/**
			 * Person 1
			 */
			let person1 = new Person();
			person1.name = "Beatriz";
			person1.age = 26;
			person1.gender = "femenino";
			// console.log(person1.name);
			// console.log(person1.age);
			// console.log(person1.gender);

			person1.details();


			/**
			 * Person 2
			 */
			let person2 = new Person("Juan", 20, "masculino");
			person2.details();
		console.groupEnd();

	})();


	/**
	 * @function testStudent
	 */
	(function () {

		console.group("%cStudent", consoleStyles.student);

			/**
			 * Person 3
			 * Student 1
			 */
			let student1 = new Student("Paco", 30, "masculino", "Master Fullstack de Javascript y node.js", 1);
			Student.hello();
			student1.register();

		console.groupEnd();

	})();


	/**
	 * @function testProfessor
	 */
	(function () {

		console.group("%cProfessor", consoleStyles.professor);

			/**
			 * Person 4
			 * Professor 1
			 */
			let professor1 = new Professor("Ulises Gascon", 28, "masculino", "Javascript", 1);
			Professor.hello();
			professor1.assing();

		console.groupEnd();

	})();

})();