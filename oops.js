class Student {
    static name = "Vikas";

    constructor(name) {
        console.log("Hello Student");
        this.studentName = name;
    }

    info() {
        console.log("Student Information");
        console.log(this.studentName);
    }
}

let s1 = new Student("Rahul");
let s2 = new Student("Vikas");

s1.info();
s2.info();

console.log(Student.name);

