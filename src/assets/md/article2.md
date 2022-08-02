## 字符串的方法

### concat

+ 将两个或多个字符的文本组合起来，返回一个新的字符串

### indexOf()

+ 返回字符串第一处出现的索引，如果没有则返回-1

+ 功能：返回调用它的字符串的第一次出现指定值的索引，区分大小写

+ 参数：indexOf(value,index);value:要查找的字符串，如果不传，默认是'undefined';index:数字下标，即从字符串指定位置开始查找，默认值是0，即从下标0出开始查找，可不传


~~~js
'Gary lalala'.indexOf('la')  //返回5
'Gary lalala'.indexOf('la',6)  //返回7
'Gary lalala'.indexOf('lay')  //返回-1
'Gary lalala'.indexOf('Gary')  //返回0
'Gary lalala'.indexOf('gary') //返回false
//注意返回值可能是0，在做判断时最好与-1进行比较
~~~

### charAt()

+ 返回指定位置的字符
+ 功能：根据指定下标返回字符串中指定字符，效果同str[index]
+ 参数：charAt(index);index下标，范围0到字符串.length-1，如果不传，默认为0，如果传入的值大于str.length-1,则返回一个空字符串

~~~js
const str = 'Hello'
str.charAt(1)  // 'e'
str.chatAt()  str.charAt(0)  //'H'
str.charAt(5)  // ''
~~~

### lastindexOf()

+ 返回字符串最后一处出现的索引，如果没有匹配则返回-1

### match()

+ 检查一个字符串是否匹配一个正则表达式

### substr()

+ 返回字符串的一个子串,参数是起始位置和结束位置

### substring()

+ 返回字符串的一个子串，传入参数是起始位置和结束位置

### slice()

+ 提取字符串的一部分，并返回一个新字符串

### replace(）

+ 用来查找匹配一个正则表达式的字符串，并进行替换

### search()

+ 执行正则表达式匹配查找。如果成功则返回索引值。否则返回-1
+ 参数：search(regexp);一个正则表达式。如传入的参数不是正则表达式，会使用new Regexp(regexp)隐式将其转为正则表达式

~~~js
var str = "hey JudE";
var re = /[A-Z]/g;
var re2 = /[.]/g;
console.log(str.search(re)); // returns 4  匹配到'J'
console.log(str.search(re2)); // returns -1 

~~~

### split()

+ 使用指定的字符把字符串分割成数组，参数支持正则表达式
+ 参数：split(separator,howmany);

  + separator必需，字符串或正则表达式，从该参数指定的地方分割字符串；
  + howmany可选。该参数可指定返回的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。


~~~js
const str = 'lalalalal';
const sArr = str.split('a');
const sArr1 = str.split('a',3);
console.log(sArr);  //["l", "l", "l", "l", "l"]
console.log(sArr1)  //["l", "l", "l"]
~~~

+ 移除字符串中的空格

  

### length

+ 返回字符串的长度

### toLowerCase()

+ 将英文字符串转成小写

### toUpperCase()

+ 将英文字符串转成大写

## 数组的方法

### concat()

+ 合并数组，并返回合并之后的数据
+ 功能：用于连接两个或多个数组，该方法不会改变现有的数组，二仅仅会返回被连接数组的一个副本。
+ 参数：concat(data1,data2,....)所有参数可选，要合并的数据；data为数组时，将data合并到原数组；data为具体数据是直接添加到原数组尾部；省略时创建原数组的副本（即不影响原数组的新数组）

~~~js
let arr1 = [1,2,3]
let arr2 = arr1.concat();
console.log(arr1);           //[1,2,3]---原数组
console.log(arr1 === arr2);  //false
console.log(arr2);           //[1,2,3]---原数组的副本

console.log(arr1.concat("hello","world"));     //[1,2,3,"hello","world"]
console.log(arr1.concat(["a","b"],[[3,4],{"name":"admin"}]));   //[1,2,3,"a","b",[3,4],{"name":"admin"}]
console.log(arr1);           //[1,2,3]---原数组未改变
~~~

### join()

+ 使用分隔符，将数组转化为字符串并返回。
+ 功能：根据指定分割符将数组中的所有元素放入一个字符串，并返回这个字符串。
+ 参数：join(str);参数可选，默认为","   以传入的字符作为分隔符。

~~~js
let arr = [1,2,3];
console.log(arr.join());         //1,2,3
console.log(arr.join("-"));      //1-2-3
console.log(arr);                //[1,2,3]---原数组未改变
~~~

### pop()

+ 删除最后一位，并返回删除的数据。
+ 功能：方法用于删除并返回数组的最后一个元素。
+ 参数：无。


