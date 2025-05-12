
console.log("Hello World!");

// Closures

// Top level entity hai

// ap ek function ko uske requred data k saath bind jab karte hai to wo clouser ban jata hai


// Clouser = {function + required data/lexical scope/surronding state}

// A Clouser is a combination of function and its LexicalScope/SurroundingState/RequiredData


// name variable reference bind with innerFunction

// share reference of required data to function

function outerFunction() {
    let name = "Babbar";

    function innerFunction() {
        console.log(name);
    }

    return innerFunction;
}

let inner = outerFunction();

inner();

// let name = "Manish";
// function outerFunction() {
//     var name = "Babbar";
//     function innerFunction() {
//         let name = "Love";
//         // displayName() is the inner function, that forms a closure
//         console.log(name); // use variable declared in the parent function
//     }
//     innerFunction();
// }

// outerFunction();

