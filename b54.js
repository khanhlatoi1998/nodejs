var http = require("http") ; 

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/plain'}) ; // tra ve kieu noi dung cho clien 
	res.end(" Hello Khanh ") ; 
}).listen(1337, "192.168.1.10")  