~~~js
let arr = [1,2,3];
console.log(arr.pop());     //3
console.log(arr);           //[1,2]---原数组改变
~~~

### shift()

+ 删除第一位，并返回删除的数据。
+ 功能：方法用于删除并返回数组的第一个元素。
+ 参数：无。


~~~js
let arr = [1,2,3]
console.log(arr.shift());       //1
console.log(arr);               //[2,3]---原数组改变
~~~

### unshift()

+ 第一位新增一或多个数据，返回长度。
+ 功能：向数组的开头添加一个或更多元素，并返回新的长度。
+ 参数;unshift(newdata1，newData2,....)。

~~~js
let arr = [1,2,3];
console.log(arr.unshift("hello"));  //4
console.log(arr);                   //["hello",1,2,3]---原数组改变
console.log(arr.unshift("a","b"));  //6
console.log(arr);                   //["a","b","hello",1,2,3]---原数组改变
~~~

### push()

+ 在最后一位新增一或多个数据，返回长度
+ 功能：向数组的末尾添加一个或更多元素，并返回新的长度
+ 参数:push(newData1,newData2,....)

~~~js
let arr = [1,2,3];
console.log(arr.push("hello"));  //4
console.log(arr);                //[1,2,3,"hello"]---原数组改变
console.log(arr.push("a","b"));  //6
console.log(arr);                //[1,2,3,"hello","a","b"]---原数组改变
~~~

### reverse()

+ 反转数组，返回结果。
+ 功能：颠倒数组中的元素顺序。


~~~js
let arr = [1,2,3]
console.log(arr.reverse());//[3,2,1]
console.log(arr)//[3,2,1]
~~~

### slice()

+ 截取指定位置的数组，并返回
+ 功能：可从已有的数组中返回选定的元素。该方法接受两个参数slice(start,end),start为必选，表示从第几位开始；end为可选，表示到第几位结束（不包含end位），省略表示到最后一位；start和end都可以为负数，负数时表示从最后一位开始算起，如-1表示最后一位
+ 参数：slice(startindex,endindex)

~~~js
let arr = ["Tom","Jack","Lucy","Lily","May"];
console.log(arr.slice(1,3));        //["Jack","Lucy"]
console.log(arr.slice(1));          //["Jack","Lucy","Lily","May"]
console.log(arr.slice(-4,-1));      //["Jack","Lucy","Lily"]
console.log(arr.slice(-2));         //["Lily","May"]
console.log(arr.slice(1,-2));       //["Jack","Lucy"]
console.log(arr);                   //["Tom","Jack","Lucy","Lily","May"]---原数组未改变
~~~

### sort()

+ 排序（字符串规则），返回结果
+ 功能：对数组中的元素进行排序，默认是升序

~~~js
let arr = [6,1,5,2,3];
console.log(arr.sort());//[1,2,3,4,5]
console.log(arr);
//但是在排序前，会先调用数组的toString方法，将每个元素都转化成字符之后，再进行排序，此时会按照字符串的排序，逐位比较，进行排序
let arr = [6,234,345,543,6543];
console.log(arr.sort());  //[234, 345, 543, 6, 6543]
console.log(arr) //[234, 345, 543, 6, 6543]
~~~

+ 参数：sort(callback)\

  + 如果需要按照数值排序，需要传参。sort(callback),callback为回调函数，该函数应该具有两个参数，比较这两个参数，然后返回一个用于说明这两个值的相对顺序的数字（a-b）。其返回值如下：
    + 若a小于b，返回一个小于0的值
    + 若a等于b，则返回0.
    + 若a大于b，则返回一个大于0的值

  ~~~js
  let arr = [6,234,345,543,6543];
  console.log(arr.sort(fn)); //fn可以使用箭头函数   arr.sort((a,b)=>{ return a-b })
  console.log(arr);
  function fn(a,b){
  	return a-b
  }
  ~~~

### splice()

+ 删除指定位置，并替换，返回删除的数据。
+ 功能：向数组中添加，或从数组删除，或替换数组中的元素，然后返回被删除/替换的元素。
+ 参数：splice(satr,num,data1,data2,.....)所有参数全部可选。

  + 不传参时：无操作。

~~~js
let arr = ["Tom","Jack","Lucy","Lily","May"];
console.log(arr.splice());  //[]
console.log(arr);   //['Tom', 'Jack', 'Lucy', 'Lily', 'May']
~~~

+ 只传入start：表示从索引为start的数据开始删除，直到数组结束。

~~~js
let arr = ["Tom","Jack","Lucy","Lily","May"];
console.log(arr.splice(2)); //['Lucy', 'Lily', 'May']
console.log(arr);//['Tom', 'Jack']
~~~

