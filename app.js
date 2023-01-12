const express = require('express');
const mysql = require('mysql');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient();

const path = require("path");
const fs = require("fs");
const app = express();
const port = 5000;

app.use(express.json())

//Datbase connection (Mysql)
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'password',
    database: 'gymwebsite_data'
})

con.connect((err) => {
    if (err) {
        console.log("not connect")
    } else {
        console.log("The databased is connected ");
        console.log("");
    }
})

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get("/contact-us", (req, res) => {
    //const con = "This is the best gym in the world"
    //const params = { 'title': 'Buscle Fitness', "content": con }
    res.status(200).render('index.pug');
})
app.get("/home", (req, res) => {
    // const con = "This is a about page"
    res.status(200).render('home.pug');
})
app.get("/about", (req, res) => {
    // const con = "This is a about page"
    res.status(200).render('about.pug');
})

app.post("/contact-us", async(req, res) => {
    console.log({ "Received Data from Client": req.body })
    const user = await prisma.gymwebsite_data.create({
        data: {
            Name: req.body.name,
            Age: Number(req.body.age),
            Gender: req.body.gender,
            Address: req.body.address,
            About_more: req.body.more,
        },
    });
    //res.json(user);
    console.log(user)
    const params = { 'message': 'Your form has been submitted successfully' }
    res.status(200).render('index.pug', params);

});
app.get("/readall", async(req, res) => { //return promise
    const users = await prisma.gymwebsite_data.findMany(); //fetch api
    res.json(users);
    console.log(users);

});


// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});