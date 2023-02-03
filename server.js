const express = require("express");
const {BankData} = require("./Data/bankDetails1")
const {Bank_Data} = require("./Data/bankDetails")

const app = express();

// app.get('/', (req, res) =>{
    var stream = fs.createReadStream()
// });

// app.get('/data', (req, res) =>{
//     res.send(BankData);
// });

// app.get("/api/data/:branch", (req, res) =>{
//     const singleBank = Bank_Data.find((c) => c.branch === req.params.branch);
//     res.send(singleBank);
// });



//  app.listen(5000, console.log("Server is runnig at port 5000"));



// // method 2;

const fs  = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req,res) =>{
    const readFile = fs.createReadStream('./Data/bankDetails');
    readFile.pipe(res);
});

app.listen(5000, console.log("Server is runnig at port 5000"));


