const arr2 = [1,2,3,4,5,6,7,8,9,10];

const sum = arr2.reduce( (sum,cur) => {
    
    return sum+cur;
}, 0);

const arrSum = arr2.reduce( (sum,cur) => sum+cur, 0);

console.log("sum is ", sum);
console.log("arrSum is ", arrSum);

let sumArr =0;
for (let i=0; i < arr2.length ; i++) {
    
    sumArr = sumArr + arr2[i];
    console.log("sumArr in loop is  ", sumArr);
}

const evenSumWithReduce = arr.reduce( (sum,cur) => {
    console.log("sum is ",sum,"cur is ",cur);
    if(cur % 2 === 0) {
        return sum+cur;
    } else {
        return sum;
    }
},0)

console.log("evenSumWithReduce is ", evenSumWithReduce);

//console.log("sumArr is ", sumArr);