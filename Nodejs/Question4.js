/*
Write a node.js program that uses the os module to retrieve information about the current operating system.
*/

const os = require("os");

console.log("Operating System Information:");
console.log("-----------------------------");

// Get the operating system platform
console.log("Platform:", os.platform());

// Get the operating system type
console.log("Type:", os.type());

// Get the operating system release
console.log("Release:", os.release());

// Get the system uptime in seconds
console.log("Uptime (seconds):", os.uptime());

// Get the system's CPU architecture
console.log("CPU Architecture:", os.arch());

// Get information about the CPU
console.log("CPU Information:", os.cpus());

// Get the total memory in bytes
console.log("Total Memory (bytes):", os.totalmem());

// Get the free memory in bytes
console.log("Free Memory (bytes):", os.freemem());

// Get the hostname of the OS
console.log("Hostname:", os.hostname());

// Get the network interfaces
console.log("Network Interfaces:", os.networkInterfaces());

// Get the system's user information
console.log("User Info:", os.userInfo());
