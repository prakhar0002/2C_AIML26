let first = "Vikas";
let last = "Choudhary";

document.write("My name is " + first + " " + last);

console.log(`My name is ${first} ${last}`);

let fullName = `My name is ${first} ${last}`;

function fullname(first, last) {
    return `${first} ${last}`;
}

let name = `Hello ${fullname("Vikas", "Choudhary")}`;

console.log(name);

    
