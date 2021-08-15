var fs = require("fs") ;

var zlib = require("zlib") ; 

var readable = fs.createReadStream(__dirname + "/readme.txt", {
	encoding : "utf8", 
	hightWaterMark : 32*1024 , 
}) ;

var writeable = fs.createWriteStream(__dirname + "/newfile2.txt") ;

var  compressed = fs.createWriteStream(__dirname + "/filenen.txt.gz") ;
/* xử lý readStream và writeStream , luồng khi sẽ chặn hơn luồng đọc nên dẫn tới tắt ngặn đường truyền Stream 
	cần sử dụng pipe để việc đọc và viết mượt hơn */

var gzip = zlib.createGzip() ; /* tra ve transform Stream co the vua doc vua ghi */

//copy

readable.pipe(writeable) ; 

//compressed

readable.pipe(gzip).pipe(compressed) ; 