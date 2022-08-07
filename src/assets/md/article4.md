## 题目：[数组中重复的数据](https://leetcode.cn/problems/find-all-duplicates-in-an-array/)

+ 分类：统计数组中的元素

+ 题号：442

+ 描述：

+ 给你一个长度为 n 的整数数组 nums ，其中 nums 的所有整数都在范围 [1, n] 内，且每个整数出现 一次 或 两次 。请你找出所有出现 两次 的整数，并以数组形式返回。

  你必须设计并实现一个时间复杂度为 O(n) 且仅使用常量额外空间的算法解决此问题。

+ 示例

```js
示例1:
输入：nums = [4,3,2,7,8,2,3,1]
输出：[2,3]

示例2:
输入：nums = [1,1,2]
输出：[1]

示例3：
输入：nums = [1]
输出：[]
```

+ 数据范围

```js
n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
nums 中的每个元素出现 一次 或 两次
```

+ 解题
  + 思路：循环数组，分别从头到尾，从尾到头查询每一项的索引值是否相同，不相同即我们要求得值，将该值存到结果数组中。循环完后输出结果数组。
  + 代码：

```js
let nums = [4,3,2,7,8,2,3,1]

var findDuplicates = function(nums) {
    let res = []
    nums.map((v,i)=>{
        nums.indexOf(v,i+1) != "-1" && res.push(v)
    })
    return res;
};

console.log(findDuplicates(nums));
```

