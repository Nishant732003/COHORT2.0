class Animal{
    constructor(name,legcount) {
        this.name = name;
        this.legcount = legcount;
    }
    describe() {
        return `${this.name} has ${this.legcount} legs`;
    }
} const a = new Animal("Dog", 4).describe();
console.log(a);


let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate);
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(typeof myDate);
let myCreateDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreateDate.toLocaleString());