var express = require("express");
var app = express();


app.get("/url",(req,res,next)=>{
  res.json(["Tony","Lisa","Miches","Ginger","food"]);
});

app.listen(3000, () => {
  console.log("srver is running port 3000");

});