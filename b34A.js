var EventsEmiiter = require("events") ;

var util = require("util") ;

function Log () {
	EventsEmiiter.call(this) ;  /*luc nay EvensEmitter se nhận thuộc tính của hàm Log , thíss chỉ đối tượng Log */
	this.message = "Hello world " ; 
} ;  

util.inherits(Log , EventsEmiiter) ;

Log.prototype.sayHello = function (data) {
	console.log(this.message + data) ;
	this.emit("hello", data) ;  
} ;  

var hi = new Log() ; 

hi.on("hello" , function(data) {
	console.log("Bat su kien dung se goi ham nay " +  data) ; 
}) ;

hi.sayHello("Quoc Khanh") ; 

function Person () {
	this.firstName = "Quoc" ; 
	this.lastName = " Khanh " ; 
} ; 

Person.prototype.sayHello2 = function () {
	console.log(this.firstName + "-" + this.lastName) ; 
} ; 

function Student () {
	Person.call(this) ; /* goi cac đôi tượng ban đầu của Person sau đó truyền đối tượng Student(ở đây là this) vào thông qua call */
	this.name = "Ngo" ; 
} ; 

util.inherits(Student , Person) ;

var sv = new Student() ; 

sv.sayHello2() ;  

