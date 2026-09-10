function sum1() {
    let a = 10;
    let b = 20;
    let c = a + b;
    return c;
}

let sum2 = function() {
    let a = 10;
    let b = 20;
    let c = a + b;
    return c;
};

let sum3 = () => {
    let a = 10;
    let b = 20;
    let c = a + b;
    return c;
};

let display = (name) => {
    console.log(name);
};

display("Prakhar");

let fullname = (first, last) => {
    return `${first} ${last}`;
};

console.log(fullname("Vikas", "Choudhary"));