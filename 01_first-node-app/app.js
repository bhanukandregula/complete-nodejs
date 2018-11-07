// Function declaration
function sayLoud(name){
    // This is a global object where we can access anywhere.
    global.console.log("Hello " + name); 
}

var sayLouder = function(name){
    console.log("Hey, " +name);
}

// Function Invocation
sayLoud("Bhanu Prakash Kandregula");

// Function Invocation
sayLouder("Bhanu Kandregula");


// This will print the JSON object of Module.
// console.log(module);