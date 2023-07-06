// 1. Use the fs module to read a file and print its contents to the console. 
const fs = require('fs');

fs.readFile('./example.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error( err);
    return;
  }
  console.log(data);
});
// 2. Use the fs module to write a string to a file. 

fs.writeFile("./example.txt","HEllo , World!!!!!",(err,data)=>{
    if(err)
    {
        console.error(err)
    }
    console.log(data)
})

// 3. Use the http module to create a simple server that returns "Hello, World!" for the root route.
let http=require('http')
http.createServer((req,res)=>{
    res.write("Succssesfuly!!!!!");
    res.end();
}).listen(3030);

// 4. Use the http module to create a server that serves a file when a specific route is requested. 
// i added the status code to get the currect errors 
//  so if i import the file in the wrong way , i'll see the error
http.createServer((req, res) => {
  if (req.url === '/example') {
    fs.readFile('./example.txt', 'utf-8', (err, data) => {
      if (err) {
        console.error("Error:", err);
        res.statusCode = 500;
        res.end('Internal Server Error');
        return;
      }
      res.write(data);
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
}).listen(4500);

// 5. Use the path module to join two file paths
const path  =require('path')
const letsjoin= path.join('../Basics','./Basics.js','../ModulesTask','./example.txt')
console.log(letsjoin)

//  6. Use the url module to parse a URL and access its components. 
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
//7. Use the os module to get the current user's home director
const os = require('os')
console.log(os.homedir()
)
// 8.
const crypto = require("crypto");
const n = crypto.randomInt(0, 1000000);
console.log(n);

// 9.
// Node.js program to demonstrate the	


// Defining key
const secret = 'Hi';
// why we use secret ??!!
// Calling createHash method
const hash = crypto.createHash('md5', secret)
					// sha256 another algorthim **(((The code specifies that the hashing algorithm to be used is called SHA256, which is a popular and secure algorithm.
// )))
				// updating data
				.update('Hello World?')

				// Encoding to be used
				.digest('hex');

// Displays output
console.log(hash);

const hashs=crypto.createHash('md5').update('sajodijsao').digest('hex')

// 11

const { exec } = require('child_process');

const command = 'dir';

exec(command, (error, stdout, stderr) => {
  console.log('Output:\n' + stdout);
});


// 12
var cluster = require('cluster');

if (cluster.isWorker) {
  console.log('multiple processes running');
} else {
  console.log('I am a master');
  cluster.fork();
  cluster.fork(); 
}

// 14
const dns = require("dns");
dns.lookup('www.google.com', function (err, addresses, family) {
  console.log(addresses);
});

// num 15

const net = require('net');

const server = net.createServer((socket) => {

  console.log('Client connected.');

  socket.on('data', (data) => {
    console.log(Received data from client: ${data});

    socket.write('Server response: Data received.');
  });

  socket.on('end', () => {
    console.log('Client disconnected.');
  });
});

const port = 5050
server.listen(port, () => {
  console.log(TCP server started on port ${port});
});

 //num 16
 
   const client = net.createConnection({ port: 5051 }, () => {
     console.log('Connected to TCP server.');

//      Send data to the server
     client.write('Hello, server!');
   });

   client.on('data', (data) => {
     console.log(Received data from server: ${data});
   });

   client.on('end', () => {
     console.log('Disconnected from TCP server.');
   });

   client.on('error', (err) => {
     console.error(Error with TCP client: ${err});
   });
