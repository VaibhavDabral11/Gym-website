const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded()) //this function is use to fetch the data from the url to express
    // PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best content on the internet so far so use it wisely"
    const params = { 'title': 'PubG is the best game', "content": con }
    res.status(200).render('index.pug', params);
})
app.post('/', (req, res) => {
    var value = req.body
    var myJSON = JSON.stringify(value); //convert cbject to string.
    //const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}'); // convert string to json .
    var str = `${myJSON}\n`;
    fs.appendFileSync("output.txt", str)
        //fs.writeFileSync('output1.txt', outputToWrite) // write st once. //promt
        //when user click on submit then show next page with thanks. 
    const params = { 'message': 'your form has been submitted successfully' }
    res.status(200).render('index.pug', params);
})

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port $ { port }`);
});