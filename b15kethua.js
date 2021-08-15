function Person(name1, password) {
	this.name = name1 ; 
	this.password = password ; 
} ; 

/* mo  rong phuong thuc cua ham Person*/
Person.prototype.getName = function() {
	return this.name ; 
} ;

Person.prototype.getPasswork = function() {
	return this.password ; 
} ; 

Person.prototype.getLevel = function() {
	return this.level ; 
} ; 

Person.prototype.level = "admin" ; /*mo rong thuoc tinh cua ham Person*/

function  User(name, password) {
 	this.name = name ; 
} ;


User.prototype  = new Person() ; /*ke thua prototype nhung khong ke thua lai thuoc tinh khai tao ban dau cua Person*/

var person = new Person("Quoc" , 12) ; 
var user = new User("khanh" , 3123) ; 

console.log(user.getName()) ; 
console.log(user.getPasswork()) ; /*da ke thua phuong thuc cua Peson , nhung khong ke thua thoc tinh , nen khong co gia tri*/
console.log(user.getLevel()) ; 

Date.prototype.vnFormat = function() {
	var yy = this.getFullYear() ; 
	var mm = this.getMonth() + 1 ; 
	var dd = this.getDate() ; 
	return yy + "/" + mm + "/" + dd ; 
} ;

var date = new Date() ;

var date1 = new Date(2021, 11, 12) ;

console.log(date1.vnFormat()) ;   