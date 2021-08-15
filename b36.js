'use strict' ; 

class Emitter {
	constructor () {
		this.events= {} ; 
	} ; 
	// khởi tạo sự kiện type va khởi tạo hành động listener cho su kiện thay type
	on(type, listener) {
		this.events[type] = this.events[type] || [] ; // khoi tao arr cho su kien , 1 su kien co the tra ve nhieu hanh dong  
		this.events[type].push(listener) ; // push hanh dong su kien vao mang su kien type
	} ; 
	// thực thi hành động listener với sự kiện type
	emit(type,data) {
		if(this.events[type]) {
			this.events[type].forEach(function(listener) { // forEach tra ve function voi 3 tham so item index arr dang goi 
				listener(data) ; 
			}) ; 
		}  
	} ;  
} ; 


var emitter = new Emitter() ; 

emitter.on("bad", function(data) {
	console.log("Bi Diem Kem") ; 
	console.log(" + " + data ) ; 
}) ; 

emitter.on("bad", function(data) {
	console.log("Goi Phu Huynh No Ngay Va Luon") ; 
	console.log(" + " + data) ; 
})

let arr = [10, 4] ; 

for(let i of arr) {
	if(i < 5) {
		emitter.emit("bad", "Khanh 1 ") ; 
	}
} ;  

// ke thua du kien ; 

let util = require("util") ;



class Kethua extends Emitter  {
	constructor () {
		super() ; 
		this.hello = "Hello" ; 
	} ; 
	sayHello(data) {
		console.log(this.hello) ; 
		emitter.emit("bad",data) ; 
	}; 
} ; 

let kt = new Kethua() ; 



kt.sayHello("data Khanh") ; 
