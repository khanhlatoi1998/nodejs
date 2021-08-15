var _ = require("lodash") ; 


var arr = [1]  ;

var b = arr.concat(2) ; 

var c = _.difference(b, arr) ; 

console.log(c) ; 