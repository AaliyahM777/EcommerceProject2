require('dotenv').config()
const express = require('express')
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


//support express of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));
// support express of application/json type post data
// app.use(express.json);


// creating database connection between sql database and server


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


app.get('/', function (req, res) {
  res.send(data)
})

app.get('/api/products', function (req, res) {
  connection.query("SELECT Products.*, Product_title, Price.Price_values FROM Products INNER JOIN Price ON Price_id = Products.Product_id ", function(err, data){    
    res.send(data)   
  })
})




app.get('/api/productfilter/:category', function (req, res) {

  let filter=req.params.category
  connection.query("SELECT Product_title, Price.Price_values FROM Products INNER JOIN Price ON Price_id = Products.Product_id WHERE Product_categories =?", filter, function(err, data){
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


