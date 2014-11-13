//this has been modified 14:37, but nothing rly is modified excpt for thi cmnt


// Name: shortReadFile2.js
// Purpose: This programme prints this file on screen using promises, and 
shows later the file length.
Promise = require("bluebird");
fs = require("fs");

// To this end, promisify() builds an asynchronous variant of fs.readFile() 
that returns a promise
readFileAsync = Promise.promisify(fs.readFile);

// Obtain the promise.
var myFile = readFileAsync("shortReadFile2.js", "utf8");

// Auxiliary function to print the file, returning it.
function printFile (contents) {console.log(contents); return contents;}
// Auxiliary function to show the file length.
function showLength(contents) {console.log(contents.length); return 
contents;}
// Function that prints information about errors.
function showErrors (err) {console.log( "Errors reading file..."); 
console.log(err);}

// Use the promise, chaining multiple then()s, if needed.
myFile.then(printFile).then(showLength, showErrors);
