// Create a new Node.js project and set up the necessary files and dependencies.
// 2. Build a basic server using the http module provided by Node.js.
// 3. Implement a route for the endpoint /users that returns a simple text response.
// • When a request is made to /users, the server should respond with a plain text message such
// as "Welcome to the Users endpoint."
const os = require('os')
const fs = require('fs')
const http = require('http');

// http.createServer((req, res) => {
//   if (req.url === '/users') {
//     res.setHeader("Content-Type", "text/plain");
//     res.write("Welcome to the Users endpoint");
//     res.end();
//   console.log('http://localhost:8000');

//   }

// }).listen(8000);

// Level 2: Returning HTML Page
// 4. Expand the existing server to handle HTML responses.
// 5. Create an HTML file that represents a basic webpage with some content.
// 6. Implement a route for the endpoint /trainees that returns the HTML page.
// • When a request is made to /trainees, the server should respond with the HTML file you
// created in the previous step

// const http = require('http');
// const fs = require('fs')

// const port = 3000;
// const http = require('http');
// const fs = require('fs');
const path = require('path');

const port = 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/trainees') {
        // Read the content of index.html and send it as the response
        const indexPath = path.join(__dirname, 'index.html');
        fs.readFile(indexPath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
