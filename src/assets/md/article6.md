## 题目：[H 指数](https://leetcode.cn/problems/h-index/)

+ 分类：统计数组中的元素

+ 题号：274 

+ 描述：给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数。计算并返回该研究者的 h 指数。

  根据维基百科上 h 指数的定义：h 代表“高引用次数”，一名科研人员的 h指数是指他（她）的 （n 篇论文中）总共有 h 篇论文分别被引用了至少 h 次。且其余的 n - h 篇论文每篇被引用次数 不超过 h 次。

  如果 h 有多种可能的值，h 指数 是其中最大的那个。

+ 示例

```js
输入：citations = [3,0,6,1,5]
输出：3 
解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。


示例2:
输入：citations = [1,3,1]
输出：1

```

+ 数据范围

```js
n == citations.length
1 <= n <= 5000
0 <= citations[i] <= 1000
```

+ 解题

  + 思路：解题分为四步：

    1.先对数组做判断，当数组的长度为1时，此时有两种情况，数组中的值为0，此时H指数始终为0。当数组中的值不为0时，此时的H指数始终为1。2.当数组长度大于等于1时，以文章数为循环次数去循环数组，起始值为1。

    3.在循环中再循环数组，保存数组中大于等于外层循环的判断值的次数，并将该值储存到一个新的数组中。

    4.通过2，3步得到的新数组中索引值代表被引次数，数值代表被引次数不低于索引值的文章数。

    5.当2，3步得到的数组长度为0时，代表H指数为0。

    6.当2，3步得到的数组长度不为0时，输出该数组的最大值，即为H指数

  + 代码：

```js

let citations = [11,15]

//arrH index代表被引次数，value代表被引不低于index的文章数
var hIndex = function(citations) {
    let H = []
    let arrH = []
    let len = citations.length;
    if(len == 1 )  return !!citations[0] ? 1 : 0
    for (let i = 1; i<len+1; i++) {
        let res =0
        citations.map((v)=>{
            if(v>=i){
                res++
            }
        })
        arrH[i] = res
    }
    arrH.map((v,i) => {
        if(v  >= i){
            H.push(i)
        }
    })
    if(!H[0]){
        return 0
    }
    return Math.max(...H)
};

console.log(hIndex(citations));
```

