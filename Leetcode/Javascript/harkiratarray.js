function shiftExample(arr) {
    console.log("original array", arr);
    arr.shift();
    console.log(arr);
}
shiftExample([1, 2, 34]);
function unshiftE(arr,element) {
    console.log(arr);
    arr.unshift(element);
    console.log(arr);
}
unshiftE([1, 2, 3, 4], 0);
function foreachExample(arr) {
    console.log(arr);
    arr.forEach(function (item, index) {
        console.log(item*3,index)
    })
}
foreachExample([2, 5, 6, 78, 5]);

//map
function mapExample(arr) {
    let newArr = arr.map(function (item) {
        return item * 2;
    });
    console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

function filterExample(arr) {
    console.log(arr);
    let arr1 = arr.filter(function (item) {
        return item > 3;
    });
    console.log(arr1);
}
filterExample([1, 2, 3, 4, 5, 6, 7, 8, 9]);

function findExample(arr) {
    console.log(arr);
    let found = arr.find(function (item) {
        return item > 3;
    });
    console.log(found);
}
findExample([1, 2, 3, 5, 6, 7]);

function sortExample(arr) {
    arr.sort(function (a, b) {
        return a - b;
    })
    console.log(arr);

}
sortExample([9, 17, 2, 5, 4]);
let arr = [4, 1, 9, 0, 6];
console.log(arr.sort());
