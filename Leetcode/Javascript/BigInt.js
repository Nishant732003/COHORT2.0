let x = 9999999999999999999999999999999999999999999999n;
console.log(typeof x);
let y = Number(x) / 2;
console.log(y);

console.log(x);//not 
let c = 90;
b = 2;

console.log(c >>> b);
let d = -25;
console.log(d >> b);
console.log(d >>> b);

let n = "nishant";
n = "nishant \"mahto\"raj"
n = "mahto 'raj"
console.log(n.indexOf("a"));
console.log(n.includes("nishant"));
console.log(n.concat("nishant"));
console.log(n);
x = 5;
console.log(5 ** 2);
console.log(x++);
console.log(++x);
y = "5";
x =5;
console.log(x == y);
let marks = 101;
console.log((marks > 100) ? "yes" : "no");

for (let i = 0; i < 5; i++){
    console.log( "The number is " + i);
}
const numbers = [10, 20, 30, 34, 45, 50];
let txt = "";
for (let x in numbers) {
   
    txt += numbers[x];
    console.log(txt);
    
}
const staffDetails = [
  { name: "jam", age: 44, salary: 4000, currency: "USD" },
  { name: "kemp", age: 40, salary: 4400, currency: "Pound" },
  { name: "colt", age: 54, salary: 4060, currency: "Rupee" },
];
staffDetails.forEach((staffDetails) => {
    let sentence = `I am ${staffDetails.name} a staff of MNC`;
    console.log(sentence);
});
const scores = [10, 20, 30, 40];
let total = 0;
scores.forEach((scores) => { 
    total += scores;
});
console.log(total);
//missing integre for each loop can work but for loop return undefined
function greeting() {
  console.log("Hope yo'u are good");
}
greeting();
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
function greet(name, message = "Hi") {
    console.log(`${message} ${name}`);
}
greet('john');

sayHello('hello', "john", "smith", "Doe");
function sayHello(message, ...names) {
    names.forEach(names => console.log(`${message} ${names}`));
}
let h = " nishant,is raj mahto";
let st =h.trim(',');
console.log(st);
let dr = [7, 8, 9, 10];
delete dr[1];
console.log(dr[0]);
const nums = [1, 2, 3, 4, 5];
nums.splice(2, 1, 23, 24);
nums.forEach((nums) => {
    console.log(nums);
})
const a = [1, 2, 3];
a.map((value, index, array) => {
    return value*value; 
});

let arr = [3, 4, 5, 6];
for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] * 3;
}
console.log(arr);

let arr1 = [3, 7, 8, 9];
let modifiedArr = arr1.map(function (element){
    return element* 4;
});
console.log(modifiedArr);

let users = [
  { firstName: "susan", lastname: "steward" },
  { firstName: "Nishant", lastname: "Raj" },

  { firstName: "Pinku", lastname: "Kumar" },


  { firstName: "Karma", lastname: "story" }
];
let fulllNames = users.map((e) => {
    return `${e.firstName} ${e.lastname}`;
});
console.log(fulllNames);
let map1 = new Map([['first-name', 'ulkpai'], ['second-name', 'halwa']]);
console.log(map1.get('first-name'));
map1.set('age', 23);
console.log(map1);
console.log(map1.values());
//return key value pair
console.log(map1.entries());


//
function printElements(value, key, map) {
    console.log(`${key}=${value}`);

}
let map2 = new Map([['first-name', 'nishant'], ['second-name', 'raj'], ['third-name', 'mahto'], ['age', 23]]);
map2.forEach(printElements);
const a1 = [1, 2, 3, 4];
const b1 = [3, 4, 5, 6];
 const a3=a1.concat(b1);
console.log(a3);

