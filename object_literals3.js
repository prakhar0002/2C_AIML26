let name = "Vikas";
let Roll = 101;

let Student = {
    name,
    Roll,

    display() {
        console.log(this.name, this.Roll);
    }
};

Student.display();

