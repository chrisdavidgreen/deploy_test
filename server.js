var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.all('/',function(req,res,next){
    console.log("accessing secret location...");
    next();
});

app.get("/",function(req,res){

    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    res.render("pages/index",{drinks:drinks});
});

app.get("/about",function(req,res){
    var title = "About Page";
    res.render("pages/about",{title:title});
});

app.get("/users",function(req,res){
   res.send("GET request for all users");
});

app.post("/",function(req,res){
   res.send("Post request to root folder");
});

app.listen(8080);