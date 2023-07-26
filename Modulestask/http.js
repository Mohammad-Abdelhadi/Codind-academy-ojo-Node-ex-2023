// 1. Use the fs module to read a file and print its contents to the console.
const fs = require('fs');

fs.readFile('./example.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// 2. Use the fs module to write a string to a file.
fs.writeFile("./example.txt", "Hello, World!!!!!", (err) => {
  if (err) {
    console.error(err);
  }
});

// 3. Use the http module to create a simple server that returns "Hello, World!" for the root route.
const http = require('http');

http.createServer((req, res) => {
  res.write("Hello, World!");
  res.end();
}).listen(3030);

// 4. Use the http module to create a server that serves a file when a specific route is requested.
http.createServer((req, res) => {
  if (req.url === '/example') {
    fs.readFile('./example.txt', 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
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
const path = require('path');
const joinedPath = path.join('../Basics', './Basics.js', '../ModulesTask', './example.txt');
console.log(joinedPath);

// 6. Use the url module to parse a URL and access its components.
const url = require('url');
const address = 'http://localhost:8080/default.htm?year=2017&month=february';
const parsedUrl = url.parse(address, true);

console.log(parsedUrl.host); // returns 'localhost:8080'
console.log(parsedUrl.pathname); // returns '/default.htm'
console.log(parsedUrl.search); // returns '?year=2017&month=february'

const queryData = parsedUrl.query; // returns an object: { year: 2017, month: 'february' }
console.log(queryData.month); // returns 'february'

// 7. Use the os module to get the current user's home directory
const os = require('os');
console.log(os.homedir());

// 8. Generate a random number using the crypto module
const crypto = require('crypto');
const randomNumber = crypto.randomInt(0, 1000000);
console.log(randomNumber);

// 9. Hash a string using the crypto module
const hash = crypto.createHash('md5').update('Hello World?').digest('hex');
console.log(hash);

// 11. Execute a command using the child_process module
const { exec } = require('child_process');
const command = 'dir';

exec(command, (error, stdout, stderr) => {
  console.log('Output:\n' + stdout);
});

// 12. Create a cluster using the cluster module
const cluster = require('cluster');

if (cluster.isWorker) {
  console.log('Multiple processes running');
} else {
  console.log('I am a master');
  cluster.fork();
  cluster.fork();
}

// 14. Perform a DNS lookup using the dns module
const dns = require('dns');
dns.lookup('www.google.com', (err, addresses) => {
  console.log(addresses);
});

// 15. Create a TCP server using the net module
const net = require('net');
const server = net.createServer((socket) => {
  console.log('Client connected.');

  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);
    socket.write('Server response: Data received.');
  });

  socket.on('end', () => {
    console.log('Client disconnected.');
  });
});

const port = 5050;
server.listen(port, () => {
  console.log(`TCP server started on port ${port}`);
});

// 16. Create a TCP client using the net module
const client = net.createConnection({ port: 5051 }, () => {
  console.log('Connected to TCP server.');

  // Send data to the server
  client.write('Hello, server!');
});

client.on('data', (data) => {
  console.log(`Received data from server: ${data}`);
});

client.on('end', () => {
  console.log('Disconnected from TCP server.');
});

client.on('error', (err) => {
  console.error(`Error with TCP client: ${err}`);
});
