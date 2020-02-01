/**
 * @param {number[]} asteroids
 * @return {number}
 */
export default function asteroidCollision(asteroids) {
  const stack = [];

  for (let ans of asteroids) {
    let destroyed = false;
    // 检查碰撞
    while (stack.length !== 0 && stack[stack.length - 1] > 0 && ans < 0) {
      if (stack[stack.length - 1] > -ans) {
        // 左移动行星被右移动行星摧毁
        destroyed = true;
        break;
      } else if (stack[stack.length - 1] < -ans) {
        // 右移动行星被左移动行星摧毁
        stack.pop();
      } else {
        // 两个行星都爆炸了
        destroyed = true;
        stack.pop();
        break;
      }
    }

    // 行星没有被摧毁
    if (!destroyed) stack.push(ans);
  }

  return stack;
}
