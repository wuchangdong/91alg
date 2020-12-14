/**
 * @param {string} s
 * @return {number}
 */

// 就是求相同字符串间的距离
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    const map = {};
    for (let i = 0, j = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined) {
            j = Math.max(map[s[i]] + 1, j);
        }
        maxLength = Math.max(maxLength, i - j + 1);
        map[s[i]] = i;
    }
    return maxLength;
};
