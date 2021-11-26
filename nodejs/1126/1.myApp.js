const mysql = require('mysql');
require("dotenv").config();
const dbConfig = require('./dbconfig.json')

// var con = mysql.createConnection({
//     host: process.env.DBHOST,
//     user: process.env.DBUSER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//     port : process.env.PORT
// })

var con = mysql.createConnection(dbConfig)

con.connect((err)=> {
    if (err) throw err;
    console.log("connected")
    // var sQuery = "create database customers (name varchar(45)"
    // con.query(sQuery, (err, result)=> {
        if(err) throw err;

        console.log("databse nodeportfolio create success!!!")
    })
// })