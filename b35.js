'use strict' ; 

class Person {
	constructor (firstName, lastName) {
		this.firstName = firstName ; 
		this.lastName = lastName ; 
	} ; 

	sayHello () {
		console.log(this.firstName + this.lastName) ; 
	} ; 
} ; 

var  a = new Person("Quoc", "Khanh") ; 

a.sayHello() ; 