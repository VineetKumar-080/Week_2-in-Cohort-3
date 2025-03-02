const fs =  require("fs")

const Data1 = fs.readFileSync("a.txt","utf-8");
console.log(Data1); // reading file data asynchronously

const Data2 = fs.readFileSync("b.txt","utf-8");
console.log(Data2); //reading file data synchronously

console.log("Hello Buddy");

// fs.read = gives us two function one is fs.readFile and another one is fs.readFileSync and as we discussed about them in above lines
