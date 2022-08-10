## 题目：[缺失的第一个正数](https://leetcode.cn/problems/first-missing-positive/)

+ 分类：统计数组中的元素
+ 题号：41
+ 描述：给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
+ 示例

```js
示例1:
输入：nums = [1,2,0]
输出：3

示例2:
输入：nums = [3,4,-1,1]
输出：2

示例3:
输入：nums = [7,8,9,11,12]
输出：1
```

+ 数据范围

```js
1 <= nums.length <= 5 * 105
-231 <= nums[i] <= 231 - 1
```

+ 解题
  + 思路：解题分为四步：1.现将数组过滤掉负数和0。2.将数组按从小到大进行排序。3.将排序后的数组按照各项的值作为索引填入一个新的数组中。4.循环新得到的数组，缺失的第一项即为所求的缺失的第一个正数。
  + 代码：

```js
nums = [1,2,0]

var firstMissingPositive = function(nums) {
    let arr = [];
    nums = nums.filter((v)=>v>0)
    nums.sort((a,b)=>a-b)
    if(nums[0] != 1) {
        return 1
    } 
    nums.map((v) => {
    arr[v] = v
    })
    let len = arr.length;
    for (let i = 1 ; i<len; i++) {
        if(!arr[i]){
            return i
        }
    }
    return len ;
};


console.log(firstMissingPositive(nums));
```

