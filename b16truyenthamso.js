/* truyền số kiểu tham trị , là khi tham số được truyền vào hàm bị thay đổi
	sẽ không thay đổi giá trij của biến được truyền vào
*/

function getByVlue(b) {
	b = 2 ; 
} ; 

var a = 1 ; 

getByVlue(a) ; 

console.log(a) ; 

/* truyền số kiểu tham chieu , là khi tham số được truyền vào hàm bị thay đổi
	sẽ thay đổi giá trij của biến được truyền vào , khi truyen object
*/

function getRef(obj) {
	obj.propto1 = 12 ;
	obj.propto2 = function () {

	} ;  
}

var c = {} ; 

c.proto1 = {} ; 

getRef(c) ; 

console.log(c) ; 


