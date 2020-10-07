const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = until.promisify(fs.writeFile);

function promptResponse(){
    return inquirer.prompt([
        {
            type: "input",
            question: "What is your name?",
            name: "name"
        },

        {
            type: "input",
            question: "Where are you from?",
            location: "location"
        },

        {
            type: "input",
            question: "Tell us about you? Hobbies, Food?",
            bio:"bio"
        },

        {
            type: "input",
            question: "What is your Linkedin URL?",
            URL1: "linkedin" 
        },

        {
            type: "input",
            question: "What is your github username?",
            username:"github"
        },


    ])
}

`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <title>New HTML</title>
</head>
<body>


    <div> 
    
    
    </div>
</body>
</html>`