/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const customSort = (a, b) => {
        const order1 = '' + a + b;
        const order2 = '' + b + a;
        return order2 > order1 ? 1 : -1; 
    };
   
    nums.sort(customSort);
    
    if (nums[0] === 0) {
        return '0';
    }
    return nums.join('');
};



