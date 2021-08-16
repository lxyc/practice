/** 最长回文子串
给你一个字符串 s，找到 s 中最长的回文子串。

示例 1：
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

示例 2：
输入：s = "cbbd"
输出："bb"

示例 3：
输入：s = "a"
输出："a"

示例 4：
输入：s = "ac"
输出："a"
 */

// 判断是否为回文字符串
function isPalindrome(s) {
  const avg = Math.floor(s.length / 2)

  for(let i = 0; i < avg; i += 1) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false
    }
  }

  return true
}

function longestPalindrome(s) {
  let ret = ''
  for(let i = 0; i < s.length; i += 1) {
    for(let j = i + 1; j <= s.length; j += 1) {
      const tarStr = s.slice(i, j)
      if (isPalindrome(tarStr) && tarStr.length > ret.length) {
        ret = tarStr
      }
    }
  }
  return ret
}

console.log(longestPalindrome("a"))