var http = require("http") ; 

var fs = require("fs") ; 

http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type" : "text/html"}) ;
	
	fs.createReadStream(__dirname + "/html.html").pipe(res) ; 

}).listen(1111, "192.168.1.16") ; 