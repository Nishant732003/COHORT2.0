function getlength(str) {
    console.log(str);
    console.log(str.length);
}
getlength("Hello world!");
function findIndexOf(str, target) {
    console.log("original String:", str);
    console.log("Index", str.indexOf(target));
}
findIndexOf("Hello World", "World");

function LastIndexOf(str, target) {
    console.log(str);
    console.log("Index", str.lastIndexOf(target));

}
LastIndexOf("Hello World World!", "World");

function getSubstring(str, start, end) {
    console.log('original string');
    console.log("getSubstring", str.substring(start, end));
}
getSubstring("My Name is Nishant Raj Mahto PinkuKumar", 6, 18);

function replaceString(str, target, replacement) {
    console.log("original string");
    console.log(str.replace(target, replacement));
}
replaceString("My name is ishant raj Mahto Mahto ", "ishant", "Nishant");

function splitString(str, seperator) {
    console.log("original string");
    console.log(str.split(seperator));
}
splitString("My Name is Nishant Raj Mahto PinkuKumar.MY DoB is 7-3-2003.Hello fellas.", ".");
function trimString(str) {
    console.log(str);
    console.log(str.trim());
}
trimString("   My  Name is Nishant Raj Mahto");
function trimString(str) {
  console.log(str);
    console.log(str.trim().replace(/[^a-zA-Z0-9]/g, ''));
   
}
trimString("#My%  Name is Nishant Raj *Mahto%");




