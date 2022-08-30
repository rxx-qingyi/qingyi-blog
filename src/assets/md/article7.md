## 题目：[最小操作次数使数组元素相等](https://leetcode.cn/problems/minimum-moves-to-equal-array-elements/)

+ 分类：数组的改变、移动

+ 题号：453 

+ 描述：给你一个长度为 `n` 的整数数组，每次操作将会使 `n - 1` 个元素增加 `1` 。返回让数组所有元素相等的最小操作次数。

+ 示例

```js
输入：nums = [1,2,3]
输出：3
解释：
只需要3次操作（注意每次操作会增加两个元素的值）：
[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]


示例2:
输入：nums = [1,1,1]
输出：0
```

+ 数据范围

```js
n == nums.length
1 <= nums.length <= 105
-109 <= nums[i] <= 109
答案保证符合 32-bit 整数

```

+ 解题

  + 思路：
    + 逆向思维：将题目转变为：给你一个长度为n的整数数组，每次操作将会使数组内任意一个元素减少1。返回让数组所有元素相等的最小操作次数。
    + 题目转变后。就变得容易解题了。解题共两步。1.获取数组中最小的元素。2.遍历数组，累加数组每一项减少到数组中最小的元素需要的次数。最后累加得到的数字就是需要操作数组的次数
  + 代码：

```js
let citations = [11,15]

//arrH index代表被引次数，value代表被引不低于index的文章数
var hIndex = function(citations) {
    let min = Math.min(...nums)
    let res = 0;
    nums.map((v) => {
        res = res + (v - min)
    })
    return res
};

console.log(hIndex(citations));
```

