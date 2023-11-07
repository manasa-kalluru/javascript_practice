
//  @param {number[]} nums
//  @param {number} k
//  @return {number[]}
 
var topKFrequent = function(nums, k) {
    let frequencyMap = new Map();
    for(var i = 0; i < nums.length; i++) {
        if(frequencyMap.has(nums[i])) {
            frequencyMap.set(nums[i], frequencyMap.get(nums[i]) + 1);
        } else {
            frequencyMap.set(nums[i], 1);
        }
    }
    let keyValueArray = [...frequencyMap.entries()];
    console.log("keyValueArray is ",keyValueArray);
    for(var i = keyValueArray.length-1; i>0; i--){
        console.log(i);
        for(var j = keyValueArray.length-1; j>= 1; j--){
            if(keyValueArray[j-1][1] < keyValueArray[j][1]) {
                var temp = keyValueArray[j];
                keyValueArray[j] = keyValueArray[j-1];
                keyValueArray[j-1] = temp;
                console.log("keyValueArray at ",i,j," is ",keyValueArray);
            }
        }
    }
    console.log("sorted array is ", keyValueArray);
    let topKElements = [];
    for(var i=0;i<k;i++){
        topKElements.push(keyValueArray[i][0]);
    }
    return topKElements;
};

const nums = [5,3,1,1,1,3,73,1]
const k = 1;
var output = topKFrequent(nums,k);
console.log("output is ", output);
