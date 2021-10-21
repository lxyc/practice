/** 中位数
给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

示例 1：
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2

示例 2：
输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5

示例 3：
输入：nums1 = [0,0], nums2 = [0,0]
输出：0.00000

示例 4：
输入：nums1 = [], nums2 = [1]
输出：1.00000

示例 5：
输入：nums1 = [2], nums2 = []
输出：2.00000
 */

function merge(nums1, nums2) {
  const len1 = nums1.length
  const len2 = nums2.length
  const nums = new Array(len1 + len2)

  let i = 0
  let j = 0
  let k = 0
  while(i < len1 && j < len2) {
    nums[k++] = nums1[i] < nums2[j] ? nums1[i++] : nums2[j++]
  }

  while(i < len1) {
    nums[k++] = nums1[i++]
  }
  while(j < len2) {
    nums[k++] = nums2[j++]
  }

  return nums
}

function findMedianSortedArrays(nums1, nums2) {
  // const nums = nums1.concat(nums2).sort((a, b) => a - b)
  const nums = merge(nums1, nums2)
  console.log('----nums', nums)
  
  const mid = Math.floor(nums.length / 2)
  const isOdd = nums.length % 2 === 1

  return isOdd ?  nums[mid] : (nums[mid] + nums[mid - 1]) / 2
}

console.log(findMedianSortedArrays([1,3], [2]))