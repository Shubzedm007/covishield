const express = require('express');
const bodyParser= require('body-parser');

const app = express();
app.set('view engine','ejs');
app.use(express.static("static"));
app.use(bodyParser.urlencoded({extended:true})) ;


app.get("/",function(req,res){

  res.render("index")
})


app.get("/m",function(req,res){

  res.render("index_map")
})














app.listen(3000,function() {
	console.log("The server is running");
})
