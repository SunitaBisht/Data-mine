var express = require("express");
var bodyParser=require('body-parser')
var app = express();
var routes=require('./routes');

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:true}));

app.get('/' , (req,res) => res.send('App is working'));

app.use('/api',routes)

app.listen(3000, () => {
  console.log("srver is running port 3000");

});

module.exports = {
  app
}