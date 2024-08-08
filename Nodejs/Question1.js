/*
Write a node.js program that creates a simple http server. when a client sends a request to the server, the server should respond with a 'Hello, student!' message.
*/

const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body
  res.end("Hello, student!\n");
});

// Specify the port
const port = 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
