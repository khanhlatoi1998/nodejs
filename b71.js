const express = require("express") ; 
const app = express() ; 
const cookieParser = require('cookie-parser') ;
const bodyParser = require("body-parser") ;  
const urlencodedParser = bodyParser.urlencoded({ extended: false }) ; 
const jsonParser = bodyParser.json() ; 

const port = 3000 ;

/* middleware ket noi giua req va res , dung download */

app.use("/assets", express.static(__dirname)); /*thu muc ben tong __dirname da dc public va co the truy cập hay url /assets/__diname/... */
app.use(cookieParser()) ; /* app.use("/anything", ten file) .use dung de su dung cai file, lúc này khi clien truy cập đường dẫn sẽ có thế sử dụng file, file có thể tra về giá trị nào đó get put post . .. */
app.set('view engine', 'ejs') ; 

/* custom middleware*/

app.use("/", function(req, res, next) { 
	console.log(`URL1 : ${req.url} `) ;
	req.requestTime1 = new Date() ; 
	next() ; /* ham nay chay trinh duyet nhanh hon */
})



app.get("/", function(req, res) {
	res.render("index2", {ID : "khanh", queryString : req.query.qstr}) ; /* can tao folder ten la views */

}) ;

app.get("/api", function(req, res) {
	let result = {
		name : "Khanh" , 
		old : 23
	}
	res.json(result) ;
})

app.get("/use/:id", function(req, res) {
	res.render("index2", {ID : req.params.id, queryString : req.query.qstr }) ; 
} ) ; 

app.post("/login", urlencodedParser, function(req, res) {
	res.send(`
		<p >Username : ${req.body.username} </p>
		<p> userpassword : ${req.body.userpassword} </p>
		` +  req.body.username ) ;
	console.log(req.body.username) ; 
	console.log(req.body.userpassword) ; 
}) ; 

app.post("/loginjson", jsonParser, function(req, res) {
	res.send("ok") ; 
	console.log(req.body.firstname) ;
	console.log(req.body.lastname) ;   
}) ; 

app.listen(port, function () {
	console.log("listen") ; 
}) ; 