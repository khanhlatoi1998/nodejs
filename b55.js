var http = require("http") ; 

var fs = require("fs") ; 

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/html'}) ; // tra ve kieu noi dung cho clien 
	var html = fs.readFileSync(__dirname + "/html.html", "utf8", function(err, data) {}) ; 
	var user = "Khanh111" ; 
	html1 = html.replace("{user}", user) ; // ke thua html va dung replace de thay the user thanh Khanh  
	res.end(html1) ; 
}).listen(1375, "192.168.1.16")  