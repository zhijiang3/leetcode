/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
export default function canVisitAllRooms(rooms) {
  const visited = new Array(rooms.length).fill(false);
  const stack = [];
  let nums = 0;

  stack.push(rooms[0]);
  visited[0] = true;

  while (stack.length) {
    const keys = stack.pop();
    nums++;

    keys.forEach(key => {
      if (visited[key]) return;

      stack.push(rooms[key]);
      visited[key] = true;
    });
  }

  return nums === rooms.length;
}
