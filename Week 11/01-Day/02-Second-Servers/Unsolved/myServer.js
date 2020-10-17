const http = require('http');

const port = 7000;
const portA = 7500;

const server = http.createServer((req , res)=>{
    res.end("Keep calm, work hard.");
});

server.listen(port, function(){
    console.log("Server is listening.");
});



const serverA = http.createServer(portA, (req , res)=>{
res.end(["Keep calm, work hard." , "Be the change you want to see." , "Treat others the way you want you be treated."])
});

serverA.listen(portA, function(){
    console.log("ServerA is running for you.")
})

// math.random goes somewhere.
