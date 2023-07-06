// File: hello.js
console.log("Hello, World!");
// File: args.js
const args = process.argv.slice(2);
console.log(args.join(' '));

// File: set time out after 2 second 
setTimeout(() => {
    console.log("Hello, World!");
  }, 2000);
  


// File: print hello world every 2 second
setInterval(() => {
    console.log("Hello, World!");
  }, 2000);

//   5th task
console.warn("Warning: Something went wrong");

  