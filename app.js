// JavaScript mein Prototype ek object hota hai jiske through ek object doosre object ke properties aur methods ko access kar sakta hai.

// Easy Hinglish mein samjho: Prototype ek aisa mechanism hai jisse JavaScript objects apne parent object se properties aur methods inherit kar sakte hain.


// ================================================================================================

// Prototype in JavaScript is an object that allows other objects to inherit properties and methods. Every JavaScript object has an internal link to its prototype, which helps in code reusability and inheritance. This mechanism is called prototypal inheritance.

// ================================================================================================


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