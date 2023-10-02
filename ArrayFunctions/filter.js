const arr = [1,2,3,4,5,6,7,8,9,10];

const odd = arr.filter(function oddEle(element) {
    return element%2;
});

const oddArrFn = arr.filter((ele) => ele % 2 !== 0);


console.log("odd is ", odd);

for(i=0; i < arr.length; i++) {
    if(Boolean(arr[i] % 2)){
        console.log(arr[i]);
    }
}

const evenSum = arr.filter((ele) => ele % 2 ===0)
    .reduce((sum,cur) => sum+cur, 0);
console.log("evenSum is ", evenSum);

