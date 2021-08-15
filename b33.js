var obj = {
	name : "Khanh" , 
	sayHello : function (param1, param2) {
		console.log(`Hello ${this.name}`) ;
		console.log(`${param1}  ${param2}`) ; 
	} 
} ; 

obj.sayHello("Xin Chao" , "2000") ; 

obj.sayHello.call({name : "Quoc"}, "Xin Chao" , "2010") ; 

obj.sayHello.apply({name : "Ngo"}, ["Xin Chao", "2020"]) ;

console.log(__dirname + "/html.html") ; 

/*khach nhau giua call va apply la cach truyen tham so*/