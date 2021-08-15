var http = require("http") ; 

var fs = require("fs") ; 

http.createServer(function (req, res) {
	if( req.url === "/" || req.url === "/html") {
		res.writeHead(200, {"Content-Type" : "text/html"}) ;
		fs.createReadStream(__dirname + "/html.html").pipe(res) ;
	}
	else if(req.url === "/obj"){
		res.writeHead(200, {"Content-Type" : "application/json"}) ;
		var obj = {
			name : "Khanh" , 
			olod : 22
		} ;
		res.end(JSON.stringify(obj)) ;
	}
	else {
		res.writeHead(404) ;
		res.end("Not Found") ; 
	}

}).listen(1375, "192.168.1.12", function() {
	console.log("hello Khanh") ; 
})  