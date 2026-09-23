let n = "name";

let student = {
    [n]: "Vikas",
    ["First" + n]: "Vikas",
    ["Last" + n]: "Chaudhary"
};

console.log(student.name);
console.log(student.Firstname);
console.log(student.Lastname);
