# Distribute Candies to People

> 题目地址: [https://leetcode-cn.com/problems/distribute-candies-to-people/](https://leetcode-cn.com/problems/distribute-candies-to-people/)

## 题目描述

排排坐，分糖果。

我们买了一些糖果 `candies`，打算把它们分给排好队的 `n = num_people` 个小朋友。

给第一个小朋友 1 颗糖果，第二个小朋友 2 颗，依此类推，直到给最后一个小朋友 n 颗糖果。

然后，我们再回到队伍的起点，给第一个小朋友 `n + 1` 颗糖果，第二个小朋友 `n + 2` 颗，依此类推，直到给最后一个小朋友 `2 * n` 颗糖果。

重复上述过程（每次都比上一次多给出一颗糖果，当到达队伍终点后再次从队伍起点开始），直到我们分完所有的糖果。注意，就算我们手中的剩下糖果数不够（不比前一次发出的糖果多），这些糖果也会全部发给当前的小朋友。

返回一个长度为 `num_people`、元素之和为 `candies` 的数组，以表示糖果的最终分发情况（即 `ans[i]` 表示第 `i` 个小朋友分到的糖果数）。

示例 1：

```
输入：candies = 7, num_people = 4
输出：[1,2,3,1]
解释：
第一次，ans[0] += 1，数组变为 [1,0,0,0]。
第二次，ans[1] += 2，数组变为 [1,2,0,0]。
第三次，ans[2] += 3，数组变为 [1,2,3,0]。
第四次，ans[3] += 1（因为此时只剩下 1 颗糖果），最终数组变为 [1,2,3,1]。
```

示例 2：

```
输入：candies = 10, num_people = 3
输出：[5,2,3]
解释：
第一次，ans[0] += 1，数组变为 [1,0,0]。
第二次，ans[1] += 2，数组变为 [1,2,0]。
第三次，ans[2] += 3，数组变为 [1,2,3]。
第四次，ans[0] += 4，最终数组变为 [5,2,3]。
```

提示：

* `1 <= candies <= 10^9`
* `1 <= num_people <= 1000`

------

## 题解

> 题解来源：[https://leetcode-cn.com/problems/distribute-candies-to-people/solution/fen-tang-guo-ii-by-leetcode-solution/](https://leetcode-cn.com/problems/distribute-candies-to-people/solution/fen-tang-guo-ii-by-leetcode-solution/)

### 暴力破解

最直观的想法是，依次给每个小朋友派糖果，直到派完为止。

#### 代码实现

```js
function distributeCandies(candies, num_people) {
  const ans = new Array(num_people).fill(0);

  let i = 0;
  while (candies) {
    const send = Math.min(i + 1, candies);
    ans[i % num_people] += send;

    i++;
    candies -= send;
  }

  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(max(\sqrt{G}, N)) $. $G$ 为糖果数量，$N$ 为人数。
本方法的时间复杂度取决于循环到底走多少步。设总步数为 $s$，则发放的糖果数量为 $\frac{s(s + 1)} {2}$，只要 $s^2 + s \geq 2G$ 糖果就可以保证被发完。而只要 $s \geq \sqrt{2G}$ 时，就有 $s^2 \geq 2G$，显然也有 $s^2 + s \geq 2G$。
因此可知总的步数 $s \leq \lceil \sqrt{2G} \rceil$，时间复杂度为 $O(\sqrt{G})$。另外建立糖果分配数组并初值赋值需要 $O(N)$ 的时间，因此总的时间复杂度为 $ O(max(\sqrt{G}, N)) $。
* 空间复杂度：$ O(1) $. 除了答案数组只需要常数空间来存储若干变量。