+ 传入star和num：表示从索引为start的数据开始删除，删除num个。

~~~js
let arr = ["Tom","Jack","Lucy","Lily","May"];    
console.log(arr.splice(2,2));   //["Lucy", "Lily"]
console.log(arr);//["Tom", "Jack", "May"]---原数组改变
~~~

+ 传入更多：表示从索引为start的数据开始删除，删除num个，并将第三个参数及后面所有参数，插入到start的位置。

~~~js
let arr = ["Tom","Jack","Lucy","Lily","May"];    
console.log(arr.splice(2,2,"a","b"));  //["Lucy", "Lily"]
console.log(arr);//["Tom", "Jack", "a", "b", "May"]---原数组改变
~~~

### toString()

+ 直接转化为字符串，并返回。

+ 功能：转换成字符串，类似于没有参数的join()，该方法会在数据发生隐式类型转化时被自动调用，如果手动调用，就是直接转化为字符串。


~~~js
let arr =[1,2,3];
console.log(arr.toString());//1,2,3
console.log(arr);//[1,2,3]---原数组未改变
~~~

### valueOf()

+ 返回数组对象的原始值

+ 返回数组的原始值（一般情况下其实就是数组自身），一般由js在后台调用，并不显式的出现在代码中


~~~js
var arr = [1,2,3];
console.log(arr.valueOf());         //[1,2,3]
console.log(arr);                   //[1,2,3]
//为了证明返回的是数组自身
console.log(arr.valueOf() == arr);  //true
~~~

### indexOf()

+ 查询并返回数据的索引
+ 功能：根据指定的数据，从左向右，查询在数组中出现的位置，如果不存在指定的数据，返回-1，该方法是查询方法，不会对数组产生改变。
+ 参数：indexOf(value,start);value为要查询的数据；start为可选，表示开始查询的位置，当start为负数时，从数组的尾部向前数；如果查询不到value的存在，则方法返回-1

~~~js
var arr = ["h","e","l","l","o"];
console.log(arr.indexOf("l"));        //2
console.log(arr.indexOf("l",3));      //3
console.log(arr.indexOf("l",4));      //-1
console.log(arr.indexOf("l",-1));     //-1
console.log(arr.indexOf("l",-3));     //2
~~~

### lastindexOf()

+ 反向查询并返回数据索引。

+ 功能：根据指定的数据，从右向左，查询在数组中出现的位置，如果不存在指定的数据，返回-1。该方法是查询方法，不会对数组产生改变。

+ 参数：lastIndexOf(value, start);value为要查询的数据；start为可选，表示开始查询的位置，当start为负数时，从数组的尾部向前数；如果查询不到value的存在，则方法返回。


~~~js
var arr = ["h","e","l","l","o"];
console.log(arr.indexOf("l"));        //2
console.log(arr.indexOf("l",3));      //3
console.log(arr.indexOf("l",4));      //-1
console.log(arr.indexOf("l",-1));     //-1
console.log(arr.indexOf("l",-3));     //2
~~~

### forEach()

+ 参数为回调函数，会遍历数组所有的项，回调函数接受三个参数，分别为value，index.self,forEach没有返回值

+ 功能：ES5新增方法，用来遍历数组，该方法没有返回值。forEach接受的回调函数会根据数组的每一项执行，搞回调函数默认有三个参数，分别为：遍历到的数组的数据，对应的索引，数组自身。

+ 参数：forEach(callback);callback默认有三个参数，分别为value，index，self。


~~~js
var arr = ["Tom","Jack","Lucy","Lily","May"];
var a = arr.forEach(function(value,index,self){
    console.log(value + "--" + index + "--" + (arr === self));
})
// 打印结果为：
// Tom--0--true
// Jack--1--true
// Lucy--2--true
// Lily--3--true
// May--4--true
console.log(a);     //undefined---forEach没有返回值
//该方法为遍历方法，不会修改原数组
~~~

### map()

+ 同forEach,同时回调函数返回数据，组成新数组由map返回

+ 功能：通forEach功能，map的回调函数会将执行结果返回，最后map将所有回调函数的返回值组成新数组返回

+ 参数：map(callback);callback默认有三个参数，分别为value，index，self。


~~~js
//功能1：同forEach
var arr = ["Tom","Jack","Lucy","Lily","May"];
var a = arr.map(function(value,index,self){
    console.log(value + "--" + index + "--" + (arr === self))
})
// 打印结果为：
// Tom--0--true
// Jack--1--true
// Lucy--2--true
// Lily--3--true
// May--4--true

