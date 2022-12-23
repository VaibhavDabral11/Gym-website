const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 5000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/Contact', (req, res) => {
    //const con = "This is the best gym in the world"
    //const params = { 'title': 'Buscle Fitness', "content": con }
    res.status(200).render('index.pug');
})
app.get('/home', (req, res) => {
    // const con = "This is a about page"
    res.status(200).render('home.pug');
})
app.get('/about', (req, res) => {
    // const con = "This is a about page"
    res.status(200).render('about.pug');
})


app.post('/form', (req, res) => {
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more} \n`
    fs.appendFileSync('output1.txt', outputToWrite) //save the all string.
        //fs.writeFileSync('output1.txt', outputToWrite) // write st once.
    const params = { 'message': 'Your form has been submitted successfully' }
    res.status(200).render('index.pug', params);

})



// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});