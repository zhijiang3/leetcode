# 二叉搜索树中的众树

> 题目地址: [https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/](https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/)

## 题目描述

给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。

假定 BST 有如下定义：

- 结点左子树中所含结点的值小于等于当前结点的值
- 结点右子树中所含结点的值大于等于当前结点的值
- 左子树和右子树都是二叉搜索树

例如：

```
给定 BST [1,null,2,2],

   1
    \
     2
    /
   2
返回[2].
```

**提示：**如果众数超过1个，不需考虑输出顺序

**进阶：**你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）

------

## 题解

利用**二叉搜索树的中序遍历是从小到大的**特性，就可以知道相同的数字一定连续排列，所以我们做统计时可以利用 3 个变量去记录众数，我们另 `base` 为当前遍历到的数，`count` 为当前数字出现的次数，`maxCount` 为出现次数最多的数字，那么：

1. 首先更新 `base` 和 `count` 的值
  - 如果当前遍历的节点值与 `base` 一致，则 `count += 1`
  - 如果不一致，则修改 `base` 为当前节点的值，并且复位 `count` 为 1
2. 然后更新 `maxCount`
  - 如果 `count > maxCount` 那么清空众数数组，并重新添加当前 `base`
  - 如果 `count == maxCount` 那么把当前 `base` 添加到众数数组中

### 中序遍历递归版

#### 代码实现

```ts
function findMode(root: TreeNode): number[] {
  let ans = [];
  let base: number;
  let count = 0, maxCount = 0;

  function inOrder(root: TreeNode<number>) {
    if (!root) return;

    inOrder(root.left);

    if (base !== root.val) {
      base = root.val;
      count = 1;
    } else {
      count++;
    }

    if (count === maxCount) {
      ans.push(base);
    } else if (count > maxCount) {
      maxCount = count;
      ans = [base];
    }

    inOrder(root.right);
  }

  inOrder(root);

  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $. $n$ 为节点个数
* 空间复杂度：$ O(n) $. 如果不计算递归产生的空间，则为 $O(1)$

### Morris 中序遍历

Morris 遍历的核心思想是利用空节点去指向当前遍历对象其下一个应该遍历的元素。

#### 代码实现

```ts
function inOrder(root: TreeNode<number>, callback: (root: number) => void) {
  let prev: TreeNode<number>, curr = root;

  while (curr) {
    if (!curr.left) { // 如果左节点没有，直接访问右节点
      callback(curr.val);
      curr = curr.right;
    } else {
      prev = curr.left;
      while (prev.right && prev.right !== curr) prev = prev.right;

      if (!prev.right) {
        prev.right = curr; // 为最后遍历的节点设置一个返回上层的指针
        curr = curr.left; // 访问当前的左节点
      } else {
        // 如果再一次进入，此时，curr指向的是上一层
        // 清理返回上层的指针
        prev.right = null;
        callback(curr.val); // 访问当前节点
        curr = curr.right;// 继续遍历节点的上一层
      }
    }
  }
}

function findMode(root: TreeNode): number[] {
  let ans = [];
  let base: number;
  let count = 0, maxCount = 0;

  inOrder(root, val => {
    if (base !== val) {
      base = val;
      count = 1;
    } else {
      count++;
    }

    if (count === maxCount) {
      ans.push(base);
    } else if (count > maxCount) {
      ans = [base];
      maxCount = count;
    }
  });

  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $. $n$ 为节点个数
* 空间复杂度：$ O(1) $.
