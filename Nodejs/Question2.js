/*
Write a node.js program that reads content from a file named 'input.txt' and writes the content to a new file named 'output.txt'
*/

const fs = require("fs");

// Read content from 'input.txt'
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Write content to 'output.txt'
  fs.writeFile("output.txt", data, "utf8", (err) => {
    if (err) {
      console.error("Error writing the file:", err);
      return;
    }

    console.log("File content successfully copied to output.txt");
  });
});
