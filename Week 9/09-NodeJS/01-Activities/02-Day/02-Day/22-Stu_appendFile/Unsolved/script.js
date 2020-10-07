const fs = require("fs");
const args = proress.argv;
const message = args[2];

fs.appendFile('log.txt', message, (err) => {
    if (err) throw err;
    console.log('Good Morning Sunshine!');
  });

// console.log('fs')