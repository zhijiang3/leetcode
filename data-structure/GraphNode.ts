export default class GraphNode<T> {
  constructor(
    public val: T,
    public neighbors: T[] = []
  ) {}
}
