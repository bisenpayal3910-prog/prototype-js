let person = {
    name: "Payal",
    city: "Balaghat",

    greet: function() {
        console.log("Hello!");
    }
};

let student = {
    course: "B.Sc Computer Science"
};

// person ko student ka prototype banaya
Object.setPrototypeOf(student, person);

console.log(student.course);
console.log(student.name);
console.log(student.city);

student.greet();