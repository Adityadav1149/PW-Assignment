/*
write a node.js program that uses the path module to manipulate file paths.
*/

const path = require("path");

// Define some file paths
const filePath1 = "/users/student/projects/node/Question5.js";
const filePath2 = "docs/README.md";

// Get the directory name of a path
console.log("Directory Name:", path.dirname(filePath1));

// Get the base name (file name) of a path
console.log("Base Name:", path.basename(filePath1));

// Get the extension of a file
console.log("File Extension:", path.extname(filePath1));

// Join paths together
const joinedPath = path.join(
  "/users",
  "student",
  "projects",
  "node",
  "pathManipulation.js"
);
console.log("Joined Path:", joinedPath);

// Resolve a sequence of paths into an absolute path
const resolvedPath = path.resolve("docs", "README.md");
console.log("Resolved Path:", resolvedPath);

// Normalize a path (resolve '..' and '.' segments)
const normalizedPath = path.normalize(
  "/users/student/../student/projects/./node/Question5.js"
);
console.log("Normalized Path:", normalizedPath);

// Check if a path is absolute
console.log("Is Absolute Path (filePath1):", path.isAbsolute(filePath1));
console.log("Is Absolute Path (filePath2):", path.isAbsolute(filePath2));
