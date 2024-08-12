var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { analyzeURL } = require("./fetchAPI");


const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));
dotenv.config();


// console.log(__dirname);

// Variables for url and api key
const APY_KEY = process.env.APY_KEY;

app.get('/', function (req, res) {
    res.sendFile("index.html");
});


// POST Route
app.post("/", async (req, res) => {
    const { url } = req.body.url;
    const analysis = await analyzeURL(url, APY_KEY);
    res.json(analysis);
})


// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


