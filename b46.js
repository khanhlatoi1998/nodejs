// xử lý file , truyền từng mảnh dữ liệu(chunk) cho đến hết dữ liệu

var fs = require("fs") ;

var readable = fs.createReadStream(__dirname + "/readme.txt",{
	encoding : "utf8", 
	hightWaterMark : 1 * 1024, // mặc định là 64kb , ta có thế thay đổi để file đc load 1 lần là 32 16...
}) ;

var writeable = fs.createWriteStream(__dirname + "/taofilemoi.txt") ; // tao file moi ;  

readable.on("data", function (chunk) {
	console.log(chunk.length) ; 
	writeable.write(chunk) ; // khi load data se truyen vao file da tao 
}) ;    