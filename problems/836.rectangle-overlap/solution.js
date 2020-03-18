/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
export default function isRectangleOverlap(rec1, rec2) {
  const [rect1_x1, rect1_y1, rect1_x2, rect1_y2] = rec1;
  const [rect2_x1, rect2_y1, rect2_x2, rect2_y2] = rec2;

  return rect2_x2 > rect1_x1 && rect2_x1 < rect1_x2 && rect2_y2 > rect1_y1 && rect2_y1 < rect1_y2;
}
