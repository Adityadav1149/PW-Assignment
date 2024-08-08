/*
Write a node.js program that creates an http server and handles different routes. The server should respond with 'Hello, World!' for the root route('/') and 'Page not found' for any other route.
*/

const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Handle different routes
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found\n");
  }
});

// Specify the port
const port = 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
