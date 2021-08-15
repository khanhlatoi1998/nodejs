/*Scope khoi tao ham va chay ngay luon, hàm này sẽ không bị tác động và cũng không thể tác động ra bên ngoài */


(function (b) {
	var a = "Khanh" ; 
	console.log(a) ;
	console.log(b) ; 
}("Ngo")) /*co the truyen tham so*/

var a = "Quoc" ; 

console.log(a) ; 