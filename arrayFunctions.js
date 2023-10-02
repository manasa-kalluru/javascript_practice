const arr = [1,2,3,4,5,6,7,8,9,10];
const newArr = [];
for(let i=0; i< arr.length ; i++) {
    console.log(arr[i], i);
}

arr.forEach((element, index, array) => {
    console.log(element, index, array);
}, undefined );

const mapVal = arr.map((value, index, array) => console.log(value,index, array));

const newMap = arr.map((value, index, array) => {
    console.log(value, index, array);
    return  value * 2;
});
newMap[0] = 100;
console.log(arr, "is arr");

const mdnMap = arr.map((value) => value * 2);
console.log("newMap is" , newMap);

console.log("MapVal is " , mapVal);