//功能2：每次回调函数的返回值被map组成新数组返回
var arr = ["Tom","Jack","Lucy","Lily","May"];
var a = arr.map(function(value,index,self){
    return "hi:"+value;
})
console.log(a);     //["hi:Tom", "hi:Jack", "hi:Lucy", "hi:Lily", "hi:May"]
console.log(arr);   //["Tom", "Jack", "Lucy", "Lily", "May"]---原数组未改变
~~~

### filter()

+ 同forEach,同时回调函数返回布尔值，为true的数据组成新数组由filter的返回

+ 功能：通forEach功能；filter的回调函数需要布尔值，当为true时，将本次数组的数据返回给filter，最后filter将所有回调函数的返回值组成新数组返回（此功能可理解为“过滤”）。

+ 参数：filter(callback);callback默认有三个参数value，index，self。


~~~js
//功能1：同forEach
var arr = ["Tom","Jack","Lucy","Lily","May"];
var a = arr.filter(function(value,index,self){
    console.log(value + "--" + index + "--" + (arr === self))
})
// 打印结果为：
// Tom--0--true
// Jack--1--true
// Lucy--2--true
// Lily--3--true
// May--4--true

//功能2：当回调函数的返回值为true时，本次的数组值返回给filter，被filter组成新数组返回
var arr = ["Tom","Jack","Lucy","Lily","May"];
var a = arr.filter(function(value,index,self){
    return value.length > 3;
})
console.log(a);         //["Jack", "Lucy", "Lily"]
console.log(arr);       //["Tom", "Jack", "Lucy", "Lily", "May"]---原数组未改变
~~~

### every()

+ 同forEach,同时回调函数返回布尔值，全部为true，由every返回true

+ 功能：判断数组中每一项是否都满足条件，只有所有项都满足条件，才会返回true

+ 参数：every()接收一个回调作为参数，这个回调函数需要有返回值，every(callback);callback默认有三个参数，分别为value，index，self。

+ 功能1：当回调函数的返回值为true时，类似于forEach的功能，遍历所有；如果为false，那么停止执行，后面的数据不再遍历，停在第一个返回false的位置。


~~~js
//demo1:
var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
var a = arr.every(function(value,index,self){
    console.log(value + "--" + index + "--" + (arr == self))
})
// 打印结果为：
// Tom--0--true
//因为回调函数中没有return true，默认返回undefined，等同于返回false

//demo2:
var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
var a = arr.every(function(value,index,self){
    console.log(value + "--" + index + "--" + (arr == self))
    return value.length < 4;
})
// 打印结果为：
// Tom--0--true
// abc--1--true
// Jack--2--true
//因为当遍历到Jack时，回调函数到return返回false，此时Jack已经遍历，但是后面数据就不再被遍历了

//demo3:
var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
var a = arr.every(function(value,index,self){
    console.log(value + "--" + index + "--" + (arr == self))
    return true;
})
// 打印结果为：
// Tom--0--true
// abc--1--true
// Jack--2--true
// Lucy--3--true
// Lily--4--true
// May--5--true
//因为每个回调函数的返回值都是true，那么会遍历数组所有数据，等同于forEach功能
~~~

+ 功能2：当每个回调函数的返回值都为true时，every的返回值为true，只要有一个回调函数的返回值为false，every的返回值都为false。

~~~js
//demo1:
var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
var a = arr.every(function(value,index,self){
    return value.length > 3;
})
console.log(a);           //false

//demo2:
var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
var a = arr.every(function(value,index,self){
    return value.length > 2;
})
console.log(a);           //true
~~~

### some()

+ 同forEach,同时回调函数返回布尔值，只要由一个为true，由some返回true

+ 功能：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true

+ 参数：some()接收一个回调函数作为参数，这个回调函数需要有返回值，some(callback)；callback默认有三个参数，分别为value，index，self。

+ 功能1：因为要判断数组中的每一项，只要有一个回调函数返回true，some都会返回true，所以与every正好相反，当遇到一个回调函数的返回值为true时，可以确定结果，那么停止执行，后面的数据都不再遍历，停在第一个返回true的位置；当回调函数的返回值为false时，需要继续向后执行，到最后才能确定结果，所以会遍历所有，实现类似于forEach的功能，遍历所有。


~~~js
//demo1:
var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
var a = arr.some(function(value,index,self){
    console.log(value + "--" + index + "--" + (arr == self))
    return value.length > 3;
})
// 打印结果为：
// Tom--0--true
// abc--1--true
// Jack--2--true

//demo2:
var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
var a = arr.some(function(value,index,self){
    console.log(value + "--" + index + "--" + (arr == self))
    return true;
})
// 打印结果为：
// Tom--0--true

