
var obj = {
	obj1 : 1 , 
	obj2 : 2 , 
} ; 

obj["obj1"] = 2  ; /* tuong duong moi obj.obj1 = 2 */

console.log(obj.obj1 + "-" + obj["obj1"]) ; 

function Emitter () {
	this.events = {} ;
} ;  


Emitter.prototype.on = function (type , listener) {
	this.events[type] = this.events[type] || [] ; 
	this.events[type].push(listener) ; 
} ; 

Emitter.prototype.emit = function (type) {
	if(this.events[type]) {
		this.events[type].forEach(function(listener) {
			listener() ; 
		}) 
	} 
} ;

module.exports = Emitter ; 