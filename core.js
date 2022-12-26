/*
1. File system - fs
readFile        - reads the file
writeFile       - over-writes the file
appendFile      - appends the file (adds new data without over-writing)

2. url


3 util


4. http/https

5. asserts

*/

let fs = require('fs');
var url = require('url');
var os = require('os');
var ut = require('assert');
const { assert } = require('console');




const urlLink = 'http://localhost:50/get?year=2022&month=dec&day=25&active=1';






fs.readFile('test.txt','utf-8', (err, data) => { //read data
    console.log(data);
});             //<Buffer 74 68 69 73 20 69 73 20 74 65 78 74 20 66 69 6c 65> //need unicode

const h = 'hello world from Node.js'
fs.writeFile('test.txt',h, () => {
    console.log('Updated the file'); //over-writes the test.txt (hello world from Node.js) check test.txt
});


const i = 'hello world from Node.js with append '
fs.appendFile('test.txt',i, () => {
    console.log('Updated the file again with append'); //over-writes the test.txt (hello world from Node.js) check test.txt
});


var urlObj = url.parse(urlLink);
console.log(urlObj.port)          // port num
console.log(urlObj.query)         // year=2022&month=dec&day=25&active=1
console.log(urlObj.pathname)      // get

console.log(os.userInfo());     //  uid: 501,
                                //  gid: 20,
                                //  username: 'alexkim',
                                //  homedir: '/Users/alexkim',
                                //  shell: '/bin/bash'


console.log(os.platform());     // darwin

console.log(os.freemem());         // 25989120




assert(50 > 70, 'this is assert method')

console.log(assert())