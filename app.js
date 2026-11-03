// JavaScript mein Prototype ek object hota hai jiske through ek object doosre object ke properties aur methods ko access kar sakta hai.

// Easy Hinglish mein samjho: Prototype ek aisa mechanism hai jisse JavaScript objects apne parent object se properties aur methods inherit kar sakte hain.


// ================================================================================================

// Prototype in JavaScript is an object that allows other objects to inherit properties and methods. Every JavaScript object has an internal link to its prototype, which helps in code reusability and inheritance. This mechanism is called prototypal inheritance.

// ================================================================================================


// let person = {
//     name: "Payal",
//     city: "Balaghat",

//     greet: function() {
//         console.log("Hello!");
//     }
// };

// let student = {
//     course: "B.Sc Computer Science"
// };

// // person ko student ka prototype banaya
// Object.setPrototypeOf(student, person);

// console.log(student.course);
// console.log(student.name);
// console.log(student.city);

// student.greet();



// Prototype Chain

// Jab JavaScript kisi object mein property ya method search karta hai, toh:
// 1. Sabse pehle current object mein search karta hai.
// 2. Agar nahi milta, toh uske prototype mein search karta hai.
// 3. Phir uske prototype ke prototype mein search karta hai.
// 4. Ye process null tak chalta hai.
// Is process ko Prototype Chain kehte hain.

let person = {
    country: "India"
};

let student = {
    name: "Payal"
};

Object.setPrototypeOf(student, person);

console.log(student.name);
console.log(student.country);
console.log(student.toString());






// Yahan sayHello() method Student.prototype par define hai. Isliye Student se banne wale objects ise access kar sakte hain.

function Student(name) {
    this.name = name;
}

Student.prototype.sayHello = function() {
    console.log("Hello " + this.name);
};

let s1 = new Student("Payal");

s1.sayHello();