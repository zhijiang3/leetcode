/**
 * 并查集
 */
export default class UnionFind {
  private parent: number[] = [];
  private rank: number[] = [];

  constructor(size: number) {
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  find(x: number): number {
    if (this.parent[x] === x) return x;

    // 路径压缩优化
    return this.parent[x] = this.find(this.parent[x]);
  }

  union(x: number, y: number) {
    const xRoot = this.find(x);
    const yRoot = this.find(y);

    // 按秩合并优化
    if (xRoot !== yRoot) {
      let large = xRoot;
      let small = yRoot;

      if (this.rank[xRoot] < this.rank[yRoot]) {
        large = yRoot;
        small = xRoot;
      }

      if (this.rank[large] === this.rank[small]) {
        this.rank[large]++;
      }

      this.parent[small] = large;
    }
  }
}
