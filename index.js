
const express = require('express');

const app = express();


// to get the path
const path = require('path');

// To get the file name 
const fs = require('fs');

let fileName = [];

// Giving path to get the file names in the node modeule folder
const directoryPath = path.join(__dirname, 'node_modules');


//Home endpoint
app.get('/', (req, res) => {
    res.send(`Node Task 1
      -current date time api endpoint -"/api/current_date_time.txt"
      -getting file names from folder -"/fileName"`);

});

// Question 1.

// api for current date and time endpoint
app.get('/api/current_date_time.txt', (req, res) => {
    res.send(new Date());
})

// Question 2:

// getting  the file names from the folder endpoin
app.get('/fileName', (req, res) => {
    fs.readdir(directoryPath, (err, files) => {


        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        files.forEach((file) => {
            fileName.push(file);
        })

        res.send(fileName);
    });

    fileName = [];
});

app.listen(3000);