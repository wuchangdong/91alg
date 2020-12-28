/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = (left + right) >> 1;
        const midVal = nums[mid];
        if (midVal === target) {
            return mid;
        }
        else if (midVal > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
};
