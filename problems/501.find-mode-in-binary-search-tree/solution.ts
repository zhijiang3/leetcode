import TreeNode from "data-structure/TreeNode";

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

export default function findMode(root: TreeNode<number>): number[] {
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
