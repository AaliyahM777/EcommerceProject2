 // we require dotenv  to store our password for our sql databse connection on workbench
 // we use express for our local host use in coneection formy sql database and 
// we require  morgan which is a middleware for generating request’s logs in the server.
// use helmet  for sercuirty to save against attacks in http/https protocls
require('dotenv').config()
const express = require('express');
const helmet= require('helmet');
const morgan= require('morgan')
const mysql = require('mysql');


const app = express();
const PORT = 3001

var connection = mysql.createConnection({
  host: 'localhost',
  // db port
  port: 3306, 
  user: 'root',  
  password: process.env.MYPASSWORD,
  database: 'db_PenPowers'
});


app.use (helmet()); // added security for server
//support express of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));
// support express of application/json type post data
app.use(morgan());


// creating database connection between sql database and server

// this is allowing express to connect  with react 
// port 3000 is what react app is using
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  next()
})

connection.connect(function(err) {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  connection.query("SELECT * FROM Products", function(err, data) {
      console.table(data);
  });
});

 //  telling application to use get method of home page  and we pass in request and resposne parameters
 //  then we want it to response to send the data
app.get('/', function (req, res) {
  res.send(data)
})

// we create products page api for products 
app.get('/api/products', function (req, res) {
  connection.query("SELECT Products.*, Product_title, Price.Price_values FROM Products INNER JOIN Price ON Price_id = Products.Product_id ", function(err, data){    
    res.send(data)   
  })
})

// created api 
app.get('/api/prices', function (req, res) {

  let filter=req.params.category
  connection.query("SELECT Products.*,Product_title, Price.Price_values FROM Products INNER JOIN Price ON Price_id = Products.Product_id WHERE Price_values <= 9.99", filter,function (err,data){
    res.send(data)
  })
})


app.get('/api/productfilter/:category', function (req, res) {

  let filter=req.params.category
  connection.query("SELECT Products.*,Product_title, Price.Price_values FROM Products INNER JOIN Price ON Price_id = Products.Product_id WHERE Product_categories =?", filter, function(err, data){
    res.send(data)
  })
})



app.get('/api/contacts', function (req, res) {
  connection.query("SELECT * FROM Contacts", function(err, data){
    res.json(data)
  })
})



app.listen(PORT, function(){
  console.log(`Server now listening on port ${PORT}`);
});


