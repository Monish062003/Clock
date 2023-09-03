const express=require("express");
const app=express();
const path=require("path");

let port=80;

// app.use(express.urlencoded());
app.set("view engine","pug");
app.set("/static",express.static("static"));
app.set("views",path.join(__dirname,"template"));

app.get("/",(req,res)=>{
    res.render("clock");
});

app.get("/stopwatch",(req,res)=>{
    res.render("stopwatch");
});

app.listen(port,()=>{
    console.log(`Listen to port number : http://localhost:${port}/stopwatch`);
});