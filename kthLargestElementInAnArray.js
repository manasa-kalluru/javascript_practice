/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const partition = (arr, left, right) => {
      const pivot = arr[right]; 
      let i = left - 1;
  
      for (let j = left; j < right; j++) {
        if (arr[j] >= pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
  
      [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
      return i + 1; // Return the index of the pivot
    };
  
    // Main function to find the kth largest element
    const findKth = (nums, left, right, k) => {
      if (left <= right) {
        const pivotIndex = partition(nums, left, right);
        if (pivotIndex === k - 1) {
          return nums[pivotIndex]; 
        } else if (pivotIndex < k - 1) {
          
          return findKth(nums, pivotIndex + 1, right, k);
        } else {
          
          return findKth(nums, left, pivotIndex - 1, k);
        }
      }
    };
  
    
    if (k <= 0 || k > nums.length) {
      return -1; // Invalid k value
    }
  
    // Initialize the search in the entire array
    return findKth(nums, 0, nums.length - 1, k);
  };
  
  
  
  