//demo3:
var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
var a = arr.some(function(value,index,self){
    console.log(value + "--" + index + "--" + (arr == self))
    return false;
})
// 打印结果为：
// Tom--0--true
// abc--1--true
// Jack--2--true
// Lucy--3--true
// Lily--4--true
// May--5--true
~~~

+ 功能2：于every相反，只要有一个回调函数的返回值都为true，some的返回值为true，所有回调函数的返回值为false，some的返回值才为false。

~~~js
//demo1:
var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
var a = arr.some(function(value,index,self){
    return value.length > 3;
})
console.log(a);             //true

//demo2:
var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
var a = arr.some(function(value,index,self){
    return value.length > 4;
})
console.log(a);             //false
~~~

### reduce()

+ 归并，同forEach，迭代数组的所有项，并构建一个最终值，由reduce返回
+ 功能：从数组的第一项开始，逐个遍历到最后，迭代数组的所有项，然后构建一个最终返回的值。
+ 参数：reduce()接收一个或两个参数：第一个是回调函数，表示在数组的每一项上调用的函数；第二个参数（可选的）作为归并的初始值，被回调函数第一次执行时的第一个参数接收。

  + reduce(callback,initial);callback默认有四个参数，分别为prev,now,index ,self.
  + callback返回的任何值都会作为下一次执行的第一个参数。
  + 如果initial参数被省略，那么第一次迭代发生在数组的第二项上，因此callback的第一个参数是数组的第一项，第二个参数就是数组的第二项。

~~~js
//demo1:不省略initial参数，回调函数没有返回值
var arr = [10,20,30,40,50];
arr.reduce(function(prev,now,index,self){
    console.log(prev + "--" + now + "--" + index + "--" + (arr == self))
}, 2019)
// 打印结果为：
// 2019--10--0--true
// undefined--20--1--true
// undefined--30--2--true
// undefined--40--3--true
// undefined--50--4--true
// 此时回调函数没有return，所以从第二次开始，prev拿到的是undefined

//demo2:省略initial参数，回调函数没有返回值
var arr = [10,20,30,40,50];
arr.reduce(function(prev,now,index,self){
    console.log(prev + "--" + now + "--" + index + "--" + (arr == self))
})
// 打印结果为：第一次，回调函数的第一个参数是数组的第一项。第二个参数就是数组的第二项
// 10--20--1--true
// undefined--30--2--true
// undefined--40--3--true
// undefined--50--4--true
// 此时回调函数没有return，所以从第二次开始，prev拿到的是undefined

//demo3:不省略initial参数，回调函数有返回值
var arr = [10,20,30,40,50];
arr.reduce(function(prev,now,index,self){
    console.log(prev + "--" + now + "--" + index + "--" + (arr == self));
    return "hello";
}, 2019)
// 打印结果为：
// 2019--10--0--true
// hello--20--1--true
// hello--30--2--true
// hello--40--3--true
// hello--50--4--true
// 此时回调函数有return，所以从第二次开始，prev拿到的是回调函数return的值

//demo4:省略initial参数，回调函数有返回值
var arr = [10,20,30,40,50];
arr.reduce(function(prev,now,index,self){
    console.log(prev + "--" + now + "--" + index + "--" + (arr == self));
    return "hello";
})
// 打印结果为：第一次，回调函数的第一个参数是数组的第一项。第二个参数就是数组的第二项
// 10--20--1--true
// hello--30--2--true
// hello--40--3--true
// hello--50--4--true
// 此时回调函数有return，所以从第二次开始，prev拿到的是回调函数return的值

//demo5：使用reduce计算数组中所有数据的和
var arr = [10,20,30,40,50];
var sum = arr.reduce(function(prev,now,index,self){
    return prev + now;
})
console.log(sum);      //150
// 回调函数的最后一次return的结果被返回到reduce方法的身上

//demo6：使用reduce计算数组中所有数据的和
var arr = [10,20,30,40,50];
var sum = arr.reduce(function(prev,now,index,self){
    return prev + now;
}, 8)
console.log(sum);      //158
// 回调函数的最后一次return的结果被返回到reduce方法的身上
// 因为reduce有第二个参数initial，在第一次执行时被计算，所以最终结果被加上8
~~~

### reduceRight()

+ 反向归并，同forEach，迭代数组的所有项，并构建一个最终值，由reduceRight返回

+ 功能：（与reduce类似）从数组的最后一项开始，向前逐个遍历到第一位，迭代数组的所有项，然后构建一个最终返回的值。
+ 参数：同reduce。

