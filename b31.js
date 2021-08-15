var EventsEmiiter = require("events") ;

var util = require("util") ;

function Log () {
	console.log("songthing") ; 
	this.message = "Hello world " ; 
} ;  


util.inherits(Log , EventsEmiiter) ; /*Log chỉ nhận kế thừa phan mo rong tu EventsEmitter  */

Log.prototype.sayHello = function (data) {
	console.log(this.message + " nhan data " + data) ;
	this.emit("hello" , ` nhan data va truyen vao su kien on ${data}` ) ;  
} ;  

var hi = new Log() ; 

hi.on("hello" , function(data) {
	console.log("Bat su kien dung se goi ham nay " + data) ; 
}) ;

hi.sayHello(" Truyen vao ham sayHello 1  data ") ; 

/*xem lai b28 b28B*/