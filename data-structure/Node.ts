export default class Node<T> {
  constructor(
    public val: T,
    public prev: Node<T> = null,
    public next: Node<T> = null,
    public child: Node<T> = null
  ) {}
}
