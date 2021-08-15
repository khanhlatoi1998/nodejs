var Emitter2 = require("./b28.js") ; 

var emiiter = new Emitter2() ;

emiiter.on("bad" , function() {
	console.log("Mot mon bi diem kem") ;
}) ;  

emiiter.on("bad" , function() {
	console.log("Bao phu huynh no ngay") ; 
}) ; 

var arr = [10 ,3] ; 

for(let i of arr) {
	if(i < 5) {
		console.log("diem kem la : " + i ) ; 
		emiiter.emit("bad") ; 
	}
} ; 

