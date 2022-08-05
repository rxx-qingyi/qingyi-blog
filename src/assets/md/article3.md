## 题目：[找到所有数组中消失的数字](https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/)

+ 分类：统计数组中的元素
+ 题号：448
+ 描述：给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
+ 示例

```js
示例1:
输入：nums = [4,3,2,7,8,2,3,1]
输出：[5,6]

示例2:
输入：nums = [1,1]
输出：[2]
```

+ 数据范围

```js
n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
```

+ 解题
  + 思路：解题分为三步：1.现将数组去重。2.将数组按从小到大进行排序。3.利用1-数组长度的数去匹配排序后的数组，将未匹配到的数存到meesing数组中。
  + 代码：

```js
let nums = [4,3,2,7,8,2,3,1]

var findDisappearedNumbers = function(nums) {
    let len = nums.length;
    let messing = []
    //1
    let a = nums.filter((v,i) => {
        return nums.indexOf(v) == nums.indexOf(v,i)
    })
    //2
    a.sort((a,b)=>a-b)
  	//3
    for(let i = 0 ;i<len ; i++){
        if(a.indexOf(i+1) == "-1"){
            messing.push(i+1)
        }
    }
    return messing
};

console.log(findDisappearedNumbers(nums));
```

