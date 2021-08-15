const express = require("express") ; 

const app = express() ; 

const cookieParser = require('cookie-parser') ; 

const port = 3800 ;



/* middleware ket noi giua req va res , dung download */

app.use("/assets", express.static(__dirname)); /*thu muc ben tong __dirname da dc public va co the truy cập hay url /assets/__diname/... */
app.use(cookieParser()) ; 
app.set("view engine", "ejs" ) ; 

/* custom middleware*/

app.use("/", function(req, res, next) {
	console.log(`URL1 : ${req.url} `) ;
	req.requestTime1 = new Date() ; 
	next() ; /* ham nay chay trinh duyet nhanh hon */
})



app.get("/", function(req, res) {
	console.log("Cookie :" + req.cookie) ; 
	res.send(`
		<link href="/assets/css.css" rel="stylesheet" type="text/css" /> 	<!-- download file css ve cho trang web dinh nghia -->
		<h1>Hello Express!</h1>
		<p> URL : ${req.requestTime1} </p>
	`) ; 
}) ;

app.get("/api", function(req, res) {
	res.json({
		name : "Khanh" , 
		old : 23 
	}) ;
})

app.get("/use/:id", function(req, res) {
	res.cookie("khoitao" , req.params.id) ; 
	res.send(`<h1> Use : ${req.params.id}</h1>`) ;
} ) ; 

app.listen(port, function () {
	console.log("listen") ; 
}) ; 