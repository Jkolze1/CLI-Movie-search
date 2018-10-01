var request = require("request");
var cheerio = require("cheerio");

// Runs request
request("http://www.omdbapi.com/?t=star+wars&y=&plot=short&apikey=6d632cbe", function(error, response, body) {

// Cherrio stuff goes here
const $ = cheerio.load(body);
    
// Logs results
    console.log(body); 
    });